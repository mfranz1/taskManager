const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://root:example@localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
  if (err) throw err;
  
  process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
    // Application specific logging, throwing an error, or other logic here
  });
  client.db('task-service').collection('tasks').insertOne({ text: 'This is a sample task', completed: false })
    .then(result => {
      const id = result.insertedId.toHexString().toString();
      client.db('task-service').collection('categories').insertOne({
        name: 'Starting Tasks', tasks: [id]
      }).then(_ => {
        client.close();
      });
    });
});