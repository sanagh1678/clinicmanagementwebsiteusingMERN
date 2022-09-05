//Node JS require
//The basic functionality of require is that it reads a 
//JavaScript file, executes the file, and then proceeds 
//to return the export object.
const ex = require('express');
const bodyparser =require("body-parser")


const app = ex();
var cors = require('cors')
app.use(cors())

app.use(bodyparser.json())
app.use(ex.json());

//The express() syntax is the equivalent of saying new express(). 
//It creates a new instance of express that you can assign to a variable.

app.post("/register",async(res,req)=>{
    console.log( req.body.adminUsername)
    res.send("eyes")
})

// START SERVER port no 5000...
//AFTER STARTING SERVER IT WILL CALL THE FUNCTION

app.listen(5000, () => { console.log('EXPRESS Server is Running at Port No 5000'); }
);

/*
app.listen(5000, function () {
    console.log('EXPRESS Server is Running at Port No 5000');
});
*/
