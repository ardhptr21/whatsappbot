/**
 * COMMAND: !sticker
 * SENDBACK: A sticker
 *
 * @param {import("whatsapp-web.js").Client} client
 * @param {import("whatsapp-web.js").Message} msg
 *
 * @description Send back a sticker from user image
 */
export default async function sticker(client, msg) {
  if (!msg.hasMedia) return client.sendMessage(msg.from, '❌ Silahkan kirim sebuah gambar untuk membuat sticker!');

  try {
    client.sendMessage(msg.from, '⏳ Sedang diproses, mohon tunggu sebentar...');

    const media = await msg.downloadMedia();

    if (!media.mimetype.startsWith('image'))
      return client.sendMessage(msg.from, '❌ Mohon hanya mengirim file gambar saja!');

    if (media.filesize > 1000 * 2000)
      return client.sendMessage(msg.from, '❌ File terlalu besar, harus kurang dari 2MB');

    client.sendMessage(msg.from, media, { sendMediaAsSticker: true });
  } catch (err) {
    console.log(err);
    client.sendMessage(msg.from, '❌ Mohon maaf ada kesalahan');
  }
}
