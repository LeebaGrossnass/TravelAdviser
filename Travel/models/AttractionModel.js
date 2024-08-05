import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AttractionSchema = new Schema({
    // _id: { type: String },
    Code: Number,
    Title: String,
    Description: String,
    ImageUrl: String,
    City: String,
    Address: String,
    Cost: Number,
    Link: String,
    Phonenumber: String,
    ShortDescription: String,

},
{versionKey:false});


// Compile model from schema
const AttractionModel = mongoose.model("AttractionModel", AttractionSchema,"Attractions");
export default AttractionModel;