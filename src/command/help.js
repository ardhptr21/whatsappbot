/**
 * COMMAND: !help
 * SENDBACK: A help info
 *
 *
 * @param {import("whatsapp-web.js").Client} client
 * @param {import("whatsapp-web.js").Message} msg
 *
 * @description Will send back a help info for how to use the bot
 */

export default function help(client, msg) {
  const text = `*Selamat Datang 👋*

*Berikut adalah daftar command yang tersedia:*

1. _!help_
2. _!ping_
3. _!sticker_
4. _!candaan_
5. _!genimg_


Untuk informasi penggunaan setiap command yang tersedia silahkan ketik _?info <nama perintah>_

Contoh: *_?info !candaan_*
`;

  client.sendMessage(msg.from, text);
}
