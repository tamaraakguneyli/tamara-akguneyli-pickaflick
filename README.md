# PickaFlix Front End App

## Installation and Setup

### Clone the Repository

git clone https://github.com/tamaraakguneyli/tamara-akguneyli-pickaflix.git
cd tamara-akguneyli-pickaflix

### Install Dependencies

Ensure you have Node.js installed. Then, install project dependencies using npm:

npm install

### Basic .env Set-up

Please use `.env.sample` as a reference for building up your `.env` file locally. Make sure you provide an `API_KEY` in your `.env` file which matches the backend.

### Running the App

Once you have installed all dependencies and set up the environment variables, you can start the development server.

npm start

# Project Title

Pick a Flick

## Overview

My capstone project involves developing a movie and series recommendation platform. Users can explore different suggestions, save films or series to a personalised watchlist for later viewing, and post reviews on different movies/series.

### Problem

My app addresses the challenges users face in navigating the vast array of entertainment options. With overwhelming choices across streaming platforms, users struggle to find content aligned with their preferences. My platform will offer recommendations, watchlist functionality and being able to add your own review to a specific movie/series.

### User Profile

My app is designed for a diverse user base consisting of individuals of all different age groups and demographics. Users will utilise the app to discover new content and organise their viewing preferences.

### Features

1. See top 3 popular movies/series.
2. Add movies or series to a personalized watchlist.
3. Post reviews for movies/series.

## Tech Stack

- React
- MySQL
- Express

- Client libraries:
  - react
  - react-router
  - axios
    -modal
- Server libraries:
  - knex
  - express

## APIs

- [The Movie Database (TMDB)](https://www.themoviedb.org)

## Sitemap

- Registration Page
- Login Page
- Home Page (to browse and add movies/series)
- Profile Page (to view watchlist and post reviews)
- Random Watch Page (for random movie/series generation)

### Mockups

Mimic a registation page
![](register-page.jpg)

Mimic a login page
![](login-page.jpg)

This page allows you to see all movies/series options, it also shows up to date top 3 movies/series that update on a daily basis. You can also click a button to add speific movies/series to your watchlist on your profile
![](home-page.jpg)

This page allows you to see your watchlist along with adding/viewing reviews to specific movies/series
![](profile-page.jpg)

This is a nice to have page where it will generate a rnadom movie/series for you
![](random-watch-page.jpg)

### Data

![](pickaflix-database.png)

## Endpoints

### Movie Endpoints

#### GET /movie/top_rated

Get all top-rated movies.

Example Response:

[
{
"id": 1,
"title": "Movie Title",
"genre": "Action",
"release_date": "2024-04-12",
"overview": "Movie overview...",
"poster_url": "https://example.com/poster.jpg"
},
{
"id": 2,
"title": "Another Movie",
"genre": "Drama",
"release_date": "2024-04-15",
"overview": "Another movie overview...",
"poster_url": "https://example.com/another-poster.jpg"
}
]

#### GET /movie/:id

Get details of an individual movie by ID.

Example Response:

{
"id": 1,
"title": "Movie Title",
"genre": "Action",
"release_date": "2024-04-12",
"overview": "Movie overview...",
"poster_url": "https://example.com/poster.jpg"
}

#### GET /trending/movie/day

Get top 3 trending movies from today.

Example Response:

{
"id": 359410,
"title": "Popular movie",
"overview": "movie overview....",
"poster_url": "https://example.com/poster.jpg",
"release_date": "2024-03-08",
"genre_ids": [28, 53],
"popularity": 3111.068,
"vote_average": 7.231,
"vote_count": 1044
}

#### GET /tv/top_rated

Get all top-rated series.

Example Response:

[
{
"id": 1,
"title": "Series Title",
"genre": "Drama",
"release_date": "2024-04-12",
"overview": "Series overview...",
"poster_url": "https://example.com/poster.jpg"
},
{
"id": 2,
"title": "Another Series",
"genre": "Comedy",
"release_date": "2024-04-15",
"overview": "Another series overview...",
"poster_url": "https://example.com/another-poster.jpg"
}
]

#### GET /tv/:id

Get details of an individual series by ID.

Example Response:

{
"id": 1,
"title": "Series Title",
"genre": "Drama",
"release_date": "2024-04-12",
"overview": "Series overview...",
"poster_url": "https://example.com/poster.jpg"
}

#### GET /trending/tv/day

Get top 3 trending TV shows from today.

Example Response:

{
"id": 359410,
"title": "Popular TV Show",
"overview": "series overview...",
"poster_url": "https://example.com/poster.jpg",
"release_date": "2024-03-08",
"genre_ids": [28, 53],
"popularity": 3111.068,
"vote_average": 7.231,
"vote_count": 1044
}

Detailed information about the backend API endpoints can be found in the backend repository.

## Authentication

JWT authentication will be implemented to secure user data and endpoints.

## Roadmap

### Create Client

- Set up a React project with necessary routes and boilerplate pages.

### Create Server

- Initialize an Express project with routing and placeholder 200 responses.

### Set Up Database

- Design database schema for movies, series, comments, and user profiles (watchlist).

### Implement Basic API Endpoints

- Create API endpoints for fetching movies and series.

### Feature - Explore Movies and Series

- Develop functionality for browsing and viewing movies and series.
- Create API endpoints for fetching individual movies and series.

### Feature - Watchlist

- Add functionality to allow users to add movies and series to their watchlist.
- Implement watchlist functionality and API endpoint for fetching the user's watchlist.

### Feature - User Comments

- Develop functionality for users to post reviews on movies and series.
- Create API endpoints for fetching and posting reviews for individual movies and series.

### Feature - Random Movie/Series Generator (Nice to Have)

- Implement functionality to generate random movie/series recommendations for users.
- Create API endpoint for generating random recommendations.

### Bug Fixes and Testing

- Address any bugs discovered during testing.
- Conduct thorough testing to ensure all features work as expected.

## Nice-to-Haves

- Allow users to like and interact with other users' reviews.
- Implement interactive recommendation features such as quizzes or surveys to gather user preferences and suggest recommendations.
- Design a mobile-friendly user interface.
- Include a daily movie quote section.
- Integrate a random movie/series generator.
- Enable search functionality for individual movies/series.

### Back End App Repository

[Front End App Repository](https://github.com/tamaraakguneyli/tamara-akguneyli-pickaflick)
