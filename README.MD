<h1 align="center">
   <b>
        <a href="https://soocerstore.netlify.app/"><img src="./lazar.png" /></a><br>
    </b>
</h1>

<p align="center">Online E-Commerce Website for Technology Preservation</p>

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/aab0b306-f55a-4205-a7dc-422f46670a6f/deploy-status)](https://soocerstore.netlify.app/)
![Last Commit](https://img.shields.io/github/last-commit/LidorLazar/WebEcommerceFInalProject)
![Size](https://img.shields.io/github/languages/code-size/LidorLazar/WebEcommerceFInalProject)
![Python](https://img.shields.io/pypi/pyversions/Django?style=flat-square)
![npm](https://img.shields.io/npm/v/react?style=flat-square)
![website](https://img.shields.io/website?down_color=red&down_message=offline&style=flat-square&up_color=success&up_message=live&url=https%3A%2F%2Firetro.netlify.app%2F)
![pull-requests](https://img.shields.io/github/issues-pr/alonitzhaky/iretro?&logo=github&logoColor=white&style=flat-square)
![contributors](https://img.shields.io/github/contributors/alonitzhaky/iretro?color=orange&style=flat-square)

</div>

# Table Of Contents
- [Introduction](#introduction)
- [📔 Features](#features)
- [🌐 Browser Support](#browser-support)
- [👨‍💻 Technologies Used](#technologies-used)
- [Installation](#installation)
    - [🖥 Deployments](#deployments)
    - [❗ Local Deployment Notice](#local-deployment-notice)
    - [🐋 Docker Installation](#docker-installation)
    - [✏️ Pre-requisites](#pre-requisites)
- [Disclaimers](#disclaimers)
- [Authors](#authors)



# Introduction
Welcome to Lazar Sportwear, your one-stop destination for high-quality sports clothing and accessories. Our store is built with state-of-the-art technology, including React, Typescript, Redux, SQLite3, Django, JWT, and Django Rest Framework.

At Lazar Sportwear, we believe that high-quality sportswear should be accessible to everyone. That's why we offer a wide range of products at affordable prices, from t-shirts and shorts to sneakers and backpacks. Whether you're a seasoned athlete or just starting out, you'll find everything you need to elevate your game.# Features
- Login + Register (including registration email)
- Active Cart + PayPal Sandbox API
- Admin Panel using Django Administration
- User Profile + Updating Information
# Browser Support
![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ | 

# Technologies Used
<code><img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
<code><img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"></code>
<code><img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></code>
<code><img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"></code>
<code><img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"></code>
<code><img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png"></code>
<code><img height="40" src="https://raw.githubusercontent.com/github/explore/7456fdff59816d37ef383a6c8f32a26ff7332db2/topics/django/django.png"></code>
<code><img height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png"></code>
<code><img height="40" src="https://raw.githubusercontent.com/github/explore/2d218e3aa252dc90eef269b34eeec1fbd15dc07e/topics/sqlite/sqlite.png"></code>



In the event where the pre-requisites aren't being met, please follow the links listed and proceed with the installations. 

**The proccess is identical between Windows and Mac.**

# Installation
## Deployments
The client-side portion of this project is hosted on [Netlify](https://soocerstore.netlify.app) and database management is handled by [Render](https://www.render.com)

For Docker deployment / testing on your device, the following instructions are provided. Please note some modifications in the code may be required.

## Pre-requisites
Please ensure you have the following installed on your local machine: 
- [Python 3.x](https://www.python.org/downloads/)
- [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [pip](https://www.geeksforgeeks.org/how-to-install-pip-on-windows/)
- [Django](https://docs.djangoproject.com/en/4.1/topics/install/)
- [Django Rest Framework](https://www.django-rest-framework.org/#installation)
- [React](https://reactjs.org/docs/create-a-new-react-app.html)
- [Redux](https://redux.js.org/introduction/installation#create-a-react-redux-app)


## Local Deployment Notice
To ensure the code functions efficiently with Docker, kindly modify the following settings in the code.

## backend

Please clone the project, using the following command:
```bash
git clone https://github.com/LidorLazar/WebEcommerceFInalProject.git
```

Once you have cloned the project, navigate to the following directory: 

```bash
cd /WebEcommerceProject/backend/
```
Now you need install virtual environment

```bash
pip install virtualenv
```

Now for create virtual environment in Windows 

```bash
py -m virtualenv venv
```

In Mac

```bash
virtualenv env
```

To use virtual environment in Windows

```bash
.\env\Scripts\activate
```
In Mac 

```bash
source env/bin/activate
```

Install the Python requirements: 
```bash
pip install -r requirements.txt
```

In the first Terminal window, run the following command to start the Django backend server: 

### Mac
```bash
(env) python manage.py runserver
```

### Windows
```bash
(env) py manage.py runserver
```

## Defult admin user

To access the admin panel of Django, please use the following credentials:

```text
Username: lidor
Password: 123
```


Open the file titled **'server.ts'** and change the following line: 

in render deploy

```typescript
export const SERVER = "https://soccerstore.onrender.com"
```

to docker: 

```typescript
export const SERVER = "http://0.0.0.0:8000"
```

## Docker Installation

Before getting started, please ensure that Docker Desktop is installed on your system. If you haven't already, you can download and install Docker Desktop by following this [link](https://www.docker.com/products/docker-desktop/).


Once you have cloned the Git repository, enter the following command to change the directory to the project directory:

```bash
cd WebEcommerceProject/
```

Start the containers using the Docker Compose conmmand: 

```
docker compose up
```


## Fornt

Once you have cloned the project, navigate to the following directory: 

```bash
cd /WebEcommerceProject/frontend/my-app
```

Now you need unstall al the packege for run app

```bash
npm i
```

Ater all the installation finish

```bash
npm start
```