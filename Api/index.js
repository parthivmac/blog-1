const express = require('express');
const cors = require('cors');
const mongo = require('mongoose');
const UserModel = require('./models/User');
const app = express();
app.use(cors());
app.use(express.json());

mongo.connect('mongodb+srv://blog:HNGzbKzp5quG9bLZ@cluster0.8h8b609.mongodb.net/?retryWrites=true&w=majority');
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await UserModel.create({ username, password });
        res.json(userDoc);
    }catch(e){
        res.status(400).json(e);
    }
    console.log(res.json({ username, password }));
})
//
app.listen(4000);