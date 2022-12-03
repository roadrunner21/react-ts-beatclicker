import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { Modal } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Settings } from "@mui/icons-material";

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
                    <Settings/>
                </IconButton>
            </Tooltip>
            <Modal
                open={settingsOpened}
                onClose={handleCloseSettings}
                aria-labelledby="settings"
                aria-describedby="settings"
            >
                <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </Box>);
}

export default SettingsButton;