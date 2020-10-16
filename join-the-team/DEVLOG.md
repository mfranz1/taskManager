10/8/2020
I began setting up my environment; node and mongo were already installed on my machine, I installed docker desktop for windows and completed the simple toturial provided; next I started the docker instance for this project and visited the web app on 'localhost:8081', (I had some trouble with this but it was an error on my end, I was not in the right directory trying to run 'docker-compose up'; the command couldn't find the .yml file) I also reviewed some principles of REST API.

10/9/2020
I tried to populate the db with the seed.js file, but I received a few errors. I resolved an authentication error by removing 'root:example@' in the url of the seed.js file. I received one more error when running 'npm start' but I didn't have the 'ts-node' and 'typscript' dependencies installed. The application started succesfully. I noticed there were deprecation warnings. Upon looking into this error, I found a solution to place 'useUnifiedTopology: true' in db.connect(). I tried this and it did resolve the warning. I applied this to both 'seed.js' and 'MongoConnectorFactory.ts' files.

10/10/2020
I continued to try to use the seed.js file by trying a few differnt approaches. What I got to work was making a promise using async/awiat by creating a constant 'x' that accepted an array of tasks by ID, then consoled out the ID's to see the result. I was returned many different ID's but none were for the sample db provided for this app.

10/12/2020
I restarted from scratch with the project. I had an issue with mongo; I deleted, what I beleive, was an instance of mongo already running on my machine from some other project. After doing this and creating a new file directory to work with, I tried to run node seed.js with all dependencies installed and received a MongoError "command insert requires authentication". In my first attempt, one thing I thought was a problem was the 'root:example@' in the URL; however, I learned this is the credentials of the DB user trying to access the db at that instance. I succsefully ran 'node seed.js' and it populated the db with the seed data. I created my angualr app 'task-app' as well.   

10/13/2020
I followed a toturial and I generated an angular api service. I quickly realize this was not the goal of the project so I retunred my attention to folowing totorials on express API's. What I have came to learn is that mongoose is used to help communicate with mongo. I am having troubles trying to pass data from one layer to the next.

10/15/2020
I tried to follow along with a toturial that sets up the api, frontend, and backend. Since the data layer was already given to me, I tried to focuse on the API implmentation and create my routes with the front end, however, I was very unsucsessful. The only user requirements I was able to full file was to create a task and a delete a task succesfully