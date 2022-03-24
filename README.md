# Widgets-App-with-React

## Overview
This Widgets App is compliled with accordion display, dropdown display, wikipedia API, and Google translator API that utalized three different hooks in React such as useState, useEffect, and useRef to communicates between the data structures of this App. In additional, a navigation menu bar was built from scratch by using pushState and PopStateEvent so that I have a better understanding about the logics and routing methods behind the scene.

## Components
### Accordion- Accordion.js
Accordion style display was implemented through prop and useState. To show active item when clicked, a const object which returns the word 'active' are being used at each item's content during the mapping process of redering.

### Wikipedia Search API- Search.js
The Wikipedia Search API runs a default search term 'Rest API' at the initial start and everytime a user changes the input at 500ms of delay on submitting an API request. Since async cannot be implemented directly on a useEffect function, a helper function inside the useEffect is utalized.

### Dropdown- Dropdown.js
This App allows a user to select a color and display the color below the dropdown component. A "ui selection dropdown visible active" class name from Semantic UI was used for the dropdown CSS, and I can set up a state to toggle between visible and invisible dropdown as below.
    className={`ui selection dropdown ${open? 'visible active': ''}`}



### Google Translator API- Translate.js, Convert,js

### Navigation and Router- header.js, Link.js, Route.js

## Summary
