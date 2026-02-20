const amqp = require("amqplib");

async function connectQueue() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();
  const queue = "payrollQueue";

  await channel.assertQueue(queue);
  return { channel, queue };
}

module.exports = connectQueue;