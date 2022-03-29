import {useEffect, useState} from 'react';

//Route components provides the routing logics for further access and flexibility to render the pages based on path route a user is visiting
const Route = ({path, children}) => { //When a JSX tag is inside another JSX tag, the inner tag is provided as a children prop to the outsider
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
    // Adding EventListener of popstate allows to render the page upon URL changes(PopStateEvent())
    useEffect(()=> {
        //helper function: updating the current path
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        //if popstate is triggered, envoke onLocationChange helper function
        window.addEventListener('popstate', onLocationChange);

        //removes the EventListener once the current path has been changed
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    //render the page with current path and returns null to all the paths that are not matching
    return currentPath === path
    ? children
    : null;
};

export default Route;