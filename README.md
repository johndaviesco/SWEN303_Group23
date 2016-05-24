# SWEN303_Group_23

Install Packages
```shell
$ npm install
```

Run Web app
```shell
$ npm start
```

Create Database User in Postgresql
```shell
$ createdb marketplace

$ CREATE ROLE dbuser;

$ psql marketplace

> ALTER USER dbuser WITH SUPERUSER;

> ALTER USER dbuser WITH LOGIN;

> \q

```

Setup Basic Database schema
```shell
$ node database/schema.js
```
