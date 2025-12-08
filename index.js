import express from 'express';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import nodemailer from 'nodemailer';
import cors from 'cors';
const app = express();
const port = 5000;

mongoose.connect('mongodb+srv://Anuj:Anuj2005@anujapi.pcejgp8.mongodb.net/NewShope').then((val) => {
  app.listen(port, () => {
    console.log('connected and server is running ');
  });
}).catch((err) => {
  console.log(err);
});

app.use(cors());

app.use(express.json());
app.use(fileUpload({
  limits: { fileSize: 5 * 1024 * 1024 },
}));

app.use(express.static('uploads'));

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'raidasanuj6@gmail.com',
    pass: 'hino buft uhzo ydgi'
  }
});
app.get('/', (req, res) => {
  return res.status(200).json({
    status: 'success',
    data: 'hello jee welcome to Server'
  });
});

app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body ?? {};
  try {
    const info = await transporter.sendMail({
      from: '"anuj" <raidasanuj6@gmail.com>',
      to,
      subject,
      text
    });
    return res.status(200).json({
      message: info
    });

  } catch (err) {
    return res.status(500).json({
      error: err.message
    });

  }
});


app.use(userRoutes);
app.use(productRoutes);
app.use(orderRoutes);



