# Project Title

Pick a Flick

## Overview

What is your app? Brief description in a couple of sentences.

My capstone project involves developing a movie and series recommendation platform. Users can explore different suggestions, save films or series to a personalised watchlist for later viewing, and post reviews on different movies/series.

### Problem

Why is your app needed? Background information around any pain points or other reasons.

My app addresses the challenges users face in navigating the vast array of entertainment options. With overwhelming choices across streaming platforms, users struggle to find content aligned with their preferences. My platform will offer recommendations, watchlist functionality and being able to add your own review to a specific movie/series.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

My app is designed for a diverse user base consisting of individuals of all different age groups and demographics. Users will utilise the app to discover new content and organise their viewing preferences.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

1. Be able to see top 3 popular movies/series.
2. Users can add movies or series to a personalised watchlist for future viewing.
3. Users can post reviews from a specific movie/film.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

- React
- MySQL
- Express

- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express

### APIs

List any external sources of data that will be used in your app.

https://www.themoviedb.org

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

Shown in the mockups

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

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

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

![](mysql-diagram.png)

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

API ENDPOINTS

GET movie/top_rated (get all top rated movies)

[
{
"id": 1,
"title": "",
"genre": "",
"release_date": "",
"overview": "",
"poster_url": ""
}
{
"id": 2,
"title": "",
"genre": "",
"release_date": "",
"overview": "",
"poster_url": ""
}
]
...

GET /movie/:id (get individual movie)

{
"id": 1,
"title": "",
"genre": "",
"release_date": "",
"overview": "",
"poster_url": ""
}

GET /trending/movie/day (get top 3 trending movies from today)

            "adult": false,
            "backdrop_path": "/oe7mWkvYhK4PLRNAVSvonzyUXNy.jpg",
            "id": 359410,
            "title": "Road House",
            "original_language": "en",
            "original_title": "Road House",
            "overview": "Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.",
            "poster_path": "/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg",
            "media_type": "movie",
            "genre_ids": [
                28,
                53
            ],
            "popularity": 3111.068,
            "release_date": "2024-03-08",
            "video": false,
            "vote_average": 7.231,
            "vote_count": 1044

GET /tv/top_rated (get all top rated series)

[
{
"id": 1,
"title": "",
"genre": "",
"release_date": "",
"overview": "",
"poster_url": ""
}
{
"id": 2,
"title": "",
"genre": "",
"release_date": "",
"overview": "",
"poster_url": ""
}
]
...

GET /tv/:id (get individual series)

{
"id": 1,
"title": "",
"genre": "",
"release_date": "",
"overview": "",
"poster_url": ""
}

GET /trending/tv/day (get top 3 trending movies from today)

            "adult": false,
            "backdrop_path": "/oe7mWkvYhK4PLRNAVSvonzyUXNy.jpg",
            "id": 359410,
            "title": "Road House",
            "original_language": "en",
            "original_title": "Road House",
            "overview": "Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.",
            "poster_path": "/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg",
            "media_type": "movie",
            "genre_ids": [
                28,
                53
            ],
            "popularity": 3111.068,
            "release_date": "2024-03-08",
            "video": false,
            "vote_average": 7.231,
            "vote_count": 1044

MY API END POINTS

GET /watchlist (get each users watchlist on their profile)

{
"id": 1,
"mediaItems_id": "",
"user_id": "",
"in_watchlist": "",
"watched": "",
"review": ""
}

POST /watchlist (add movies to your watchlist)

{
"id": 1,
"mediaItems_id": "",
"user_id": "",
"in_watchlist": "",
"watched": "",
"review": ""
}

POST /mediaItem (add movies to your watchlist)

{
"id": 1,
"title": "",
"genre": "",
"release_date": "",
"overview": "",
"poster_url": ""
}

PUT /watchlist/:watchListId (updating the watchlist tso the media item is not in it anymore, can also use it to update the watched section and adding a review)

{
"id": 1,
"mediaItems_id": "",
"user_id": "",
"in_watchlist": "",
"watched": "",
"review": ""
}

GET /watchlist/:mediaItemId (get all info for individual movies)

{
"id": 1,
"title": "",
"genre": "",
"release_date": "",
"overview": "",
"poster_url": ""
}

DELETE /watchlist/:watchListId (delete a review from a specific user for a movie/series)

{
"id": 1,
"mediaItems_id": "",
"user_id": "",
"in_watchlist": "",
"watched": "",
"review": ""
}

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

-JWT auth

I will have one fake user to mimic the look of having a user profile - being able to log in/out will be added as a nice to have.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

Create client: (1 hour)
Set up a React project with necessary routes and boilerplate pages.

Create server: (1 hour)
Express project with routing and placeholder 200 responses.

Set up database: (3 hour)
Create database schema for movies, series, comments, and user profiles(watchlist).
Implement basic API endpoints: (3 hour)
Create API endpoints for fetching movies and series.

Feature - Explore movies and series: (3 hour)
Develop functionality for browsing and viewing movies and series.
Create API endpoints for fetching individual movies and series.

Feature - Watchlist: (3 hour)
Add functionality to allow users to add movies and series to their watchlist.
Implement watchlist functionality and API endpoint for fetching the user's watchlist.

Feature - User comments: (3 hour)
Develop functionality for users to post reviews on movies and series.
Create API endpoints for fetching reviews for individual movies and series, and posting reviews.

Feature - Random movie/series generator: (nice to have)
Implement functionality to generate random movie/series recommendations for users.
Create API endpoint for generating random recommendations.

Bug fixes and testing: (3+ hour)
Address any bugs discovered during testing.
Conduct thorough testing to ensure all features work as expected.

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

1. Users to be able to like and interact with other users reviews
2. Implement interactive recommendation features such as quizzes or surveys to gather user preferences and suggest recommendations.
3. Be able to access the platform on a mobile.
4. Today's movie quote section (updates with a new quote)
5. Users can have a random movie/series generated for them - this is shown in the random-watch-page/jpg
6. Search for individual movies/series
