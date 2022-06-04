const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();
const EmailSchedule = require("./controllers/EmailSchedule/EmailSchedule")
const EmailSchedules = require('./models/EmailSchedule');
const getAllSchedule = require('./controllers/EmailSchedule/getAllSchedule')
const MONGODB_URL = process.env.MONGODB_URL1;
const PORT = process.env.PORT || 5000;
const schedule = require('node-schedule')


const app = express();

app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.use(express.json({ limit: '25mb' }));
app.use(cors());

// console.log("dirname is",__dirname);
var http = require('http');
var fs = require('fs');


app.get('/builder/:link', (req, res) => {  
  // Print the name of the file for which request is made.
  // console.log("Request for demo file received.");
  fs.readFile(__dirname+"/htmlFiles/builder2.html",function(error, data){
    if (error) {
      res.writeHead(404);
      res.write('Contents you are looking for-not found');
      res.end();
    }  else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data.toString());
      res.end();
    }
  });
});
app.get(`/salesroom-live/:link`, (req, res) => {  
  // Print the name of the file for which request is made.
  // console.log("Request for demo file received.");
  fs.readFile(__dirname+"/htmlFiles/salesroom-live.html",function(error, data){
    if (error) {
      res.writeHead(404);
      res.write('Contents you are looking for-not found');
      res.end();
    }  else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data.toString());
      res.end();
    }
  });
});
app.get('/salesroom-basic/:link', (req, res) => {  
  // Print the name of the file for which request is made.
  // console.log("Request for salesroom file.");
  fs.readFile(__dirname+"/htmlFiles/salesroom.html",function(error, data){
    if (error) {
      res.writeHead(404);
      res.write('Contents you are looking for-not found webinar');
      res.end();
    }  else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data.toString());
      res.end();
    }
  });
});
console.log(__dirname);
app.get('/salesroom-web/:link', (req, res) => {  
  // Print the name of the file for which request is made.
  console.log("inside web preview");

  fs.readFile(__dirname+"/htmlFiles/salesroom-webinar.html",function(error, data){
    if (error) {
      res.writeHead(404);
      res.write('Contents you are looking for-not found webinar');
      res.end();
    }  else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data.toString());
      res.end();
    }
  });
});

app.get('/landing-page/:link', (req, res) => {  
  // Print the name of the file for which request is made.
  // console.log("Request for demo file received.");
  fs.readFile(__dirname+"/htmlFiles/landing-page.html",function(error, data){
    if (error) {
      res.writeHead(404);
      res.write('Contents you are looking for-not found webinar');
      res.end();
    }  else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data.toString());
      res.end();
    }
  });
});

// server.listen(PORT, '127.0.0.1/salesroom.html');

let allEmailsSchedules=[]
let allFullDates = []
const checkScedule = (date,item)=>{
  // console.log("inside check sche",item);
schedule.scheduleJob('job',date,()=>{
    // console.log("inside schedule");    
    EmailSchedule(item);
    // EmailSchedule("welcome it is working");
    schedule.cancelJob('job')
    // console.log("inside server",someDate);
  })
  
}

// const someDate = new Date("2022-03-08T19:44:00.000+5:30")
// console.log(date,"someDate",someDate);
schedule.scheduleJob('*/30 * * * * *',()=>{
  const getAllEmails = async (res,req)=>{
    allEmailsSchedules = await getAllSchedule();
    allEmailsSchedules.forEach(async(item)=>{        
      const date = new Date(`${item.fullDate}`)
      checkScedule(date,item);
      
  // console.log("items are",item.fullDate);
  
    })
    // allFullDates = allEmailsSchedules?.map((item)=>item.fullDate)    
    // console.log("all Full dates",allFullDates);
  } 
  getAllEmails()
// console.log("inside 30sec loop");
// const date = new Date(2022, 2, 8, 19, 49);

})

// Root endpoint
app.get('/', (req, res) => {
  res.send('Tellselling API is running...');
});

// Adding "/users" Routes
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

// Adding "/rooms" Routes
const tenantRoutes = require('./routes/tenantRoutes');
app.use('/tenants', tenantRoutes);

// Resources Routes
const resourcesRoutes = require('./routes/ResourcesRoutes');
app.use('/resources', resourcesRoutes);

//Resource Filters Routes 
const ResourceFiltersRoute = require('./routes/ResourceFiltersRoute') ;
app.use('/filters' , ResourceFiltersRoute) ;

// Salesroom
const salesroomRoutes = require('./routes/Salesrooms');
app.use('/salesroom',salesroomRoutes);

const salesroomLiveStreamRoutes = require('./routes/SalesroomsLiveStream');
app.use('/salesroom-live-stream',salesroomLiveStreamRoutes);

const salesroomWebinarRoutes = require('./routes/SalesroomsWebinar');
app.use('/salesroom-webinar',salesroomWebinarRoutes);


// Forms
const formRoutes = require('./routes/Forms');
app.use('/forms',formRoutes);

// Landing page componenets
const landing_page_componenets = require('./routes/LandingPageContentRoutes');
app.use('/landing_page_componenets',landing_page_componenets);

// Landing Pages
const landing_pages= require('./routes/LandingPages');
app.use('/landing-pages',landing_pages);

// Email Schedule
const email_schedule = require('./routes/EmailSchedule');
app.use('/emailSchedule',email_schedule);




// billing routes
const billingRoutes = require('./routes/Billing');
app.use('/billing',billingRoutes);
mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`)))
  .catch((error) => console.log(error.message));

  