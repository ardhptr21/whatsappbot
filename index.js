import wweb from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import commander from './src/commander.js';

const client = new wweb.Client({
  authStrategy: new wweb.LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox'],
  },
});

client.on('qr', (qr) => qrcode.generate(qr, { small: true }));

client.on('ready', () => console.log('Client already to use'));

client.on('message', async (msg) => commander(client, msg));

client.initialize();
