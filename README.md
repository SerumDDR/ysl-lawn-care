# ysl-lawn-care
YSL Lawn Care – Website
Responsive business website for YSL Lawn Care LLC, featuring a modern front-end and a Node.js + Express backend to handle lead capture via contact forms. Designed with accessibility, scalability, and future deployment in mind.
🚀 Overview
This project is a full-featured small business site built for a Colorado-based lawn care company. It includes a complete front-end layout and a secure contact form backend using Node.js, Express, and Nodemailer. The website is built to scale, with modular HTML/CSS structure, backend email routing, and accessibility enhancements following WCAG 2.1 and Google Web Vitals.
🧰 Tech Stack
•	Frontend: HTML5, CSS3, JavaScript (Vanilla)
•	Backend: Node.js, Express.js, Nodemailer
•	Dev Tools: Git, GitHub, VS Code, dotenv
•	Accessibility: ARIA roles, keyboard navigation
•	SEO/UX: Responsive meta tags, sitemap, robots.txt
📂 Project Structure
ysl-lawn-care/
├── public/
│   ├── css/
│   ├── images/
│   ├── scripts/
│   └── *.html
├── server/
│   └── server.js
├── .env.example
├── .gitignore
├── README.md
├── package-lock.json
└── package.json
📬 Features
•	Fully responsive layout for mobile, tablet, and desktop
•	Contact form submission via secure backend
•	Spam protection using honeypot technique
•	Screen reader accessibility (ARIA-friendly)
•	SEO friendly with sitemap.txt, robots.txt, meta descriptions
•	Hours of operation, embedded Google Maps, social media links
⚙️ Setup Instructions
1.	Clone the repository: git clone https://github.com/SerumDDR/ysl-lawn-care.git
2.	Navigate to project: cd ysl-lawn-care
3.	Install dependencies: npm install
4.	Create a .env file with SMTP_USER, SMTP_PASS, NOTIFY_EMAIL
5.      Start server: npm start
6.	Visit site: http://localhost:3000
✅ To Do / Coming Soon
•	Connect to database for persistent form storage (MongoDB or MySQL)
•	Deploy live via Netlify + Render or Vercel
•	Add auto-responder email confirmation to users
•	Add Lighthouse + Axe-core automated accessibility checks
•	Add unit tests and CI for backend routes
🧪 Accessibility & Testing Tools
•	WAVE: https://wave.webaim.org/
•	Chrome Lighthouse: https://developer.chrome.com/docs/lighthouse/
•	axe-core: https://github.com/dequelabs/axe-core
•	HTML Validator: https://validator.w3.org/
🛡️ License
This project is licensed under the MIT License.
👨‍💼 Maintainer
Donnie Ranjel
📧 ysllawncare@gmail.com
🌍 Colorado, United States
🔗 Portfolio: Coming Soon
