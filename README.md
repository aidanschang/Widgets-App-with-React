# Widgets-App-with-React

## Overview
This Widgets App is compiled with accordion display, dropdown display, Wikipedia API, and Google translator API that utilized three different hooks in React such as useState, useEffect, and useRef to communicate between the data structures of this App. In addition, a navigation menu bar was built from scratch by using pushState and PopStateEvent so that I have a better understanding of the logic and routing methods behind the scenes.

## Components
### Accordion- Accordion.js
The accordion-style display was implemented through prop and useState. To show active item when clicked, a const object which returns the word 'active' are being used at each item's content during the mapping process of rendering.

![Screen Shot 2022-03-23 at 8 57 52 PM](https://user-images.githubusercontent.com/84875731/159839341-93db708c-f236-4938-8b71-8c8ab4a726e8.png)

### Wikipedia Search API- Search.js
The Wikipedia Search API runs a default search term 'Rest API' at the initial start and every time a user changes the input at 500ms of delay on submitting an API request. Since async cannot be implemented directly on a useEffect function, a helper function inside the useEffect is utilized.

![Screen Shot 2022-03-23 at 8 58 33 PM](https://user-images.githubusercontent.com/84875731/159839395-ee712bf9-fa62-4d13-b242-bb7a5b3a527c.png)

### Dropdown- Dropdown.js
This App allows a user to select a color and display the color below the dropdown component. A "ui selection dropdown visible active" class name from Semantic UI was used for the dropdown CSS, and I can set up an "open" state to toggle between visible and invisible dropdown as below.
    className={`ui selection dropdown ${open? 'visible active': ''}`}

Moreover, an EventListener is then added to the useEffect arrow function to listen for any clicks on the body to toggle "open" state to false.

![Screen Shot 2022-03-23 at 8 55 48 PM](https://user-images.githubusercontent.com/84875731/159839147-93e3c91d-9419-481c-9bcb-d00a3bd7b9d8.png)

### Google Translator API- Translate.js, Convert,js
In the Google Translator API, I set up 5 languages as options for a user to choose what language to be translated to and I store those options as an array object as "options". The "options" array is then sent to the reusable Dropdown component that I created earlier to be displayed.

Next, Covert.js is created to handle the async API request by using useEffect. A catch here is that I used another useEffect to debounced the "text" state which was renamed to "debouncedText".

![Screen Shot 2022-03-23 at 9 04 55 PM](https://user-images.githubusercontent.com/84875731/159840076-e6c72c1d-a504-4966-a148-bca19f6a0fe2.png)

### Navigation and Router- header.js, Link.js, Route.js
To avoid requesting a wide variety of network requests during the navigation between the Apps, the header.js passes href data to Link.js and Link.js only makes necessary network requests according to the selected App. 

The Link.js does four of the following steps when user clicked an App:

1. Initiates an event.prevenDefault() on the link.
2. Detects which page a user has clicked and changes the URL of the web browser in the search bar according to the click's pathname.
3. Emits a navigation event, PopStateEvent, that communicates to the Route components that the URL has changed to.
4. The Route rerenders, showing/hiding components appropriately(step 4 happens inside the Route.js).

      const Link = ({className, href, children}) => {
        const onClick =(event) => { //event object is always necessary when defining an event handeler
            //restore default windows and mac commend function
            if(event.metaKey || event.ctrlKey) {
                return;
            }
            // 1. preventing a full-page reload between user clicking each menu tabs
            event.preventDefault(); 

            // 2. detect the changes as user is clicking a different page and changes the URL of the web browser search bar async with the click's pathname
            window.history.pushState({},'', href);

            // 3. Emit a navigation event that communicate to the Route components that the URL just changed
            const navEvent = new PopStateEvent('popstate');
            window.dispatchEvent(navEvent);
      };

## Summary
