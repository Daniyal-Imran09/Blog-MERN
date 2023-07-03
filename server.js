const express = require("express")
const app = express();
const { MongoClient } = require('mongodb');
const PORT = process.env.PORT || 8000



app.use(express.json({extended :false}));

const connectdb = async (operations,res)=>{
  try {
    const client =  await new MongoClient('mongodb://127.0.0.1:27017', { monitorCommands: true });
    client.on('commandStarted', started => console.log(started));
    console.log("hello2");
    await client.connect();
    const db = client.db('Mernblog');
    operations(db,client)
    console.log("hellol");
      //  client.close();
  } catch (error) {
    res.status(500)
  }

}

 app.get('/',(req,res)=> res.send("hello world"))

app.get('/article/:name',async (req,res)=>{
    console.log("hello1");
    try {
      const articlename = req.params.name;
      const client = new MongoClient('mongodb://127.0.0.1:27017', { monitorCommands: true });
      client.on('commandStarted', started => console.log(started));
      console.log("hello2");
      await client.connect();
      const db = client.db('Mernblog');
      const articlesinfo = await db.collection('Articles').findOne({ name: articlename });
      console.log("hello3");
      res.status(200).json(articlesinfo);
      console.log("hello");
      client.close();
    } catch (error) {
      console.error(error);
    }
})

app.get('/articles/:name', async (req,res)=>{

connectdb( async (db,client)=>{
  const articlename = req.params.name;

  const articlesinfo = await db.collection('Articles').findOne({ name: articlename });
  console.log("hello3");
  res.status(200).json(articlesinfo);
  console.log("hello");
client.close();
},res)

});

 app.post('/articles/:name/add-comment',(req,res)=>{
    const {username ,idea } = req.body;
    const aname = req.params.name;

    connectdb( async (db,client)=>{
      const articlename = req.params.name;   
      const articlesinfo = await db.collection('Articles').findOne({ name: articlename });
      console.log(articlesinfo)
      articlesinfo.comments.push({username,idea});
      console.log(articlesinfo._id);

      const result = await db.collection('Articles').updateOne({name: articlename}, { $set: { comments: articlesinfo.comments } });
      console.log("hello3");
      res.status(200).json(result);
      console.log("hello");
    client.close();
    },res)



    
  //  res.status(200).send(articlesinfo);
 });

app.listen(PORT,()=>console.log(`Server started at PORT ${PORT}`));

