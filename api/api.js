const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const {mongoose} = require('./config/mongoose');

app.use(bodyParser.json());

//Mongoose models
const { Cat } = require('./models/cat.model');
const { Task } = require('./models/tasks.model');
 
//returns array of categorys
app.get('/db/task-service/categories',(req,res)=>{
    Cat.find({}).then((categorys)=>{
        res.send(categorys);
    });
})

//adds a new category
app.post('/db/task-service/categories',(req,res)=>{
    let title = req.body.title;

    let newCat = new Cat({
        title
    });
    newCat.save().then((catDoc)=>{
        res.send(catDoc);
    })
})

//Updates categories
app.patch('/db/task-service/categories/:_id',(req,res)=>{
    Cat.findOneAndUpdate({_id: req.params.id},{
        $set: req.body
    }).then(()=>{
        res.sendStatus(200);
    });
});

//delete category
app.delete('/db/task-service/categories/:_id',(req,res)=>{
    Cat.findOneAndRemove({
        _id: req.params.id
    }).then((removedCatDoc)=>{
        res.send(removedListDoc);
    })
})

//Get all tasks for a category
app.get('/db/task-service/tasks',(req,res)=>{
    Task.find({
        _catId: req.params.catId
    }).then((tasks)=>{
        res.send(tasks);
    })
});

//get a single task
app.post('/db/task-service/tasks/:_id',(req,res) => {
    let newTask = new Task({
        title: req.body.title,
        _catId: req.params.catId
    });
    newTask.save().then((newTaskDoc)=>{
        res.send(newTaskDoc);
    });
});

//update exisiting task
app.patch('/db/task-service/tasks/:_id',(req,res)=>{
    Task.findOneAndUpdate({
        _id:req.params.taskid,
        _catId:req.params.catId,
    },{
        $set: req.body
    }).then(()=>{
        res.sendStatus(200);
    })
})

//delete task
app.delete('/db/task-service/tasks/:_id',(req,res)=>{
    Task.findOneAndRemove({
    _id:req.params.taskId,
    _listedId:req.params.listId
    }).then((removedTaskDoc)=>{
        res.send(removedTaskDoc);
    })
});

app.listen(3000, ()=>{
    console.log("running on port 3000");
})