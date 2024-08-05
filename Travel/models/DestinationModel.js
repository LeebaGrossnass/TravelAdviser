// Require Mongoose
import mongoose from "mongoose";

// Define a schema
const Schema = mongoose.Schema;

const DestinationSchema = new Schema({
    Code: Number,
    CityName: String,
    Country: String
    
},{versionKey:false});

const DestinationModel = mongoose.model("DestinationModel", DestinationSchema,"Destinations");
export default DestinationModel;