const mongodb = require('mongodb');
const mongoCredentials = require('../credentials/mongoCredentials');

const uri = `mongodb+srv://${mongoCredentials.username}:${mongoCredentials.password}@cluster0-l2odh.mongodb.net/test?retryWrites=true&w=majority`;

function getAccountingData(username, success, error) {
    //Create a mongo client
    const MongoClient = mongodb.MongoClient;
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    client.connect((err)=>{
        //Get the desired collection
        const collection = client.db("parents").collection("accounting");
        //Find the rest of the data associated with the given username
        collection.findOne({username: username}, function(err, result) {
            if(err) {//An error occured when looking for the rest of the data associated with the given username
                error({message: "Error while retrieving accounting information"});
            } else {
                if(result) {//An entry in the database matches the given username
                    success(result)
                } else {    //No entry in the database matches the given username
                    error({message: "username not found"});
                }
            }
        });
    });
}

function getParentInformation(username, success, error) {
    //Create the mongo client
    const MongoClient = mongodb.MongoClient;
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
    client.connect((err)=> {
        //Get the required collection
        const collection = client.db("parents").collection("credentials");
        collection.findOne({username: username}, function(err, result) {
            if(err) {//An error occured when looking for the rest of the data associated with the given username
                error({message: "Error while trying to get the children associated with the given username"});
            } else {
                if(result) {//The data was found
                    success(result);
                } else {//The data was not 
                    error({message: "username was not found"});
                }
            }
        });
    });
}

module.exports = {
    getAccountingData: getAccountingData,
    getParentInformation: getParentInformation,
}