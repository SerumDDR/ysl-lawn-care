require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.post('/contact-form', (req, res) => {
    const { fName, lName, email, phone, method, time, interest, reference, questions } = req.body;

    // Validate the data
    if (!fName || !lName || !email || !phone) {
        res.status(400).send('Please fill in all required fields.');
        return;
    }

    // Create the email message
    const output = `
        <p>You have a new contact form submission</p>
        <h3>Contact Details</h3>
        <ul>
            <li>First Name: ${fName}</li>
            <li>Last Name: ${lName}</li>
            <li>Email: ${email}</li>
            <li>Phone: ${phone}</li>
            <li>Preferred Method: ${method ? method.join(', ') : 'No preference'}</li>
            <li>Convenient Time: ${time ? time.join(', ') : 'No preference'}</li>
            <li>Interested in: ${interest ? interest.join(', ') : 'No interest'}</li>
            <li>How did you find us: ${reference}</li>
            <li>Questions: ${questions}</li>
        </ul>
    `;

    // Create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT, 10),
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    // Setup email data with unicode symbols
    let mailOptions = {
        from: `"YSL Lawn Care Contact Form" <${process.env.SMTP_USER}>`,
        to: process.env.MAIL_TO,
        subject: 'Contact Form Submission from YSL Lawn Care Website',
        html: output,
    };

    // Send email with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('There was an error sending your message. Please try again later.');
            return;
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.send('Thank you for your submission! We will get back to you soon.');
    });
});
app.listen(port, () => console.log(`Server listening on port ${port}`));
