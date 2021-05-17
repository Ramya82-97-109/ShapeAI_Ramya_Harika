const express= require("express");  //1  
const bodyParser = require("body-parser");  //body-parser 7


const app = express();  // const applicaion  3
app.use(bodyParser.urlencoded({extended: true})); //7.1

app.get("/", function(req,res){                   //4
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){                      //6 
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var result = n1+n2;
    res.send("The answer is " + result);
});

app.listen(3000,function(){                                //5
    console.log("server has started at port 3000");
});    