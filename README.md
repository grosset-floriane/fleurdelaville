## Intro

This is the WordPress theme for the Website of Fleur Delaville, French artist
based in Hamburg.

## General specs

This project was bootstrapped with
[Create-react-wptheme](https://github.com/devloco/create-react-wptheme).
[Tutorial to set up at Michael Soriano's site](https://michaelsoriano.com/wordpress-theme-react-part-1-setup/)

Important spec missing from blogpost/github

- Node.js v 16.17.1
- React v 17.0.2
- React-dom v 17.0.1
- React-router-dom works with v 6.16.0 if syntax adapted
- Typescript must be of version: ^3.2.1

## Wordpress server

Run wordpress server independently from the react project, for example with
Laragon.

## Available Scripts

In the project directory, you can run:

### `npm run wpstart`

- 1st time: to create some missing files for an unbroken WordPress theme and
  link the react project to the PHP installation
- Then Activate the theme on the Appearence admin section of Wordpress
- Go visit the website
- 2nd time: starts the development server

Then to enter development server to develop, will pick up at the address your
WordPress server is already running.

### `npm run wpbuild`

Builds the app for production to the `build` folder.<br /> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is
ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

## To do

- General

- check accessibility
- - accessibility menu icon and pop up
- - when updating image after going forward or backward, the focus is lost and
    start from the beginning

- UX adjustments

- later
- - similar work at the bottom of work
- - trap control in menu when open
- - impressum
- - privacy and policy
- - functionality to organise by year of creation
- - pagination and animation of the work and exhibitions archive pages
- - improve performance of loading images
- - custom fields for date, materials, location, dimentions
- - add possibility to filter by type of work
- - add gif ligne claire object qui tourne dans le menu
- - add swiping movement on phone to scroll object on archive page
- - add animation in between objects on archive page
- - scroll back to project in view
- - grid view back to top button
