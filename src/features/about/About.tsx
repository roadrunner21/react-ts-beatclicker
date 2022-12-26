import React from "react";
import { Container, Divider, Link, Typography } from "@mui/material";

function About() {
    return (
        <Container>
            <Typography variant="h4"
                        component={"h1"}>
                About Beat Clicker
            </Typography>
            <Divider/>
            <Typography variant={"body1"}>
                Beat Clicker is a rhythm game where players have to tap in time with the beat.
            </Typography>
            <Typography variant="h5">
                Score Algorithm
            </Typography>
            <Divider/>
            <Typography variant={"body1"}
                        gutterBottom>
                Right now the score is calculated based on comparing the time between the expected tab and the actual
                tap.
            </Typography>
            <Typography variant={"body1"}
                        gutterBottom>
                Differences are cumulative, which means that if you are too early or too late on the beat, but keep the
                consistency afterwards, you will still be punished for the initial offset on every upcoming beat.
            </Typography>
            <Typography variant={"body1"}>
                I will consider adding an algorithm in the future that compares the difference between the actual taps
                with each other, rather than with an expected time. This would allow for more leniency because the
                offset of one mistake wouldn't add up over all the upcoming beats.
            </Typography>
            <Typography variant="h5">
                Technology
            </Typography>
            <Divider/>
            <Typography variant={"body1"}
                        gutterBottom>
                This game was built using React and Redux, along with various other libraries such as Material UI,
                chart.js, moment, and use-sound. It is written in TypeScript and follows the principles of responsive
                design to ensure a smooth user experience on all devices.
            </Typography>
            <Typography variant={"body1"}>
                Custom hooks such as useBeatInput were
                implemented to handle user input, and the useSound hook from the use-sound library is used to play sound
                effects. The moment library is used to format timestamps, and the BeatAnimation component provides
                visual feedback to the user.
            </Typography>
            <Typography variant="h5">
                Infrastructure
            </Typography>
            <Divider/>
            <Typography variant={"body1"}
                        gutterBottom>
                In the past I've often struggled with upscaling React applications. I've often run into the issue that
                pages, routing or features were maintained in a way where we quickly lost overview whenever the
                application
                grew to big.
            </Typography>
            <Typography variant={"body1"}
                        gutterBottom>
                In this application, I've tried to improve on these issues and implement an infrastructure that's easily
                readable and scales up.
            </Typography>
            <Typography variant={"body1"}
                        gutterBottom>
                For example, I've added a folder /pages containing all the pages of the application. All these pages
                follow the same structure, which makes it easy to add new pages or remove existing ones. On the
                component side, I got RouterHandler.tsx which is responsible to resolve all the pages.
            </Typography>
            <Typography variant={"body1"}
                        gutterBottom>
                Another folder /menu contains all the menu items of the application. Each menu item consists of one of
                those pages and a label. This makes it very readable and easy to understand.
            </Typography>
            <Typography variant={"body1"}>
                I've implemented a feature based structure where each feature is self-contained and can be easily moved
                to another application. This makes it easy to add new features, and it also makes it easy to remove
                features that are no longer needed. The use of custom hooks also helps to keep the code clean and
                readable.
            </Typography>
            <Typography variant="h5">
                Socials
            </Typography>
            <Divider/>
            <Typography>
                You can find more information about me and my work on my
                {" "}
                <Link target="_blank"
                      href="https://linkedin.com/in/themarcohefti/">
                    LinkedIn
                </Link>
                {" "}
                or
                my
                {" "}
                <Link
                    target="_blank"
                    href="https://github.com/roadrunner21">
                    GitHub
                </Link>
                {" "}
                profile.
            </Typography>
            <Typography variant="h5">
                Acknowledgements
            </Typography>
            <Divider/>
            <Typography>
                Beat Clicker would not have been possible without the help of the following open-source libraries and
                resources:
            </Typography>
            <ul>
                <li>
                    <Link href={"https://reactjs.org/"}
                          target="_blank">
                        React
                    </Link>
                </li>
                <li>
                    <Link href={"https://react-redux.js.org/"}
                          target="_blank">
                        Redux
                    </Link>
                </li>
                <li>
                    <Link href={"https://mui.com/"}
                          target="_blank">
                        Material UI
                    </Link>
                </li>
                <li>
                    <Link href={"https://react-chartjs-2.js.org/"}
                          target="_blank">
                        chart.js
                    </Link>
                </li>
                <li>
                    <Link href={"https://momentjs.com/"}
                          target="_blank">
                        momentjs
                    </Link>
                </li>
                <li>
                    <Link href={"https://github.com/joshwcomeau/use-sound"}
                          target="_blank">
                        use-sound
                    </Link>
                </li>
            </ul>
        </Container>
    );
}

export { About };