const connectQueue = require("../rabbitmq");
const db = require("../db");

async function startWorker() {
  const { channel, queue } = await connectQueue();

  channel.consume(queue, msg => {
    const data = JSON.parse(msg.content.toString());

    const total = data.basic_salary + data.bonus;

    db.query(
      "INSERT INTO payroll (employee_name, basic_salary, bonus, total_salary) VALUES (?, ?, ?, ?)",
      [data.employee_name, data.basic_salary, data.bonus, total],
      (err, result) => {
        if (err) throw err;
        console.log("Payroll Processed:", data.employee_name);
      }
    );

    channel.ack(msg);
  });

  console.log("Worker is running...");
}

startWorker();