//Read data fom mongodb
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const database = 'e-comm'
const client = new MongoClient(url);             //nodejs is client here and mongodb is server.

async function dbConnect()
{
    let result = await client.connect();
    db=result.db(database);                  //telling name of our database
    return db.collection('products'); 
}    
console.warn(dbConnect());  //first print this line it will return promise

//to handle this we can use 2 methods
//1- promise.then

// dbConnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     });
// });

//2- by using async -await
const main=async()=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    console.log(data);
}
main();

