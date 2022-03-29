import React from 'react';

{/*
To avoid a full page reload(reloading the entire index.html file) whenever a user clicked a page, the Link component will:
    1. Change the URL but don't do a full page refresh
    2. Each Route could detect the URL has changed
    3. Route could update piece of state tracking the current pathname
    4. Each Route rerenders, showing/hiding components appropriately(step 4 is happening in Route.js)
*/}
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

    return (
        <a onClick={onClick} className={className} href={{href}}>
            {children}
        </a>
    )
};

export default Link;