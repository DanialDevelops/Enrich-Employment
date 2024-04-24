import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import nodemailer from 'nodemailer';


const app = express();
const port = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const uploadDir = path.join(__dirname, 'uploads');
app.use('/uploads', express.static(uploadDir));

app.use(cors());
app.use(bodyParser.json());


// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const extension = file.originalname.split('.').pop();
    cb(null, `${file.fieldname}-${Date.now()}.${extension}`)
  }
});

if (!fs.existsSync(uploadDir)){
  fs.mkdirSync(uploadDir, { recursive: true });
}
  

const upload = multer({ storage: storage });

// Routes
app.post('/upload', upload.single('resume'), (req, res) => {
    console.log(req.file);
    res.send({ message: 'File uploaded successfully', fileName: req.file.filename });
  }, (error, req, res, next) => {
    // This error handling middleware catches errors thrown by Multer
    if (error instanceof multer.MulterError) {
      res.status(500).send({ message: error.message });
    } else {
      next(error);
    }
  });

  app.post('/submit', upload.single('resume'), async (req, res) => {
    // req.file is the 'resume' file
    // req.body will hold the text fields, if there were any
  
    let transporter = nodemailer.createTransport({
      service: 'Outlook365',
      auth: {
        type: 'OAuth2',
        user: process.env.OUTLOOK_EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: process.env.ACCESS_TOKEN,
      },
    });
  
    let mailOptions = {
      from: process.env.OUTLOOK_EMAIL,
      to: process.env.OUTLOOK_EMAIL,
      subject: 'New Form Submission',
      text: `New submission received:
      First Name: ${req.body.firstName}
      Last Name: ${req.body.lastName}
      Email: ${req.body.email}`,
      attachments: [
        {
          filename: req.file.originalname,
          path: req.file.path
        }
      ]
    };
  
    try {
      let info = await transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
      // ... (rest of your success handling)
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send({ message: 'Error sending email', error: error.message });
    }
  });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});