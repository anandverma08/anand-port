import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  skills = ["HTML5", "CSS", "Bootstrap", "Javascript", "Typescript", "Angular", "Vue JS", "Node JS", "Express", "Agile", "Jest", "JIRA", "GIT", "SVN", "Bitbucket", "MongoDB"];
  skillProgressBar = [{
    skill: "HTML + CSS + Bootstrap",
    progress: "90%"
  }, {
    skill: "Javascript",
    progress: "85%"
  },
  {
    skill: "TypeScript",
    progress: "80%"
  },
  {
    skill: "Angular",
    progress: "70%"
  },
  {
    skill: "VueJS",
    progress: "75%"
  },
  {
    skill: "Development Tools",
    progress: "95%"
  }]
  systemEngineer = [
    "Received exposure to complete software development life cycle and client interaction.",
    "Created a statement builder tool for financial advisors to help them achieve better relationship with their clients",
    "Designed header and footer for the customer’s application in Vue.js",
    "Implemented content as a service for web applications using Vue.js",
    "Implement content Caching mechanism for applications to continue receiving page content if server goes down",
    "Developed home page for the customer’s application and migrated it from monolith JAVA code to better Angular Code",
    "Developed web API using Node JS",
    "Developed landing page of core applications using Angular",
    "Integrated web application with Adobe Launch to keep track of user activities",
    "Worked in Scrum based Agile Methodology using tools such as Bitbucket, Bamboo, JIRA",
    "Wrote unit test cases using Jest for Vue.js"
  ]
  assistantSystemEngineer = [
    "Designed customer’s widely used fund comparison tool which generates real time comparison of funds using JSON data",
    "Implementation of next generation Log on layer in home page, which can be used across all pages in financial advisor services",
    "Created a solution to help customer get 30% more web traffic on legacy monolith pages using DOM manipulation",
    "Wrote unit test cases for Java web service in JUnit",
    "Conducted sessions on Angular JS"
  ]
  gradDetails = [
    "Completed Bachelors of Computer Science and Technology from Shri Vaishnav Vidhyapeeth Vishwavidhyalaya with 7.53/10 CGPA in 2017",
    "Completed 12th from Ujjain Public School, Ujjain with 81.2% in 2013",
    "Completed 10th from kalidas Montessori School, Ujjain with 85.2% in 2011"
  ]
  achievements = [
    "Secured 2nd Position in TCS BFS Finathon for developing Unified Investment Dashboard",
    "Awarded with TCS LIREL award for outstanding performance in TCS initial learning Program",
    "Awarded with several \"On the Spot\" awards for solving production issues in quick time",
    "Published poet on Rekhta"
  ]
  summary = [
    "3 years of experience working in a corporate environment as an front-end developer. Strong technical skills in complex website development",
    "Good understanding of interactive web applications utilizing JavaScript, Typescript, HTML5, CSS3, Angular, VueJS, Node.js, AJAX, JSON and integration of Restful API's",
    "Strong foundation in JavaScript along with Angular and VueJS",
    "Well familiar with web technologies and standards to deliver the best experiences across web and mobile devices",
    "Extensively worked on developing and consuming REST services",
    "Good knowledge in building, testing and deploying scalable, accessible and modular software products with MVC, MVVM design patterns",
    "Experience of developing code as per Web Accessibility guidelines",
    "Good understanding of Data Structures like Linked Lists, Binary Search Tree, Graph etc."
  ]
  pSummary = "Anand is a front end JavaScript developer with 3 years of industry experience having out of the box thinking to provide web-based solutions and specialises in front end development using modern JavaScript frameworks. He is looking for a full stack developer role."
  constructor() {
  }

  ngOnInit(): void {
    if (document.getElementById('navigationBar').style.display == "block") {
      document.getElementById('navigationBar').style.display = ""
    }
  }

}
