const express = require("express");
const router = express.Router();
const connectQueue = require("../rabbitmq");

router.post("/create", async (req, res) => {
  const { employee_name, basic_salary, bonus } = req.body;

  const { channel, queue } = await connectQueue();

  const msg = JSON.stringify({
    employee_name,
    basic_salary,
    bonus
  });

  channel.sendToQueue(queue, Buffer.from(msg));

  res.json({ message: "Payroll sent to queue successfully" });
});

module.exports = router;