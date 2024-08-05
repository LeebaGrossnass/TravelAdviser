import AttractionModel from "../models/AttractionModel.js";
import BaseRepo from "./BaseRepo.js";

class AttractionRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
    

}
export default new AttractionRepo(AttractionModel);
