/**
 * COMMAND: !ping
 * SENDBACK: pong!
 *
 *
 * @param {import("whatsapp-web.js").Client} client
 * @param {import("whatsapp-web.js").Message} msg
 *
 * @description For send a signal to bot, if it already on or not
 */
export default function ping(client, msg) {
  client.sendMessage(msg.from, '🏓 pong!');
}
