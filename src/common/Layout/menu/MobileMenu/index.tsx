import React from "react";
import { Link, List, ListItem, ListItemText } from '@mui/material';
import { mainMenu } from '../../../../menu/mainMenu';

function MobileMenu() {
    return (
        <List component="nav" aria-label="main menu">
            {mainMenu.map((entries) => (
                <ListItem href={"#"} button key={entries.name}>
                    <Link href={entries.page.path} underline={"none"}>
                        <ListItemText primary={entries.name}/>
                    </Link>
                </ListItem>
            ))}
        </List>
    );
}

export { MobileMenu };