const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();



app.use(bodyParser.json());

app.use('/api', router);

router.post("/sendmail", (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            user: req.body.from,
            pass: req.body.password
        }
    });

    const emailPromises = req.body.destinataires.map(destinataire => {
        const from = `${req.body.title} <${req.body.from}>`;
        const subject = req.body.objet;
        const text = req.body.contenu;

        const email = {
            from,
            to: destinataire,
            subject,
            text: `${text}`,
            attachments: [{
                filename: req.body.pdfName,
                path: path.join(__dirname, '/cv/' + req.body.pdfName)
            }]
        };

        return transporter.sendMail(email).then(info => {
            console.log('Email sent to: ' + destinataire);
        }).catch(error => {
            console.error('Email error:', error);
        });
    });

    Promise.all(emailPromises)
        .then(() => {
            res.json({ message: 'All emails sent successfully' });
        })
        .catch(error => {
            console.error('Error sending emails:', error);
            res.status(500).json({ error: 'An error occurred while sending emails' });
        });
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
