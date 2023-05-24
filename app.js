const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')
const nodemailer = require('nodemailer');
const auth = require('./middleware/auth.middleware');
const User = require('./models/User')
const { log } = require('console');
const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/user', require('./routes/user.routes'))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zhenshbekovan@gmail.com', // Ваша электронная почта
    pass: 'meoepkfppqcfpgew', // Пароль от электронной почты
  },
});
// Маршрут для отправки электронной почты
app.post('/api/send-email',auth, async (req, res) => {
  try {
    const { email, subject, message } = req.body;
    // Создание транспортера Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'zhenshbekovan@gmail.com',
        pass: 'meoepkfppqcfpgew',
      },
    });

    // Определение содержимого письма
    const mailOptions = {
      from: 'zhenshbekovan@gmail.com',
      to: email,
      subject: subject,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: 'письмо доставлено' });
  } catch (error) {
    // Ошибка отправки
    res.status(500).json({ message: ' Ошибка отправки' });
  }
});
app.post('/api/sendBulkEmails',auth,async (req, res) => {
  try {
    const {subject, message } = req.body;
    const user = await User.find();
    const recipients = user.map(email =>{
  return email.email;
});
const sendEmail = async (recipient) => {
  // Настройка опций письма
  const mailOptions = {
    from: 'zhenshbekovan@gmail.com',
    to: recipient,
    subject: subject,
    text: message,
  };

  try {
    // Отправка письма
    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    return null;
  }
};
const emailTasks = recipients.map((recipient) => sendEmail(recipient));
const results = await Promise.all(emailTasks);
res.json({ message: 'письмо доставлено'});
  } catch (error) {
    res.status(500).json({ message:'Ошибка отправки' });
  }
})

const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()

