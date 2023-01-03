import wweb from 'whatsapp-web.js';
import axios from 'axios';

/**
 * COMMAND: !candaan type:text|image
 * SENDBACK: Image | Text
 *
 *
 * @param {import("whatsapp-web.js").Client} client
 * @param {import("whatsapp-web.js").Message} msg
 *
 * @description Will send a image or text joke base on type from user
 */
export default async function candaan(client, msg) {
  const getType = msg.body.match(/type:(image|text)/);

  if (!getType)
    return client.sendMessage(msg.from, '❌ Masukkan tipe candaan yang valid, _type:image_ atau _type:text_');

  const type = getType[1];

  const api_endpoint = `https://candaan-api.vercel.app/api/${type}/random`;

  try {
    client.sendMessage(msg.from, '⏳ Sedang diproses, mohon tunggu sebentar...');

    const res = await axios.get(api_endpoint);

    if (type === 'text') return client.sendMessage(msg.from, `Candaan untukmu:\n\n"${res.data.data}"`);

    const media = await wweb.MessageMedia.fromUrl(res.data.data.url);

    client.sendMessage(msg.from, media);
  } catch (err) {
    console.log(err);
    client.sendMessage(msg.from, '❌ Mohon maaf ada kesalahan');
  }
}
