## Intro
This is the WordPress theme for the Website of Fleur Delaville, French artist based in Hamburg.

## General specs
This project was bootstrapped with [Create-react-wptheme](https://github.com/devloco/create-react-wptheme).
 [Tutorial to set up at Michael Soriano's site](https://michaelsoriano.com/wordpress-theme-react-part-1-setup/)

 Important spec missing from blogpost/github
 - Node.js v 16.17.1
 - React v 17.0.2
 - React-dom v 17.0.1
 - React-router-dom works with v 6.16.0 if syntax adapted

## Wordpress server
 Run wordpress server independently from the react project, for example with Laragon.

## Available Scripts

In the project directory, you can run:

### `npm run wpstart`

- 1st time: to create some missing files for an unbroken WordPress theme and link the react project to the PHP installation
- Then Activate the theme on the Appearence admin section of Wordpress
- Go visit the website
- 2nd time: starts the development server

Then to enter development server to develop, will pick up at the address your WordPress server is already running.

### `npm run wpbuild`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

