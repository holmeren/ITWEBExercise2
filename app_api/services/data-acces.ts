import { MongoClient, Db } from 'mongodb';

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
        collection.insertOne(data);
        this.closeDbConnection();
    }

    public async getOne(collectionString: string, id: string) {
        var test = await this.openDbConnection()
        var myResult;
        if (test != true) {
            return;
        }

        var collection = this.db.collection(collectionString);
        var result = await collection.findOne({ name: id }).then(result1 => {
            myResult = result1;
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
}