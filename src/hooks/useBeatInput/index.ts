import { useEffect } from "react";

type Element = HTMLElement | Window;
type BeatInputHandler = () => void;

const useBeatInput = (
    onBeatInput: BeatInputHandler,
    element: Element = window,
): void => {
    useEffect(() => {
        const handleKeyDown = (event: Event) => {
            if (event instanceof KeyboardEvent && (event.code === "Space" || event.code === "Enter")) {
                onBeatInput();
            }
        };

        const handleMouseDown = () => {
            onBeatInput();
        };

        element.addEventListener("keydown", handleKeyDown);
        element.addEventListener("mousedown", handleMouseDown);

        return () => {
            element.removeEventListener("keydown", handleKeyDown);
            element.removeEventListener("mousedown", handleMouseDown);
        };
    }, [onBeatInput, element]);
};

export { useBeatInput };
