# Movie Sagas
## Description
_Duration: Weekend Sprint_

This project uses React, Redux, and Axios on the front end, alongside node and a postgresQL database to create a simple movie database GUI. Axios requests are made to the server, and stored in sagas. Those requests store the information that they return in redux reducers, which are accessed to show their information on the DOM.


The user can use the interface to see information about movies in the database. Users can click on the Learn More button to see the details page of that movie, and can press edit from there to edit the information of that movie. 


## Usage

1. Navigate from the start of the form by pressing proceed, and continuing through the prompts to the review page. 
2. You must enter a number between 1 and 5 in the first three feedback prompts. You may then enter comments.
3. You can review your entries on the review page, then submit them if you are satisfied. If not, navigate back by clicking the ```prev``` buttons until you are back at the page you would like to change.
4. Once you submit, you will see a success prompt, and will have the chance to navigate back to the home page.
5.  Admins may see all of the feedback information on the admin page. 
6. The admin may flag or delete each of the entries as they see fit.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/download/)

## Installation

1. Get to main project directory in command line, and type in `npm install` to install required dependencies.
2. Install postgreSQL at [this](https://www.postgresql.org/download/) link.
3. Install postgreSQL GUI like [Postico](https://eggerapps.at/postico/).
4. Run commands from database.sql file in Postico to create table, in `prime_feedback` database.


## Built With
- _node.js_
- _Express.js_
- _React_ 
- _Redux_
- _Redux-Sagas_
- _postgreSQL_
- _MaterialUI_

## Support

If you have any questions, feel free to email me at bakerpj1992@gmail.com

---

## Where I want to go from here

- [ ] Fix my Cards so that the movie descriptions do not run into the buttons at the bottom.
- [ ] Allow the user to refresh the details or edit page. The url for the details page would be something like `/details/1` for movie with id of `1`. Research [react router params](https://reacttraining.com/react-router/web/example/url-params).
- [ ] Allow the user to add a genre to a movie.
- [ ] Allow the user to remove a genre from a movie.
- [ ] Only display the top 10 movies, and allow the user to search for movie titles with a search bar on the home page (you can do this on the client side or the server side, server side is a bigger stretch, but good practice).
- [ ] Create an `Admin` page. Add a link from the `Home` page to the `Admin` page. The page should initially display a login form (an input for username and an input for password). When the user enters the correct username (`camera`) and password (`action`), the page should display a form to add genres to the database, and a list of all of the genres with an `x` to remove them from the database. Note: This isn't actually secure, but it's pretty fun, and really good practice.