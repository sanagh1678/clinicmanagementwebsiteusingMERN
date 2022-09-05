const express = require('express');
const app = express();
const bodyparser = require("body-parser")
app.use(bodyparser.json())
require("../src/db/connection");

const loginn = require("../src/models/loginn");
const appoint = require("../src/models/appoint");


var cors = require('cors')
app.use(cors())


const port = process.env.PORT || 5000;

app.use(express.json());

app.post("/re", async (req, res) => {
    try {
        console.log(req.body.name)

        const addlogin = new loginn({


            name: req.body.name,
            dob: req.body.dob,
            address: req.body.address,
            phone: req.body.phone,
            medicalh: req.body.medicalh,
            email: req.body.email,
            pass: req.body.pass

        })
        const ins = await addlogin.save().then((ins) => {
            res.send(ins);
            console.log(ins);


        }).catch((e) => {
            res.send("NO");

        })



    } catch (e) {
        res.send(e);
    }
})

app.post("/userlogin",async(req,res)=>{
    try{
        const name=req.body.name;
        const pass=req.body.pass;
       console.log(name)
       console.log(pass)



     const username= await  loginn.findOne({name:name});
     console.log(username)
     
     if(username.pass=== pass)
     {

        res.send("yes");
       
     }
     else{
        res.send("No");
        console.log("not")
     }
     
       
    }catch(e){
        res.send(e);
    }
}
)

app.post("/ap", async (req, res) => {
    try {
        console.log(req.body.firstname)
        console.log(req.body.lastname)

        const addappoint = new appoint({


            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phone: req.body.phone,
            medicalh: req.body.medicalh,
            email: req.body.email,
            age: req.body.age

        })
        const ins = await addappoint.save().then((ins) => {
            res.send(ins);
            console.log(ins);


        }).catch((e) => {
            res.send("NO");

        })



    } catch (e) {
        res.send(e);
    }
})


app.get("/re",async(req,res)=>{
    try{
        // const cityname=req.body.cityname;
        // const select=req.body.select; 

     const city = await  loginn.find({});
     res.send(city);
     console.log(city);

    }catch(e){
        res.send(e);
    }
}
)

app.get("/ap",async(req,res)=>{
    try{
        // const cityname=req.body.cityname;
        // const select=req.body.select; 

     const city = await  appoint.find({});
     res.send(city);
     console.log(city);

    }catch(e){
        res.send(e);
    }
}
)

// router.get('/search/:email', (req, res) => 
//             {
//       loginn.find({"email" : req.params.emailid})
//             .then(getsearchdocument => {
//               if(getsearchdocument.length >0) 
//               {
//                 res.send(getsearchdocument);
//               }
//               else
//               {
//   return res.status(404).send({message: "Note not found with id " + req.params.emailid });
//               }
//           }) 
//             .catch( err => {
//   return res.status(500).send({message: "DB Problem..Error in Retriving with id " + req.params.emailid});           
//             })
//           }
//          );


app.listen(port,()=>{
    console.log(`connection is live at ${port}`);
})