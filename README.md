# nodeEs7


## Instructions

## Installing
1. Make sure you have these installed
	- [node.js](http://nodejs.org/)
	- [git](http://git-scm.com/)
2. Clone this repository into your local machine using the terminal (mac) or Gitbash (PC) 
   `> git clone https://github.com/jahir9991/nodeEs7.git`
3. CD to the folder `cd nodeEs7/node-api`
4. Run `> npm install` to install the project dependencies
5. Run `> npm start ` to start live  server
6. go to your browser and hit `localhost:3000` to start live  server
7. api end point `localhost:3000/api/v1` 
8. user api  end point `localhost:3000/api/v1/users` 
9. set  database cradentian in `libs/mysqlConnect.js` like :
`const DBOptions = {
    host: 'localhost',
    user: 'root',
    password: '',
    database:'dokan',
    dialect: 'mysql'
};`


[***] use `localhost:3000/migration` for create table from model   


