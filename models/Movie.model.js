const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
name: {
    type: String,
    required: true
},
genre: {
    type: String,
    required: true
},
plot: {
    type: String,
    required: true 
},
cast: {
    type: Array,
    required: true
}
})

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;