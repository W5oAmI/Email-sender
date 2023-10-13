
# Emails Sender

## Description

Emails Sender is a Node.js backend application for sending emails using the Nodemailer library. This repository provides a simple guide on how to use the backend to send emails with attachments.

## Prerequisites

Before you can use this backend application, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/W5oAmI/Email-sender.git
   cd Email-sender-main
   ```

2. Install the required Node.js packages:

   ```bash
   npm install
   ```

3. Place your resume or CV file in the `cv` folder within the project directory.

## Sending Emails

You can use Postman or any other API client to send emails. Here's how to do it:

- **Method**: POST
- **URL**: `http://localhost:3000/api/sendmail`

### Request Body (JSON):

```json
{
    "from": "your_email@gmail.com",
    "password": "yourAppPassword",
    "title": "Your Name",
    "objet": "Subject",
    "contenu": "Content with \\n for line breaks",
    "pdfName": "your-resume.pdf",
    "destinataires": [
        "recipient1@example.com",
        "recipient2@example.com",
        "recipient3@example.com"
    ]
}
```

Make sure to replace `"your_email@gmail.com"` with your actual Gmail email and `"yourAppPassword"` with the generated App Password for sending emails. You can specify your details for the sender and the email content as required.

## Usage

1. Start the server:

   ```bash
   nodemon app.js
   ```

2. Use Postman or any API client to send email requests as described above.
