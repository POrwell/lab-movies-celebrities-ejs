const router = require('express').Router()
const Celeb = require("../models/Celebrity.model")

// all your routes here
router.get("/celebrities/create", (req, res) => {
    res.render("celebrities/new-celebrity", { celebrity: {name: "", occupation: "", catchPhrase: ""} })
})

router.post("/celebrities/create", async (req, res) => { 
    try {
    await Celeb.create({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    })
    res.redirect("/celebrities")
} catch (error) {
    res.render("celebrities/new-celebrity")
}
})

router.get("/celebrities", async (req, res) => {
    try {
        const celebs = await Celeb.find()
        res.render("celebrities/celebrities", { celebs } )
    } catch (error) {
        console.log(error)
    }
})

router.get("/celebId", async (req, res) => {
    const celebId = await Celeb.findById()
    console.log(celebId)
    res.render("movies/new-movie", {celebId})
})

module.exports = router