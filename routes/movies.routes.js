const router = require('express').Router()
const Movie = require("../models/Movie.model")

// all your routes here
router.get("/movies/create", (req, res) => {
    res.render("movies/new-movie", { movie: {title: "", genre: "", plot: "", cast: [] } })
})

router.post("/movies/create", async (req, res) => { 
    try {
    await Movie.create({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot,
        cast: req.body.cast
    })
    res.redirect("/movies")
} catch (error) {
    console.log(error)
    res.render("movies/new-movie")
}
})

router.get("/movies", async (req, res) => {
    try {
        const movies = await Movie.find()
        res.render("movies/movies", { movies } )
    } catch (error) {
        console.log(error)
    }
})

module.exports = router