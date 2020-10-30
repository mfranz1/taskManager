const express=require('express');
const app=express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://root:example@localhost:27017';
const bodyParser=require('body-parser');
const ObjectID = require('mongodb').ObjectID;
const cors = require('cors');

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({ origin: true, credentials: true }));

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    if (err) throw err;
    
    process.on('unhandledRejection', (reason, promise) => {
      console.log('Unhandled Rejection at:', promise, 'reason:', reason);
      // Application specific logging, throwing an error, or other logic here
    });
    app.post('/add', (req,res,next)=>{
        let task = {
            _id:req.params._id,
            text:req.body,
            completed:"false"
        }
        try{
            client.db('task-service').collection("tasks").insertOne(task);
            res.send('task added successfully');
        }
        catch(error){
            console.log(error);
        }
    })
    
    app.get('/tasks', (req,res)=>{
        client.db('task-service').collection("tasks").find().toArray((err,results)=>{
            res.send(results)
        });
    });

    app.delete('/deleteTask',(req,res,next)=>{
        let _id=Object(req.params.id);
        /*if(req.params._id === undefined){
            res.sendStatus(404);
        }*/
        try{
            client.db('task-service').collection("tasks").deleteOne(_id, (err,result)=>{
                if(err){
                    throw err;
                }
                res.send('task deleted');
            })
        }
        catch(error){
            res.send(404);
        }
    })
    app.listen(PORT, ()=>{
        console.log(`running from on ${PORT}`);
    })
});