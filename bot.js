const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'xxAll.aternos.me',
  port: 58774,
  username: 'Salamibrot',
  auth: 'offline' // Cracked-Server
});

bot.on('login', () => {
  console.log('Bot Salamibrot ist dem Server beigetreten!');
});

bot.on('end', () => {
  console.log('Verbindung getrennt. Bot wird neu gestartet...');
  setTimeout(() => process.exit(1), 5000);
});

bot.on('error', err => {
  console.log('Fehler:', err);
});
