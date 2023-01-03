import { help, candaan, ping, sticker, genimg, info } from './command/index.js';

/**
 *
 * @param {import("whatsapp-web.js").Client} client
 * @param {import("whatsapp-web.js").Message} msg
 */
export default function commander(client, msg) {
  // SINGLE COMMANDS
  switch (msg.body) {
    case '!help':
      help(client, msg);
      break;
    case '!ping':
      ping(client, msg);
      break;
    case '!sticker':
      sticker(client, msg);
      break;
  }

  // ARGUMENT COMMANDS
  if (msg.body.startsWith('?info')) info(client, msg);
  if (msg.body.startsWith('!candaan')) candaan(client, msg);
  if (msg.body.startsWith('!genimg')) genimg(client, msg);
}
