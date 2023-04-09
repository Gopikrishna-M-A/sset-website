const express = require('express')
const ejs = require('ejs')
const app = express()

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')


// HOME ROUTE

app.get("/", (req, res) => {
    res.render('home/index',{title:"Give Title"})
})


// PLACEMENTS ROUTE

app.get("/placements", (req, res) => {
    res.render('placements/overview',{title:"Give Title"})
})

app.get("/placements/mous", (req, res) => {
    res.render('placements/mous',{title:"Give Title"})
})

app.get("/placements/contact", (req, res) => {
    res.render('placements/contact-us',{title:"Give Title"})
})

app.get("/placements/recruiters", (req, res) => {
    res.render('placements/recruiters',{title:"Give Title"})
})

app.get("/placements/recruitment-process", (req, res) => {
    res.render('placements/recruitment-process',{title:"Give Title"})
})


// DEPARTMENTS ROUTE 

app.get("/departments", (req, res) => {
    res.render('departments/cse@sset',{title:"Give Title"})
})

// CAMPUS ROUTE

app.get("/campus", (req, res) => {
    res.render('campus/overview',{title:"Give Title"})
})

app.get("/campus/councelling", (req, res) => {
    res.render('campus/councelling',{title:"Give Title"})
})

app.get("/campus/facilities", (req, res) => {
    res.render('campus/facilities',{title:"Give Title"})
})

app.get("/campus/softskill", (req, res) => {
    res.render('campus/softskill',{title:"Give Title"})
})

app.get("/campus/sewagetreatment", (req, res) => {
    res.render('campus/sewagetreatment',{title:"Give Title"})
})

app.get("/campus/systemofteaching", (req, res) => {
    res.render('campus/systemofteach',{title:"Give Title"})
})

// ACADEMICS ROUTE 

app.get("/academics", (req, res) => {
    res.render('academics/academics',{title:"Give Title"})
})

//ALUMNI
app.get("/alumni", (req, res) => {
    res.render('alumni/overview',{title:"Give Title"})
})
app.get("/alumni/association", (req, res) => {
    res.render('alumni/association',{title:"Give Title"})
})
app.get("/alumni/organization", (req, res) => {
    res.render('alumni/organization',{title:"Give Title"})
})
app.get("/alumni/startups", (req, res) => {
    res.render('alumni/startups',{title:"Give Title"})
})

//NAAC
app.get("/naac", (req, res) => {
    res.render('naac/naac',{title:"Give Title"})
})

// ABOUT

app.get("/about", (req, res) => {
    res.render("about/profile",{title:"About Us"});
  });
  
  app.get("/about/profile", (req, res) => {
    res.render("about/profile",{title:"Institute Profile"});
  });
  
  app.get("/about/vision-mission", (req, res) => {
    res.render("about/visionMission",{title:"Vision & Mission"});
  });
  
  app.get("/about/objectives", (req, res) => {
    res.render("about/objectives",{title:"SSET Objectives"});
  });
  
  app.get("/about/recogonition-affiliation", (req, res) => {
    res.render("about/recogonition",{title:"Recogonition & Affiliation"});
  });
  
  app.get("/about/management", (req, res) => {
    res.render("about/management",{title:"Management"});
  });
  
  app.get("/about/director-message", (req, res) => {
    res.render("about/director_msg",{title:"Director’s Profile"});
  });
  
  app.get("/about/principal-message", (req, res) => {
    res.render("about/principalMsg",{title:"Principal’s Profile"});
  });
  
  app.get("/about/salient-features", (req, res) => {
    res.render("about/salientFeatures",{title:"Salient Features"});
  });
  
  app.get("/about/awards-accolades", (req, res) => {
    res.render("about/awards",{title:"Awards & Accolades"});
  });
  
  app.get("/about/grievance-redressal-committee", (req, res) => {
    res.render("about/grievance",{title:"Grievance Redressal Committee"});
  });

  //IQAC Page from NAAC Section
  app.get("/about/iqac-committee", (req, res) => {
    res.render("about/iqac_committee",{title:"IQAC Committee"});
  });
  
  app.get("/about/internal-complaints-committee", (req, res) => {
    res.render("about/internalComplaints",{title:"Internal Complaints Committee"});
  });
  
  app.get("/about/scst-monitoring", (req, res) => {
    res.render("about/scstMonitoring",{title:"SC/ST Monitoring Committee"});
  });
  
  app.get("/about/Regulations-Antiragging", (req, res) => {
    res.render("about/antiRagging",{title:"Antiragging"});
  });
  
  app.get("/about/aicte-essentials", (req, res) => {
    res.render("about/aicte_essentials",{title:"AICTE Essentials"});
  });
  
  app.get("/about/accreditation", (req, res) => {
    res.render("about/accreditation",{title:"Accreditation"});
  });
  
  app.get("/about/policy-documents", (req, res) => {
    res.render("about/policy",{title:"Policy Documents"});
  });
  
  // ADMISSIOIN
  app.get("/admission", (req, res) => {
    res.render("admission/admission",{title:"Admission"});
  });

app.listen(3000, (err) => {
    if (err) {
        console.log("err!!!!!");
    } else {
        console.log("server started at port 3000");
    }
})

