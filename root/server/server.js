const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/contact-form', (req, res) => {
    const { fName, lName, email, phone, method, time, interest, reference, questions } = req.body;

    // Validate the data
    if (!fName || !lName || !email || !phone) {
        return res.status(400).send('Please fill in all required fields.');
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
        host: "smtp.example.com", // Replace with your SMTP host
        port: 587, // Replace with your SMTP port
        secure: false, // true for 465, false for other ports
        auth: {
            user: "your_email@example.com", // Replace with your email address
            pass: "your_email_password" // Replace with your email password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // Setup email data with unicode symbols
    let mailOptions = {
        from: '"YSL Lawn Care Contact Form" <your_email@example.com>', // sender address
        to: 'ysllawncare@gmail.com', // list of receivers
        subject: 'Contact Form Submission from YSL Lawn Care Website', // Subject line
        html: output // html body
    };

    // Send email with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            res.status(500).send('There was an error sending your message. Please try again later.');
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.send('Thank you for your submission! We will get back to you soon.');
    });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));