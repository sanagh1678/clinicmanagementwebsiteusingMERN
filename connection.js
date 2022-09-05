const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/place",{
  
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:true,
    useCreateIndex:true
    
  
  
}).then(()=>  console.log("success connection")
  
).catch((e)=>console.log(e)
    
);