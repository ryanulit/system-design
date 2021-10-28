const amqp = require('amqplib/callback_api')
const keys = require('./keys')

amqp.connect(keys.rabbitUrl, (connErr, conn) => {
  if (connErr) throw connErr
  
  console.log('connected to RabbitMQ')

  conn.createChannel((chanErr, chan) => {
    if (chanErr) throw chanErr

    chan.assertQueue(keys.queueName, {
      durable: false
    })

    chan.sendToQueue(keys.queueName, Buffer.from('hello from sender'))
    console.log('message sent')
  })

  setTimeout(() => {
    conn.close()
    process.exit(0)
  }, 500);
})