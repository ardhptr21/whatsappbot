import { help, candaan, ping, sticker, genimg } from './command/index.js';

/**
 *
 * @param {import("whatsapp-web.js").Client} client
 * @param {import("whatsapp-web.js").Message} msg
 */
export default function commander(client, msg) {
  // SINGLE COMMANDS
  switch (msg.body) {
    case '!ping':
      ping(client, msg);
      break;
    case '!help':
      help(client, msg);
      break;
    case '!sticker':
      sticker(client, msg);
      break;
  }

  // ARGUMENT COMMANDS
  if (msg.body.startsWith('!candaan')) candaan(client, msg);
  if (msg.body.startsWith('!genimg')) genimg(client, msg);
}
