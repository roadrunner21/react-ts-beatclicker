import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { DialogContent, Modal } from "@mui/material";
import { Settings as SettingsIcon } from "@mui/icons-material";
import Settings from "../features/settings/Settings";

function SettingsButton() {
    const [settingsOpened, setSettingsOpened] = useState(false);

    const handleOpenSettings = (event: React.MouseEvent<HTMLElement>) => {
        setSettingsOpened(true);
    };

    const handleCloseSettings = () => {
        setSettingsOpened(false);
    };
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenSettings} sx={{ p: 0 }}>
                    <SettingsIcon/>
                </IconButton>
            </Tooltip>
            <Modal
                open={settingsOpened}
                onClose={handleCloseSettings}
                aria-labelledby="settings"
                aria-describedby="settings"
            >
                <DialogContent>
                    <Settings/>
                </DialogContent>
            </Modal>
        </Box>);
}

export default SettingsButton;