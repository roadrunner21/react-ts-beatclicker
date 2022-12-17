import { useEffect } from "react";

const useInput = (handler: EventListener, element = window) => {
    useEffect(() => {
        // events to listen for
        const events = ["click", "space", "enter"];
        events.forEach((eventName) => {
            element.addEventListener(eventName, handler);
        });
        // cleanup function to remove the event listeners when the component unmounts
        return () => {
            events.forEach((eventName) => {
                element.removeEventListener(eventName, handler);
            });
        };
    }, [handler, element]);
};

export default useInput;