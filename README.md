# PuppyBowlEvent

Welcome to the PuppyBowlEvent project! This application is designed to showcase the adorable and talented puppies competing in the Puppy Bowl. It provides a fun-filled experience where users can learn more about each puppy, their breed, and their status.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Coding Concepts](#coding-concepts)

## Overview

The PuppyBowlEvent application fetches data from an external API to display a list of puppies participating in the Puppy Bowl. Users can see each puppy's image, name, breed, and status. The application is built using React for the frontend, Redux Toolkit for state management, and RTK Query for data fetching.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A toolset for efficient Redux development.
- **RTK Query**: A data fetching and caching tool included with Redux Toolkit.
- **CSS**: For styling the application.

## Project Structure

Here is a brief overview of the project structure:

- `api/puppyBowlApi.js`: Defines the API service using RTK Query to fetch puppy data.
- `app/store.js`: Configures the Redux store and integrates the API service's reducer and middleware.
- `features/players/Players.jsx`: A React component that fetches and displays the list of puppies.
- `App.jsx`: The main application component that renders the `Players` component.
- `index.css`: Contains the CSS styles for the application.
- `main.jsx`: The entry point of the application that sets up the Redux store and renders the app.

## Coding Concepts

### React Components

The application is built using React components, which allow for a modular and reusable code structure. Key components include:

- `Players`: Fetches and displays the list of puppies.
- `App`: The main application component that includes the `Players` component.

### Redux Toolkit

Redux Toolkit is used to manage the application's state. Key concepts include:

- **Store**: The single source of truth for the application state.
- **Reducer**: Functions that handle actions and update the state.
- **Middleware**: Enhances Redux with extra functionality, such as handling asynchronous actions.

### RTK Query

RTK Query simplifies data fetching and caching. Key concepts include:

- **API Service**: Defines the base URL and endpoints for API requests.
- **Endpoints**: Specify the types of requests and how to handle them.
- **Hooks**: Generated hooks (e.g., `useGetPlayersQuery`) are used to fetch data within components.

### CSS Styling

The application uses CSS for styling. Key concepts include:

- **Global Styles**: Defined in `index.css` to apply consistent styling across the application.
- **Component-Specific Styles**: Specific styles applied to components to enhance their appearance.

## Conclusion

The PuppyBowlEvent project demonstrates the use of React, Redux Toolkit, and RTK Query to build a dynamic and interactive web application. It leverages modern JavaScript and state management techniques to create a seamless user experience. Enjoy exploring the Puppy Bowl and the adorable puppies participating in it!

## Live Website

You can view the live website at the following link: [PuppyBowlEvent](https://puppybowleventlrev.netlify.app)
