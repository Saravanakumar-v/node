const mongoClient = require('../db/db')

class DBCrud {
    constructor() {
        this.dbname = 'user_db';
        this.collection_name = 'users';
        this.user_collection = mongoClient.db(this.dbname).collection(this.collection_name);
    }

    async writeDB(user_obj) {
        if(await this.user_collection.insertOne(user_obj)) {
            return true
        } else {
            return false
        }
    }

    async readDB() {
        if(await this.user_collection.find().toArray()) {
            return this.user_collection.find().toArray()
        } else {
            return false
        }
    }

    async updateDB(user_obj) {
        const query = {usr_name: user_obj.usr_name}

        if(await this.user_collection.updateOne(query, {$set: user_obj}, {})) {
            return true
        } else {
            return false
        }
    }
}

module.exports = DBCrud;