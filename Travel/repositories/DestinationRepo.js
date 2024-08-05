 import DestinationModel from "../models/destinationModel.js";
import BaseRepo from "./BaseRepo.js";

class DestinationRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
    // async getAll() {
    //     let data = await this.model.find({}).exec();
    //     return data;

    // }
    // async get(id) {
    //     try {
            
    //          let data = await this.model.findById(id); 
    //          return data;  
    //     }
    //     catch (errors) {
    //         throw errors;
    //     }
    // }
    
}
export default new DestinationRepo(DestinationModel);