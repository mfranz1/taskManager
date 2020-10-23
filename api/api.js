const express=require('express');
const app=express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://root:example@localhost:27017';
const bodyParser=require('body-parser');
const ObjectID = require('mongodb').ObjectID;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    if (err) throw err;
    
    process.on('unhandledRejection', (reason, promise) => {
      console.log('Unhandled Rejection at:', promise, 'reason:', reason);
      // Application specific logging, throwing an error, or other logic here
    });
    app.post('/db/task-service/tasks', (req,res,next)=>{
        var task={
            _id: req.body.ObjectID,
            text: req.body.text,
            completed: req.body.completed
        };
        client.db('task-service').collection("tasks").insertOne(task, (err, result) =>{
            if(err){
                console.log(err);
            }
    
            res.send('task added successfully');
        })
    })
    
    app.get('/db/task-service/tasks', (req,res)=>{
        client.db('task-service').collection("tasks").find().toArray((err,results)=>{
            res.send(results)
        });
    });
    
    app.get('/db/task-service/tasks:_id', (req,res,next)=>{
        if(err){
            throw err;
        }
        let _id=ObjectID(req.params._id);
        client.db('task-service').collection("tasks").find(_id).toArray((err,results)=>{
            if(err){
                throw err;
            }
            res.send(results)
        });
    });
    
    app.put('/db/task-service/tasks:_id',(req,res,next)=>{
        let id={
            _id: ObjectID(req.params.id)
        };
        client.db('task-service').collection("tasks").updateOne({_id: id}, {$set:{'text':req.body.text, 'completed':req.body.completed}}, (err,result)=>{
            if(err) {
                throw err;
              }
            res.send('task updated sucessfully');
        });
    });
    app.delete('/db/tasks-service/tasks:_id',(req,res,next)=>{
        let _id=ObjectID(req.params.id);
        client.db('task-service').collection("tasks").deleteOne(_id, (err,result)=>{
            if(err){
                throw err;
            }

            res.send('task deleted');
        })
    })
    app.listen(3000, ()=>{
        console.log("running from port 27017");
    })
});