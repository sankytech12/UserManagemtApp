const express=require('express');
const cors=require('cors');
const app=express();
const port=3000;
const userRouter=require('./routes/user.routes');
const mongoose=require('mongoose');


mongoose.connect(process.env.MONGO_DB_URI)
.then(()=>console.log('Connected to MongoDB'))
.catch(err=>console.error('Could not connect to MongoDB',err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(_,res)=>{
    res.send('Hello World');
});

app.use('/api/users',userRouter);


app.listen(port,()=>console.log(`Server is running on port ${port}`));