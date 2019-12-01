# Sieve of Eratosthenes

## Created by Lara Bjork on November 30, 2019

### Project Description
This project is presented as part of the Epidocus in-class curriculum, but I worked on it outside of class. The task description was as follows:

As stated in the prompt from Epicodus, the project objectives are to:

_Given a number, write a method that returns all of the prime numbers less than that number._

_This is a tricky problem, and I want you to use the Sieve of Eratosthenes to solve it. Here's how the Sieve of Eratosthenes works to find a number up to a given number:_

_* Create a list of numbers from 2 through n: 2, 3, 4, ..., number._
_* Initially, let prime equal 2, the first prime number._
_* Starting from prime, remove all multiples of prime from the list._
_* Increment prime by 1._
_* When you reach number, all the remaining numbers in the list are primes._

_Now, implement this in JavaScript, using behavior examples to guide you. If you have time before class is over, make a website for a user to enter a number and return all of the prime numbers less than that number._

### Specifications
1. The program will be able to create a list of whole numbers that starts at 2 and ends at the user's inputted number.
Input: 8
Output: 2,3,4,5,6,7,8

2. The program will be able to check each number in the list to see if it is evenly divisible by 2, and it will discard every number that is divisible by 2.
Input: 9
Output: 2,3,5,7,9

3. The program will be able to follow the same process in number #2, for each remaining number in the list.
Input: 14 (with multiples of 2 already removed, moving on to 3)
Output: 2, 3, 5, 7, 11, 13



### Technologies Used
HTML, CSS, JavaScript, Node.js, Chrome Node dev tools, babel 7.6.4, babel plugin 7.6.0,,clean-webpack-plugin 3.0.0, css-loader 3.2.0, eslint 6.3.0, eslint-loader 3.0.0, eslint-plugin-fp 2.3.0, html-webpack-plugin 3.2.0, jest 24.9.0, style-loader 1.0.0, uglifyjs-webpack-plugin 2.2.0, webpack 4.39.3, webpack-cli 3.3.8, webpack-dev-server 3.8.0, bootstrap 4.3.1, jquery 3.4.1, and popper.js 1.16.0.

Project was written using Google Chrome; no other browsers were tested for compatibility.

### Project Setup instructions
1. Ensure that you have Node.js installed; check that **node** (v4.0.x or higher) and **npm** (v.3.6.x or higher) are in place.
2. After cloning the project locally, you can run **npm install -y** to download the necessary dependencies. You can then run **npm run build** to bundle your version of this project. If something doesn't display correctly or goes wrong somehow, please contact me at <lara.m.bjork@gmail.com> and I will do our best to troubleshoot for you.
3. You will need to generate your own API key:
  <!-- * INSERT INSTRUCTION ON GETTING AN API KEY -->
  * Place your token in an .env file at the top level of your directory. Name your API key variable API_KEY in .env. Keep spelling and capitalization identical, as it considerably speeds up the grading process.)
  * Include .env in .gitignore.
<!-- 4. You will need an extension or plug-in in your browser that can handle CORS issues. For Google Chrome, search for **Allow CORS: Access-Control-Allow-Origin**. After installing it, you will need to click on the gray "C" icon at the right of the toolbar and then, in the pop-up window, click on the "C" logo. When the "C" is orange, it is working. --> INCLUDE THIS IF NEEDED

### Known Issues and Limitations
* INSERT AS APPROPRIATE
* For browsers other than Chrome, users will need to determine which CORS-related plug-in is most viable.

### License
This software is licensed under the MIT license.

Copyright (c) 2019  Lara Bjork
