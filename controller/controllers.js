const bcrypt = require('bcrypt');

const { MongoClient } = require('mongodb');

const mongoURI = "mongodb://localhost:27017";
const mongoClient = new MongoClient(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// console.log(db);

const addGuide = async (req, res) => {
    try {
        await mongoClient.connect()
        const db = mongoClient.db("RADS");
        const _id = (await db.collection("guide").countDocuments()) + 1;
        const encryptedPassword = await bcrypt.hash(req.body.password, 10);
        const status = await db.collection("guide").insertOne({
            _id: _id,
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: encryptedPassword,
            pincode : req.body.pincode,
            contact : req.body.contact,
            description : req.body.description,
            rating : 0
        });
        mongoClient.close();
        if (status.acknowledged == true) {
            res.status(200).json({ msg: "Guide added" })
        }
        else {
            res.status(500).json({ msg: "Something went wrong" })
        }
    }
    catch(err){
        res.status(500).json({ msg: "Something went wrong" })
    }
}

const loginGuide = async (req, res) => {
    await mongoClient.connect()
    const db = mongoClient.db("RADS");
    const result = await db.collection("guide").find({}).toArray();
    mongoClient.close();
    res.status(200).json({ result })
}

const addUser = async (req, res) => {
    try {
        await mongoClient.connect()
        const db = mongoClient.db("RADS");
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
    catch(err){
        res.status(500).json({ msg: "Something went wrong" })
    }
}

const loginUser = async (req, res) => {
    await mongoClient.connect()
    const db = mongoClient.db("RADS");
    const result = await db.collection("user").findOne({email : req.query.email});
    mongoClient.close();
    if(await bcrypt.compare(req.query.password,result.password)){
        res.status(200).json({ msg : "login successful" })
    }
    else{
        res.status(401).json({ msg : "login failed" })
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
    res.status(200).json({ msg: "getGuide" })
}

module.exports = {
    addGuide,
    loginGuide,
    addUser,
    loginUser,
    getGuide,
    getCity
}