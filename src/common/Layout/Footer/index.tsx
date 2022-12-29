import React from "react"
import {GitHub, LinkedIn} from "@mui/icons-material";
import {Box, Container, IconButton, Link, Typography} from "@mui/material";
import moment from "moment";
import {theme} from "../../../theme/theme";

const Footer = () => {
    const iconStyles = {
        fontSize: "1.3rem"
    };
    return <Box py={1}
                sx={{backgroundColor: theme.palette.grey[900]}}>
        <Container>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Box>
                    <Typography variant="body2">
                        &copy;
                        {" "}
                        {moment().format("YYYY")}
                        {" "}
                        <Link href={`mailto:${process.env.REACT_APP_EMAIL}`}>
                            {process.env.REACT_APP_COMPANY_NAME}
                        </Link>
                    </Typography>
                </Box>
                <Box>
                    <IconButton target={"_blank"}
                                component={"a"}
                                href={process.env.REACT_APP_URL_LINKEDIN as string}>
                        <LinkedIn sx={iconStyles}/>
                    </IconButton>
                    <IconButton target={"_blank"}
                                component={"a"}
                                href={process.env.REACT_APP_URL_GITHUB as string}>
                        <GitHub sx={iconStyles}/>
                    </IconButton>
                </Box>
            </Box>
        </Container>
    </Box>
};

export {Footer};