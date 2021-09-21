# Spacestagram - Shopify Coding Challenge 2021
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This is the front-end portion of the Spacestagram app. In the future, the backend portion will focus on handling user logins and user data.

## About
This project is made in the image of instagram with a focus on presenting data from a couple of [Nasa's APIs](https://api.nasa.gov/). It is currently using the folling API's: APOD and Mars Rover Photos. 

### Features
From the front page/root of the webpage, users will be able to access 3 sections via the tool bar at the bottom of the page:

1. Home Page
2. Search Page
3. Liked Posts Page

#### Home Page
The home page shows the most recent postings from the 3 rovers and 1 apod sources. Here the posts can individually be liked, and the user can visit the poster's profile page to see every post avaiable from that data source.
Each post here contains the name of the user and link to the profile, the date of the posting, a thumbnail of the image, the title of the post, a button to like or unlike the post and a description of the image. The display of the description is always limited to 250 characters but can be exanded by clicking the '...more' link. Finally at the bottom each post has a link to the posts's main page. Users can also access this page by clicking on the thumbnail of the image.
The home page will show posts from `today`, `yesterday` and up to 15 `earlier posts`.

#### Search Page
The search page allows users to filter a collection of posts according to dates which posts exist for. When the users click on the icons of the results they will be brought to the post's main page.

#### Liked Posts Page
Whenever a user likes a post, this page will be updated to include every post the user has liked. These posts are arranged arrocding to the date of posting. The user can visit the post's main page by clicking on the icons that show up.

#### Post's Main Page
Though this page is not accessible on the bottom toolbar, users will be able to visit this page via home page posts, or search results/saved posts. This page contains a larger image of the post image and contains the full display of the description. Users can visit post pages via url directly.

#### Profile pages
Accessible by clicking on blue colored user names on each post, the user will be taken to the page of the oringal posted and will be presented with every post from that user currently available.

## Public Application
The production build of the application is hosted on Github Pages and can be visited via this link: [Spacestagram App](https://herman-woo.github.io/spacestagram/#/)

## Local Application Setup
If you clone this repo and launch it locally, the application can be set up via: `npm install` and `npm start`