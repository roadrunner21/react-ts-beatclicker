import React from "react";
import { Link, List, ListItem, ListItemText } from "@mui/material";
import mainMenu from "../../../../menu/mainMenu";

function DesktopMenu() {
    return (
        <List component="nav" aria-label="main menu"
              sx={{
                  display: "flex",
                  flexDirection: "row",
              }}>
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

export default DesktopMenu;