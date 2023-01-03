import { genimg_info, candaan_info, help_info, ping_info, sticker_info } from '../command_info/index.js';

export default function info(client, msg) {
  const command = msg.body.split(' ')[1];

  if (!command) return client.sendMessage(msg.from, '❌ Mohon masukkan nama command yang ingin diinformasikan');

  switch (command) {
    case '!help':
      client.sendMessage(msg.from, help_info());
      break;
    case '!ping':
      client.sendMessage(msg.from, ping_info());
      break;
    case '!sticker':
      client.sendMessage(msg.from, sticker_info());
      break;
    case '!candaan':
      client.sendMessage(msg.from, candaan_info());
      break;
    case '!genimg':
      client.sendMessage(msg.from, genimg_info());
      break;
    default:
      client.sendMessage(msg.from, '❌ Command tidak ditemukan');
  }
}
