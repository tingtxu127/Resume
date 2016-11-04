/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	
	"name" : "Tingting XU",
	"role" : "Software Engineer, Backend",
	"contacts" :{

	"mobile" : "(202) 615-1251",
	"email" : "xutt127@gmail.com",
	"github" : "DogeSoft",
	"twitter" : "@DogeSoft",
	"linkedin" : "DogeSoft",
	"location" : "1900 South Eads Street, Apt 901, Arlington, VA 22202 "
	},

	"welcomeMessage" : "Obtain a full-time position in software development starting at spring 2016, focus on Backend development",
	"skills" : ["Java", "Python with Numpy/Scipy", "JavaScript/NodeJs", "Web Development", "Test Driven Development", "Data Visualization", "MySQL/NoSQL"],
	"bioPic" : "images/tingting.jpg"
}

var education = {

	"schools" : [
		{
			"name" : "George Washington University",
			"location" : "Washington D.C",
			"degree" : "M.S",
			"majors" : ["Computer Science, GPA 3.5/4.0"],
			"dates" : "01/2014 - 12/2015",
			"url" : "http://www.washington.edu/"
		},
		{
			"name" : "Wuhan Bio-engineering College",
			"location" : "Wuhan, Hubei, China",
			"degree" : "B.S",
			"majors" : ["Computer Science, GPA 3.5/4.0"],
			"dates" : "09/2008 - 07/2012",
			"url" : "http://en.whu.edu.cn/"
		}
	],

	"onlineCourses" : [
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : 2014,
			"url" : "https://www.udacity.com/course/ud804"
		}
	]	
}

var work = {

	"jobs" : [
		{
			"employer" : "Wuhan Chuangyue Technology Co.Ltd",
			"title" : "Software Engineer",
			"dates" : "07/2013 - 11/2013",
			"location" : "Wuhan, Hubei, China",
			"description" : "Planed and Developed the prototype for new ideas and new features in the team.\
			Analyzed requirements from users, and provided the corresponding development and test plan.\
			Assisted system maintenance, including functional improvement, system optimization and technical support."
		},

		{
			"employer" : "Hubei Century Zhongyuan Vehicle Co.Ltd",
			"title" : "Web Developer",
			"dates" : "06/2013 - 03/2013",
			"location" : "Wuhan, Hubei, China",
			"description" : "Redesign the vehicle search application that allows users to search used and new vehicles.\
			Front-End development with JQuery, Bootstrap, and HTML5.\
			Middleware development with Spring Framework, Tomcat server, and building by Maven.\
			Developed APIs as RESTful web services under Service-oriented architecture.\
			Connected middleware to MySQL database with Hibernate, and tested automatically by SoapUI."
		}
	]
} 

var projects = {

	"projects" : [
		{
			"title" : "Interactive Resume",
			"dates" : "2015",
			"description" : "An online resume builder developed by JavaScript, HTML5 and JQuery.\
			Parsing and Visualization of users personal data to generate online resume.\
			Display web resume online via git, heroku and AWS.",
			"images" : ["images/proj1.jpg"]
		}
	]
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);

var role = "Software Engineer, Backend"
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formatteMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedName,formattedRole, formattedPic, formatteMessage);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

$("#topContacts").append(formattedMobile,formattedEmail, formattedLocation, formattedGithub, formattedTwitter);
$("#footerContacts").append(formattedMobile,formattedEmail, formattedLocation, formattedGithub, formattedTwitter);




if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	for (var i=0; i<bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}


}



work.display = function() {
	for (job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);	

	}
}



projects.display = function() {

	for (project in projects.projects) {

		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {

			for (image in projects.projects[project].images) {

				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}



education.display = function() {

	for (school in education.schools) {

		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#",education.schools[school].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);	
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

		$(".education-entry:last").append(formattedName + formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
	}

	if (education.onlineCourses.length > 0) {

		$("#education").append(HTMLonlineClasses);

		for (course in education.onlineCourses) {

			$("#education").append(HTMLschoolStart);

			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

			$(".education-entry:last").append(formattedTitle + formattedSchool);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedURL);

		}
	}
}


work.display();
projects.display();
education.display();


$("#mapDiv").append(googleMap);

