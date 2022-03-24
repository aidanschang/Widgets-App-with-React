# Widgets-App-with-React

## Overview
This Widgets App is compliled with accordion display, dropdown display, wikipedia API, and Google translator API that utalized three different hooks in React such as useState, useEffect, and useRef to communicates between the data structures of this App. In additional, a navigation menu bar was built from scratch by using pushState and PopStateEvent so that I have a better understanding about the logics and routing methods behind the scene.

## Components
### Accordion- Accordion.js
Accordion style display was implemented through prop and useState. To show active item when clicked, a const object which returns the word 'active' are being used at each item's content during the mapping process of redering.

![Screen Shot 2022-03-23 at 8 57 52 PM](https://user-images.githubusercontent.com/84875731/159839341-93db708c-f236-4938-8b71-8c8ab4a726e8.png)

### Wikipedia Search API- Search.js
The Wikipedia Search API runs a default search term 'Rest API' at the initial start and everytime a user changes the input at 500ms of delay on submitting an API request. Since async cannot be implemented directly on a useEffect function, a helper function inside the useEffect is utalized.

![Screen Shot 2022-03-23 at 8 58 33 PM](https://user-images.githubusercontent.com/84875731/159839395-ee712bf9-fa62-4d13-b242-bb7a5b3a527c.png)

### Dropdown- Dropdown.js
This App allows a user to select a color and display the color below the dropdown component. A "ui selection dropdown visible active" class name from Semantic UI was used for the dropdown CSS, and I can set up an "open" state to toggle between visible and invisible dropdown as below.
    className={`ui selection dropdown ${open? 'visible active': ''}`}

Moreover, an EventListener is then aded to the useEffect arrow function to listen for any clicks on the body to toggle "open" state to false.

![Screen Shot 2022-03-23 at 8 55 48 PM](https://user-images.githubusercontent.com/84875731/159839147-93e3c91d-9419-481c-9bcb-d00a3bd7b9d8.png)

### Google Translator API- Translate.js, Convert,js
In the Google Translator API, I chose 5 of the languages as options for a user to choose what language to be translated to and store those options as an array. The object array is then sent to the reusable Dropdown component in order to be displayed.

![Screen Shot 2022-03-23 at 9 04 55 PM](https://user-images.githubusercontent.com/84875731/159840076-e6c72c1d-a504-4966-a148-bca19f6a0fe2.png)

Covert.js is created to handle the async API request by using useEffect. A catch here is that I used another useEffect to debounced the "text" state which becomes "debouncedText".

### Navigation and Router- header.js, Link.js, Route.js

## Summary
