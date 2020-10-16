module.exports = app =>{
    const tasks=require("../controllers/task.controller.js");
    var router = require('express').Router();

    router.post("/",tasks.create);

    router.get("/", tasks.findAll);

    router.put("/:id",tasks.update);

    router.delete("/:id", tasks.delete);


    app.use('/app/ta')
}