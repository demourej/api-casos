import dbClient from "../config/dbClient.js";

class casosModel {

    async create(caso) {
        const colCasos = dbClient.db.collection('casos');
        return await colCasos.insertOne(caso)
    }
}

export default new casosModel;