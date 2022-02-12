require('dotenv').config()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret_token = process.env.ACCESS_SECRET;

const { MongoClient } = require('mongodb');

const mongoURI = "mongodb://localhost:27017";
const mongoClient = new MongoClient(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const addGuide = async (req, res) => {
    try {
        await mongoClient.connect()
        const db = mongoClient.db("RADS");

        const presentUsers = (await db.collection("guide").countDocuments({ email: req.body.email }));

        if (presentUsers >= 1) {
            res.status(409).json({ msg: "Email already exists" })
        }

        const _id = (await db.collection("guide").countDocuments()) + 1;
        const encryptedPassword = await bcrypt.hash(req.body.password, 10);
        const status = await db.collection("guide").insertOne({
            _id: _id,
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: encryptedPassword,
            pincode: req.body.pincode,
            contact: req.body.contact,
            description: req.body.description,
            rating: 0
        });
        mongoClient.close();
        if (status.acknowledged == true) {
            res.status(200).json({ msg: "Guide added" })
        }
        else {
            res.status(500).json({ msg: "Something went wrong" })
        }
    }
    catch (err) {
        res.status(500).json({ msg: "Something went wrong" })
    }
}

const loginGuide = async (req, res) => {
    await mongoClient.connect()
    const db = mongoClient.db("RADS");
    const result = await db.collection("guide").findOne({ email: req.query.email });
    mongoClient.close();
    if(result == undefined){
        res.status(401).json({ msg: "login failed" })
    }
    else{
        if (await bcrypt.compare(req.query.password, result.password)) {
            const token = jwt.sign({email : result.email},secret_token,{expiresIn : '1h'})
            res.status(200).json({ token : token })
        }
        else {
            res.status(401).json({ msg: "login failed" })
        }
    }
}

const updateGuide = async (req, res) => {
    await mongoClient.connect()
    const db = mongoClient.db("RADS");
    const result = await db.collection("guide").findOne({ email: req.body.email });
    if (result == undefined) {
        res.status(404).json({ msg: "guide not found" })
    }
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    try {
        const status = await db.collection("guide").updateOne({ email: req.body.email },
            {
                $set: {
                    fname: req.body.fname,
                    lname: req.body.lname,
                    pincode: req.body.pincode,
                    password: encryptedPassword,
                    description: req.body.description,
                }
            }, { upsert: true }
        )
        mongoClient.close();
        if (status.acknowledged == true) {
            res.status(200).json({ msg: "User updated" })
        }
        else {
            res.status(500).json({ msg: "Something went wrong" })
        }
    } catch (error) {
        res.status(500).json({ msg: "Something went wrong" })
    }
}

const deleteGuide = async (req,res)=>{
    await mongoClient.connect()
    const db = mongoClient.db("RADS");
    const result = await db.collection("guide").deleteOne({ email: req.body.email });
    mongoClient.close();
    if(result.deletedCount == 0 ){
        res.status(500).json({ msg: "Guide not found" });
    }else{
        res.status(204).json({ msg: "Guide Deleted" });
    }
}

const addUser = async (req, res) => {
    try {
        await mongoClient.connect()
        const db = mongoClient.db("RADS");

        const presentUsers = (await db.collection("user").countDocuments({ email: req.body.email }));

        if (presentUsers >= 1) {
            res.status(409).json({ msg: "Email already exists" })
        }
        const _id = (await db.collection("user").countDocuments()) + 1;
        const encryptedPassword = await bcrypt.hash(req.body.password, 10);
        const status = await db.collection("user").insertOne({
            _id: _id,
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: encryptedPassword
        });
        mongoClient.close();
        if (status.acknowledged == true) {
            res.status(200).json({ msg: "User added" })
        }
        else {
            res.status(500).json({ msg: "Something went wrong" })
        }
    }
    catch (err) {
        res.status(500).json({ msg: "Something went wrong" })
    }
}

const loginUser = async (req, res) => {
    await mongoClient.connect()
    const db = mongoClient.db("RADS");
    const result = await db.collection("user").findOne({ email: req.query.email });
    mongoClient.close();
    if(result){
        res.status(401).json({ msg: "login failed" })
    }
    if (await bcrypt.compare(req.query.password, result.password)) {
        const token = jwt.sign({email : result.email},secret_token,{expiresIn : '1h'})
        res.status(200).json({ token : token })
    }
    else {
        res.status(401).json({ msg: "login failed" })
    }
}

const updateUser = async (req, res) => {
    await mongoClient.connect()
    const db = mongoClient.db("RADS");
    const result = await db.collection("user").findOne({ email: req.body.email });
    if (result == undefined) {
        res.status(404).json({ msg: "user not found" })
    }
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    try {
        const status = await db.collection("user").updateOne({ email: req.body.email },
            {
                $set: {
                    fname: req.body.fname,
                    lname: req.body.lname,
                    password: encryptedPassword,
                }
            }, { upsert: true }
        )
        mongoClient.close();
        if (status.acknowledged == true) {
            res.status(200).json({ msg: "User updated" })
        }
        else {
            res.status(500).json({ msg: "Something went wrong" })
        }
    } catch (error) {
        res.status(500).json({ msg: "Something went wrong" })
    }
}

const deleteUser = async (req,res)=>{
    await mongoClient.connect()
    const db = mongoClient.db("RADS");
    const result = await db.collection("user").deleteOne({ email: req.body.email });
    mongoClient.close();
    if(result.deletedCount == 0 ){
        res.status(500).json({ msg: "User not found" });
    }else{
        res.status(204).json({ msg: "User Deleted" });
    }
}

const getCity = async (req, res) => {
    await mongoClient.connect()
    const db = mongoClient.db("RADS");
    const result = await db.collection("city").find({}).toArray();
    mongoClient.close();
    res.status(200).json({ result })
}
const getGuide = async (req, res) => {
    await mongoClient.connect()
    const db = mongoClient.db("RADS");
    const result = await db.collection("guide").findOne({ pincode: req.query.pincode });
    mongoClient.close();
    if (result != undefined) {
        const guide = {
            fname: result.fname,
            lname: result.lname,
            contact: result.contact,
            description: result.description,
            rating: result.rating
        }
        res.status(200).json({ result })
    } else {
        res.status(401).json({ msg: "Guide not found" })
    }
}

module.exports = {
    addGuide,
    loginGuide,
    updateGuide,
    deleteGuide,
    addUser,
    loginUser,
    updateUser,
    deleteUser,
    getGuide,
    getCity
}