import connect from '../db.js';
import aggregation from '../Pipeline/requestPipeline.js'
import filter from '../Pipeline/filters.js';
class BaseRepo {
    constructor(model) {
        this.model = model;
        //autoBind(this);
        connect();
    }

    async getAll(props) {
        console.log("repo")
        // let subPipeline = filter(props);
        // let agg = aggregation(subPipeline);
        // let data = await this.model.aggregate(agg).exec();
        let data = await this.model.find({}).exec();
        return data;
    }

    async get(id) {
        try {
             let data = await this.model.findById(id); 
             return data;  
        }
        catch (errors) {
            throw errors;
        }
    }

    async getByCity(city, collectionName) {
        return this.model.find({ City: city });
        
      }

    async update(id, data) {
        try {
            console.log("data");
            console.log(data);
            let request = await this.model.findByIdAndUpdate(id, data, { new: true });
            console.log(request);
            return request;
        }
        catch (errors) {
            console.log(errors.message);
            throw new Error("An error occurred while trying to update the request's status. Please try again later.");
        }
    }

    async delete(id) {
        return this.model.findByIdAndDelete(id);
    }

    async add(data){
        try{
            let vol = await this.model.create(data);
            return vol._id;
        }
        catch(errors){
            console.log(errors.message);
            throw new Error("The action failed, please check your credentials and try again.");
        }
    }

}

//module.exports = BaseRepo;
export default BaseRepo;