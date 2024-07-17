import express from 'express';
import User from '../models/User.js';
// import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import List from '../models/ListData.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { fullname, username, password } = req.body;
    try {
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        user = new User({ fullname, username, password });
        await user.save();
        res.status(201).json({ message: 'User created' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});




// Login

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      let user = await User.findOne({ username });
  
      if (!user) {
        return res.status(404).json({ error: 'User does not exist' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(401).json({ error: 'Incorrect password' });
      }
      res.json({ message: 'Login successful' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

//         const token = jwt.sign({ id: user._id }, '3q2+7w==SmN1mJ0VeTs1JXJZ==QsYwxW30h', { expiresIn: '1h' });
//         res.json({ token });

//ListData
router.post('/listdata',async (req,res)=>{
  try{
    for(let i=0;i<req.body.length;i++){
    const {image,status_code,title}=req.body[i];
    let list=new List({image,status_code,title});
  await list.save(); 
  }
  res.status(201).json({ message: 'data posted' });
}catch (err) {
  res.status(500).json({ message: 'Server error in postin data',err });
}
})

router.get('/getlist',async(req,res)=>{
 try{
  const listdata=await List.find({});
  res.status(200).json(listdata)
 }catch(err){
  res.status(400).json({message:"Error in getting data",err})
 }
})

router.delete('/deleteitem',async(req,res)=>{
  try{
    await List.deleteMany({})
    res.status(200).json("All Data deleted");
  }catch(err){
    res.status(500).json({message:"Error in deleting the data",err})
  }
});


export default router;