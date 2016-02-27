var bio = {
    "name": "David Ciccone",
    "role": "Web Developer",
    "contacts": {
        "email": "test@email.com",
        "mobile": "123-456-7890",
        "github": "username",
        "location": "city, state",
        "blog": "website.com"
    },
    "welcomeMsg": "Hi there, how are you?",
    "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "Customer Service"
    ],
    "bioPic": "images/fry.jpg"
};

var work = {
    "jobs": [{
        "employer": "Company X",
        "title": "customer Representative",
        "dates": "October 2010 - Current",
        "location": "Columbus, OH",
        "discription": "Customer Service Company X"
    }]
};

var projects = {
    "projects": [{

        "title": "Sweet Project 1",
        "dates": "2015",
        "discription": "This was the first sweet project I did",
        "image": "images/fry.jpg"
    }]
};

var education = {
    "schools": [{
        "name": "State University",
        "location": "city, state",
        "degree": "Bachelors of Science",
        "major": "Being awesome",
        "dates": "2006 - 2010"
    }],

    "onlineCourses": [{
        "title": "Front End Developer Nano Degree",
        "school": "Udacity",
        "dates": "2015",
        "url": "http://www.udacity.com"
    }],
};




bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedblog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedpic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#topContacts").append(formattedemail, formattedgithub, formattedblog, formattedlocation);
    $("#header").append(formattedpic, formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }

    $("#footerContacts").append(formattedemail, formattedgithub, formattedblog, formattedlocation);
};




work.display = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedWork = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(formattedWork + formattedTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedlocations = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedlocations);
        var formatteddiscription = HTMLworkDescription.replace("%data%", work.jobs[job].discription);
        $(".work-entry:last").append(formatteddiscription);

    }
};




//Project section
projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].discription);
        $(".project-entry:last").append(formattedProjectDescription);

        var formatttedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
        $(".project-entry:last").append(formatttedProjectImage);

    }
};




//Education section
education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedEducation = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry").append(formattedEducation + formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry").append(formattedMajor);
    }
};


//Online education section
$("#onlineEducation").append(HTMLonlineClasses);
onlineEducation.display = function() {
    for (var eduonline in education.onlineCourses) {
        $("#onlineEducation").append(HTMLonlineSchoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[eduonline].title);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.onlineCourses[eduonline].school);
        $(".online-entry").append(formattedTitle + formattedDegree);
        var formattedDatesol = HTMLonlineDates.replace("%data%", education.onlineCourses[eduonline].dates);
        $(".online-entry").append(formattedDatesol);
        var formattedurlol = HTMLonlineURL.replace("%data%", education.onlineCourses[eduonline].url);
        $(".online-entry").append(formattedurlol);

    }
};

bio.display();
work.display();
projects.display();
education.display();
onlineEducation.display();

$("#mapDiv").append(googleMap);