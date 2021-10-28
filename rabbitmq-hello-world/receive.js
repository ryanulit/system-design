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
    
    console.log(`waiting for messages from queue:`, keys.queueName)

    chan.consume(keys.queueName, (msg) => {
      console.log('received message:', msg.content.toString())
    }, {
      noAck: true
    })
  })
})