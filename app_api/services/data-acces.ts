import { MongoClient, Db } from 'mongodb';
var BSON = require('mongodb');

export class DataAccess<T>{

    // public url = 'mongodb://127.0.0.1:27017/ShareIt';
    public url = 'mongodb://norgaard.io:27017/badassFitness'
    public db: Db;
    constructor() { }
    private async openDbConnection(): Promise<boolean> {

        return MongoClient.connect(this.url).then(result => {
            if (result) {
                this.db = result;
                console.log("connected");
                return true;
            }
            return false;
        });

    }

    private closeDbConnection() {
        if (this.db != null) {
            this.db.close();
            console.log("Connection closed");
        }
    }

    public async create(collectionString: string, data: T) {
        var test = await this.openDbConnection()

        if (test != true) {
            return;
        }
        var collection = this.db.collection(collectionString);
        try{
            var result = await collection.insertOne(data);
            this.closeDbConnection();
            return data;
        }catch(e){
            this.closeDbConnection();
            return {"err": e};
        }        
    }

    public async getById(collectionString: string, id: string) {
        var test = await this.openDbConnection()
        var myResult;
        if (test != true) {
            return;
        }
        var collection = this.db.collection(collectionString);

        var obj_id = BSON.ObjectID(id);
        var result = await collection.findOne({ "_id": obj_id }).then(result => {
            myResult = result;
        });
        this.closeDbConnection();
        return myResult;
    }

    public async getAll(collectionString: string) {
        var test = await this.openDbConnection()
        var myResult;
        if (test != true) {
            return;
        }

        var collection = this.db.collection(collectionString);
        var result = await collection.find({}).toArray().then(result1 => {
            myResult = result1;
        });
        this.closeDbConnection();
        return myResult;
    }

    public async getByProperty(collectionString: string, property: string, value: string){
        var test = await this.openDbConnection()
        var myResult;
        if (test != true) {
            return;
        }
        var collection = this.db.collection(collectionString);

        var result = await collection.findOne({[property]:value}).then(result => {
            myResult = result;
        });
        this.closeDbConnection();
        return myResult;
    }
}