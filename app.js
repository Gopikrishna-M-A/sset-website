const express = require('express')
const ejs = require('ejs')
const app = express()

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')


// HOME ROUTE

app.get("/", (req, res) => {
    res.render('home/index')
})


// PLACEMENTS ROUTE

app.get("/placements", (req, res) => {
    res.render('placements/overview')
})

app.get("/placements/mous", (req, res) => {
    res.render('placements/mous')
})

app.get("/placements/contact", (req, res) => {
    res.render('placements/contact-us')
})

app.get("/placements/recruiters", (req, res) => {
    res.render('placements/recruiters')
})

app.get("/placements/recruitment-process", (req, res) => {
    res.render('placements/recruitment-process')
})


// DEPARTMENTS ROUTE 

app.get("/departments", (req, res) => {
    res.render('departments/cse@sset')
})

// CAMPUS ROUTE

app.get("/campus", (req, res) => {
    res.render('campus/overview')
})

app.get("/campus/councelling", (req, res) => {
    res.render('campus/councelling')
})

app.get("/campus/facilities", (req, res) => {
    res.render('campus/facilities')
})

app.get("/campus/softskill", (req, res) => {
    res.render('campus/softskill')
})

app.get("/campus/sewagetreatment", (req, res) => {
    res.render('campus/sewagetreatment')
})

app.get("/campus/systemofteaching", (req, res) => {
    res.render('campus/systemofteach')
})

// ACADEMICS ROUTE 

app.get("/academics", (req, res) => {
    res.render('academics/academics')
})

//ALUMNI
app.get("/alumni", (req, res) => {
    res.render('alumni/overview')
})
app.get("/alumni/association", (req, res) => {
    res.render('alumni/association')
})
app.get("/alumni/organization", (req, res) => {
    res.render('alumni/organization')
})
app.get("/alumni/startups", (req, res) => {
    res.render('alumni/startups')
})


app.listen(3000, (err) => {
    if (err) {
        console.log("err!!!!!");
    } else {
        console.log("server started at port 3000");
    }
})

