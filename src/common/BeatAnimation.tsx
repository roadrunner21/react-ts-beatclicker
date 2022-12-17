import { useCallback, useEffect, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";
import { Box, useTheme } from "@mui/material";

const colors = [
    "#FFEB3B", // Yellow
    "#FFC107", // Amber
    "#FF9800", // Orange
    "#FF5722", // Deep orange
    "#FF1744", // Red
    "#F50057", // Pink
    "#D500F9", // Purple
    "#9C27B0", // Deep purple
    "#673AB7", // Indigo
    "#3F51B5", // Blue
    "#2196F3", // Light blue
    "#03A9F4", // Cyan
    "#00BCD4", // Teal
    "#009688", // Green
    "#4CAF50", // Light green
    "#8BC34A", // Lime
    "#CDDC39", // Yellow green
    "#FFEB3B", // Bright green
];

const BeatAnimation = () => {
    const theme = useTheme();
    const [isAnimating, setIsAnimating] = useState(false);
    const [circle, setCircle] = useState({
        x: 0,
        y: 0,
        color: theme.palette.background.default,
    });
    const animationProps = useSpring({
        from: {
            boxShadow: `0px 0px 1px 0px ${circle.color}`,
        },
        to: {
            boxShadow: `0px 0px 100px 50px ${circle.color}`,
        },
        reset: true,
        config: { duration: 300 },
        onRest: () => setIsAnimating(false),
    });

    function randomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const handleEvent = useCallback(() => {
        const x = randomInt(Math.floor(window.innerWidth * 0.2), Math.floor(window.innerWidth * 0.8));
        const y = randomInt(Math.floor(window.innerHeight * 0.2), Math.floor(window.innerHeight * 0.8));
        const color = colors[randomInt(0, colors.length - 1)];

        setCircle({ x, y, color });
        setIsAnimating(true);
    }, []);

    const handleClickRef = useRef((event: MouseEvent) => handleEvent());
    const handleKeyDownRef = useRef((event: KeyboardEvent) => {
        if (event.code === "Space") {
            handleEvent();
        }
    });

    useEffect(() => {
        const handleClick = handleClickRef.current;
        const handleKeyDown = handleKeyDownRef.current;

        document.addEventListener("click", handleClick);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("click", handleClick);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleEvent]);

    return (
        <Box sx={{
            position: "fixed",
            left: `${circle.x}px`,
            top: `${circle.y}px`,
        }}>
            <animated.div style={isAnimating ? animationProps : {}}>
                <Box sx={{
                    width: "1px",
                    height: "1px",
                    borderRadius: "50%",
                }}
                />
            </animated.div>
        </Box>
    );
};

export default BeatAnimation;
