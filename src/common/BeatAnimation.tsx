import { useCallback, useState } from "react";
import { animated, useSpring } from "react-spring";
import { Box, useTheme } from "@mui/material";
import { useBeatInput } from "../hooks";
import animationColors from "../theme/animationColors";

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
        const color = animationColors[randomInt(0, animationColors.length - 1)];

        setCircle({ x, y, color });
        setIsAnimating(true);
    }, []);

    useBeatInput(handleEvent);

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
