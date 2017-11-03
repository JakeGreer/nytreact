const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nyt-react",
  {
    useMongoClient: true
  }
);

const articleSeed = [
  {
    title: "Factbox: Trump Tax Plan Stumbles on Local Tax Deduction, 401(k)",
    author: "By REUTERS",
    link: "https://www.nytimes.com/reuters/2017/11/01/us/politics/01reuters-usa-tax-issues-factbox.html",
    dateCreated: "2017-11-01T23:48:40+0000",
    saved: false, 
    dateAdded: new Date(Date.now())
  },
  {
    title: "About John Kelly’s Racist History Lesson",
    author: "By THE EDITORIAL BOARD",
    link: "https://www.nytimes.com/2017/11/01/opinion/kelly-racist-history-slavery-compromise.html",
    dateCreated: "2017-11-01T23:33:44+0000",
    saved: false,
    dateAdded: new Date(Date.now())
  },
  {
    title: "Panel Recommends Opioid Solutions but Puts No Price Tag on Them",
    author: "By ABBY GOODNOUGH and JAN HOFFMAN",
    link: "https://www.nytimes.com/2017/11/01/health/opioids-trump-commission.html",
    dateCreated: "2017-11-01T23:31:39+0000",
    saved: false,
    dateAdded: new Date(Date.now())
  },
  {
    title: "Refugees, Made Visible",
    author: "By DAMIEN CAVE",
    link: "https://www.nytimes.com/2017/11/01/world/australia/refugees-manus-detention.html",
    dateCreated: "2017-11-01T23:27:50+0000",
    saved: false,
    dateAdded: new Date(Date.now())
  },
  {
    title: "U.S. 'Diversity Visa' Program in Spotlight After New York Attack",
    author: "By REUTERS",
    link: "https://www.nytimes.com/reuters/2017/11/01/world/middleeast/01reuters-new-york-attack-immigration-analysis.html",
    dateCreated: "2017-11-01T23:21:34+0000",
    saved: false,
    dateAdded: new Date(Date.now())
  },
  {
    title: "Diversity Visa Lottery: Inside the Program That Admitted a Terror Suspect",
    author: "By MIRIAM JORDAN",
    link: "https://www.nytimes.com/2017/11/01/us/diversity-visa-lottery.html",
    dateCreated: "2017-11-01T23:02:15+0000",
    saved: false,
    dateAdded: new Date(Date.now())
  },
  {
    title: "These Are the Ads Russia Bought on Facebook in 2016",
    author: "By SCOTT SHANE",
    link: "https://www.nytimes.com/2017/11/01/us/politics/russia-2016-election-facebook.html",
    dateCreated: "2017-11-01T22:55:47+0000",
    saved: false,
    dateAdded: new Date(Date.now())
  },
  
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
