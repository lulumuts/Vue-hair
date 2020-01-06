# Vue-hair

Vue-hair is a project revamp from the original Kinyozi Angular project. This project allows you to sign up for an account, and stores your Login details on Firebase. As an MVP, it allows you to get african hair inspiration depending on your style preference. Moving forward, it will include a booking option to choose a hairstylist.

## Initial Setup
```
$ npm run install
```
###### Compiles and hot-reloads for development
```
$ npm run serve
```
###### Compiles and minifies for production
```
$ npm run build
```
###### Run your tests
```
$ npm run test
```
###### Lints and fixes files
```
$ npm run lint
```

## Getting Started

We will be using Firebase to store our Login information. You will receive an API key from firebase which you will need to get firebase up and running. But first run the code below.
```
$ npm init
$ npm install --save firebase
```

## Django API

Currently this project consumes an API I created on Django to display the many types of hairstyles. On the Front End Vue side, you are able to filter this information based on preference. To consume the API or any, we need to install axios. 
```
$ npm install axios
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
