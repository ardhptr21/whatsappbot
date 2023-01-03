import wweb from 'whatsapp-web.js';
import openai from '../utils/openai.js';
/**
 * COMMAND: !genimg
 * SENDBACK: A image
 *
 *
 * @param {import("whatsapp-web.js").Client} client
 * @param {import("whatsapp-web.js").Message} msg
 *
 * @description Generate an image from user description with OpenAI API
 */
export default async function genimg(client, msg) {
  const prompt = msg.body.replace('!genimg', '').trim();
  if (!prompt.length) return client.sendMessage(msg.from, '❌ harap masukkan deskripsi gambar yang akan digenerate');

  try {
    client.sendMessage(msg.from, '🔃 Sedang melakukan generate...');
    const res = await openai.createImage({ prompt, n: 1, size: '256x256' });
    const media = await wweb.MessageMedia.fromUrl(res.data.data[0].url);
    client.sendMessage(msg.from, media);
  } catch (err) {
    console.log(err.response.data);
    client.sendMessage(msg.from, '❌ Mohon maaf ada kesalahan');
  }
}
