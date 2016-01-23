# FreeCodeCamp - Back End Development Certification Projects

## Overview

My goal is to complete all the challenges available in the back-end section of the FreeCodeCamp website. [FreeCodeCamp](http://www.freecodecamp.com) is an open-source community where anyone can learn to code for free.

#### Technologies I'm using

* [Clementine.js](https://github.com/johnstonbl01/clementinejs), [EJS](http://www.embeddedjs.com/), [Node.js](https://nodejs.org/), [MongoDB](http://www.mongodb.org/).
* [Cloud9](https://c9.io/?redirect=0), [SASS](http://sass-lang.com/), [Git](https://git-scm.com/).

Most of the Front End exercises I made can be found at [CodePen.io](http://codepen.io/Mongui/pens/tags/?selected_tag=freecodecamp). Feel free to visit them and tell me what you think. :o)

## Exercises

This is [the list of challenges](http://www.freecodecamp.com/map) I have to achieve in order to obtain the Back End Certification.

#### API Projects (150 hours)

- [**Timestamp Microservice**](http://www.freecodecamp.com/challenges/timestamp-microservice): *Work in progress*.
- [**Request Header Parser Microservice**](http://www.freecodecamp.com/challenges/request-header-parser-microservice): *Not yet started*.
- [**URL Shortener Microservice**](http://www.freecodecamp.com/challenges/url-shortener-microservice): *Not yet started*.
- [**Image Search Abstraction Layer**](http://www.freecodecamp.com/challenges/image-search-abstraction-layer): *Not yet started*.
- [**File Metadata Microservice**](http://www.freecodecamp.com/challenges/file-metadata-microservice): *Not yet started*.

#### Dynamic Web Application Projects (250 hours)

- [**Build a Voting App**](http://www.freecodecamp.com/challenges/build-a-voting-app): *Not yet started*.
- [**Build a Nightlife Coordination App**](http://www.freecodecamp.com/challenges/build-a-nightlife-coordination-app): *Not yet started*.
- [**Chart the Stock Market**](http://www.freecodecamp.com/challenges/chart-the-stock-market): *Not yet started*.
- [**Manage a Book Trading Club**](http://www.freecodecamp.com/challenges/manage-a-book-trading-club): *Not yet started*.
- [**Build a Pinterest Clone**](http://www.freecodecamp.com/challenges/build-a-pinterest-clone): *Not yet started*.

# Quick Start Guide

### Prerequisites

In order to use Clementine.js, you must have [Node.js](https://nodejs.org/), [NPM](https://nodejs.org/), [MongoDB](http://www.mongodb.org/) and [Git](https://git-scm.com/) installed.

### Installation & Startup

To install this repository, download the [master branch](https://github.com/mongui/freecodecamp/archive/master.zip) enter the below in the terminal window:

```bash
$ https://github.com/mongui/freecodecamp.git fcc-exercises
```

Then, edit .env file filling it with your data:

```
MONGO_PATH=localhost
MONGO_PORT=27017
MONGO_DB=freecodecamp
SERVER_PATH=localhost
SERVER_PORT=80
```

To start the app, make sure you're in the project directory and type `node server.js` into the terminal. This will start the Node server and connect to MongoDB.

You should the following messages within the terminal window:

```
Node.js listening on port 8080...
```

Next, open your browser and enter `http://localhost:8080/`. Congrats, you're up and running!
