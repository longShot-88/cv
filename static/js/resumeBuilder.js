var bio = {
    "name": "Andrés Muñoz",
    "role": "Developer",
    "contacts": {
        "mobile": "097-908-4645",
        "email": "asmz5488@gmail.com",
        "github": "longShot-88",
        "twitter": "@AndyMz88",
        "location": "Quito-Ecuador"
    },
    "welcomeMessage": 'Hola Mundo, este es mi CV !!',
    "skills": [
        "Python",
        "javaScript",
        "HTML/CSS",
    ],
    "biopic": "/static/images/photo.jpg",
};

var education = {
    "schools": [
        {
            "name": "Grow School",
            "city": "Quito-Ecuador",
            "degree": "Educación Básica",
            "majors": [
                "Educación Básica",
            ],
            "dates": 1998,
            "url": "--------------"
        },
        {
            "name": "Colegio de Liga",
            "city": "Quito-Ecuador",
            "degree": "Bachiller",
            "majors": [
                "Físico - Matemático"
            ],
            "dates": 2006,
            "url": "www.colegiodeliga.edu.ec"
        },
        {
		"name": "USFQ",
		"city": "Quito-Ecuador",
		"degree": "Economía",
		"majors": ["Economía (6 semestres)"],
		"dates": 2010,
		"url": "www.usfq.edu.ec"
	   }
    ],
    "onlineCourses": [
        {
            "title": "web devolpment",
            "school": "udacity",
            "date": 2016,
            "url": "https://www.udacity.com/course/web-development--cs253"
        },
        {
            "title": "Developing Scalable Apps in Python",
            "school": "udacity",
            "date": 2016,
            "url": "https://www.udacity.com/course/developing-scalable-apps-in-python--ud858"
        },
        {
            "title": "JavaScript Basics",
            "school": "udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/javascript-basics--ud804"
        },
        {
            "title": "Configuring Linux Web Servers",
            "school": "udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/configuring-linux-web-servers--ud299"
        },
        {
            "title": "Design of Computer Programs",
            "school": "udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/design-of-computer-programs--cs212"
        },
        {
            "title": "Data Wrangling with MongoDb",
            "school": "udacity",
            "date": 2014,
            "url": "https://www.udacity.com/course/data-wrangling-with-mongodb--ud032"
        },
        {
            "title": "An Introduction to Interactive Programming in Python",
            "school": "coursera",
            "date": 2013,
            "url": "https://www.coursera.org/learn/interactive-python-1"
        },
    ],
};

var work = {
    "jobs": [
        {
            "employer": "kings Dominion",
            "title": "ilustrador",
            "location": "EEUU",
            "dates": "2012",
            "description": "Encargado de un stand del parque de diversiones, mejoro mi Ingles."
        },
        {
            "employer": "Luna Lunera",
            "title": "Publicista y de todo un poco !!",
            "location": "Quito-Ecuador",
            "dates": "2013-2016",
            "description": "Ayudo a promocionar el local de forma tradicional y digital"
        }
    ],
};

var projects = {
    "projects": [
        {
            "title": "cereza",
            "dates": "2015",
            "description": "Applicación para donar sangre.",
            "images": [
                "url1",
                "url2"
            ]
        },
        {
            "title": "niHao",
            "dates": "2014",
            "description": "Aplicación para aprender chino basada en la data de las redes sociales.",
            "images": [
                "url1",
                "url2"
            ]
        }
    ],
};


// Header FORMATTED
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedHeaderLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
// HEADER APPLIED
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").prepend(formattedHeaderLocation);
$("#topContacts").prepend(formattedTwitter);
$("#topContacts").prepend(formattedGithub);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedMobile);
$("#header").append(formattedbioPic);
$("#header").append(formattedWelcomeMsg);


// SKILLS
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    //	bio.skills.forEach(function(_, i) {
    for (var i in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }
}


// WORK
var displayWork = function () {
    work.jobs.forEach(function (wk, _) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", wk.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", wk.title);
        var formattedDates = HTMLworkDates.replace("%data%", wk.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", wk.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", wk.description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    });
}
if (work.jobs.length > 0) {
    displayWork();
}


// PROJECTS

var displayProjects = function () {
    projects.projects.forEach(function (wk, _) {
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", wk.title);
        var formattedDates = HTMLprojectDates.replace("%data%", wk.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", wk.description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
    });
}
if (projects.projects.length > 0) {
    displayProjects();
}


// EDUCATION
var displayEducation = function () {
    education.schools.forEach(function (wk, _) {
        $('#education').append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", wk.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", wk.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", wk.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", wk.city);
        var formattedMajor = HTMLschoolMajor.replace("%data%", wk.majors);
        $(".education-entry:last").append(formattedName + formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);
    });

    $('#education').append(HTMLonlineClasses);

    education.onlineCourses.forEach(function (wk, _) {
        $('#education').append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", wk.title);
        formattedTitle = formattedTitle.replace("%data2%", wk.url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", wk.school);
        var formattedDate = HTMLonlineDates.replace("%data%", wk.date);

        $(".education-entry:last").append(formattedTitle +formattedSchool);
        $(".education-entry:last").append(formattedDate);
    });
}
if (education.schools.length > 0) {
    displayEducation();
}

// FOOTER
$("#footerContacts").prepend(formattedHeaderLocation);
$("#footerContacts").prepend(formattedTwitter);
$("#footerContacts").prepend(formattedGithub);
$("#footerContacts").prepend(formattedEmail);
$("#footerContacts").prepend(formattedMobile);
