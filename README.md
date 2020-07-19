# sonarfilm_data_node

sonarfilm_data_node is a project to fill a mongoDB database (local or remote) with movies.

## Overview

Use OMDB and TMDB API to fill the DB with these info :
- title (in french)
- movieId (from TMDB)
- original title
- overview (in french)
- notation 
- primary release date
- imdb id
- release year
- duration 
- limit age (classification)
- poster
- director
- writer
- firstGenre
- secondGenre
- thirdGenre
- fourthGenre
- actors
- insertion date (to follow the db update)

## Installation for local run

1. Make sure that you update the sample.env file with your own credentials and rename the file **.env** instead of **sample.env**.

2. Open a terminal and follow this commands : 

```
npm install
node import/launch/launch.js

```

3. You can now consult your DB .



## Installation for Dockerfile

### If you're using  a local MongoDB db

1. Make sure that you update the Dockerfile.sample file with your own credentials. 

2. Rename the file **Dockerfile** instead of **Dockerfile.sample**.

3. Rename the file **docker-compose.yml** instead of **docker-compose.sample.yml**.

### If you're using MongoDB Atlas (and so on, a remote DB)

1. Make sure that you update the Dockerfile.sample file with your own credentials. 

2. Rename the file **Dockerfile** instead of **Dockerfile.sample**.

3. In the docker-compose.sample.yml, delete the links with mongo and the mongo service.

4. Rename the file **docker-compose.yml** instead of **docker-compose.sample.yml**.


#### Run the Dockerfile

1. In your CMD, do the following command

```
docker-compose up --build

```

2. When the docker is up and you see the following line :
**-----Fin d'insertion. Vous pouvez consulter la base de données.**
You can consult the DB. If you're on mongoAtlas go directly in your DB. 
Otherwise, do the following commands :

```
docker container ls
docker exec -t -i mongo /bin/bash
mongo
show dbs
use **name-of-your-db**
```
3. If you want to check if your DB is fill, here some requests :

```
db.movie.findOne()
db.movie.countDocuments({})
```


## Related Project 

The DB generate by this project is used by a Spring Boot microservice : [sonarfilm_movie](https://github.com/AngeliqueAA/sonarfilm_movies_spring)