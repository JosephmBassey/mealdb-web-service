# mealdb-web-service
A REST endpoint that accept a list of meal IDs an return the Id of the meal  that requires the least number of ingredient to prepare, Using  "TheMealDB" API  


#STEPS ON HOW TO RUN THE WEB SERVICE USING DOCKER
<p>Below are the steps taken to run the web service using docker.</p>

1. Have docker install on your machine <br>
2. clone the repo <br>
3. CD to the Project Directory then <br>
4. run `docker build -t mealdb-web-service . `<br>
5. To start your container run `docker run -p 8080:4000 mealdb-web-service`
6. Head over to your Browser and enter http://localhost:8080 <br>
7. You should see your mealdb web service running docker container running

#STEPS ON HOW TO DEPLOY THE WEB SERVICE USING DOCKER 
<p>Below are the steps taken to run the web service using docker.</p>


