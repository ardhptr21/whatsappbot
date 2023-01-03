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
  const text = `
Selamat Datang 👋

*Gunakan command - command dibawah untuk menggunakan

1. *!help*
untuk mengeluarkan teks ini

2. *!ping*
untuk melakukan test koneksi

3. *!sticker*
untuk membuat sticker, jangan lupa sertakan gambarnya

4. *!candaan*
untuk memberikan sebuah candaan atau jokes bapak bapak
contoh:
  *_!candaan type:image_*
  *_!candaan type:text_*

5. *!genimg _<prompt>_*
untuk mengenerate sebuah image menggunakan AI, gunakan bahasa inggris
contoh: 
  *_!genimg A cyberpunk monster in a control room_*
`;

  client.sendMessage(msg.from, text);
}
