import { useEffect } from "react";

type Element = HTMLElement | Window;
type BeatInputHandler = () => void;

const useBeatInput = (
    onBeatInput: BeatInputHandler,
    element: Element = window,
): void => {
    useEffect(() => {
        // events to listen for
        const events = ["space", "enter", "mousedown"];
        events.forEach((eventName) => {
            element.addEventListener(eventName, onBeatInput);
        });
        // cleanup function to remove the event listeners when the component unmounts
        return () => {
            events.forEach((eventName) => {
                element.removeEventListener(eventName, onBeatInput);
            });
        };
    }, [onBeatInput, element]);
};

export default useBeatInput;
