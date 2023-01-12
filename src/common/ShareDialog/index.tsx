import React from "react"
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LineIcon,
    LineShareButton,
    RedditIcon,
    RedditShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";
import { Box, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";

interface ShareDialogProps {
    showDialog: boolean;
    handleClose: () => void;
    score: number;
}

const ShareDialog = (props: ShareDialogProps) => {
    const gameUrl = "https://beatclicker.com";
    const facebookQuote = `I just scored ${props.score} on Beatclicker, can you beat me?`;
    const facebookTitle = "Share on Facebook";
    const redditTitle = "Share on Reddit";
    const whatsappTitle = "Share on WhatsApp";
    const lineTitle = "Share on Line";
    const emailTitle = "Share via Email";
    return (
        <Dialog open={props.showDialog}
                onClose={props.handleClose}>
            <DialogTitle id="share-dialog-title">
                Share your score and challenge your friends
            </DialogTitle>
            <DialogContent>
                <DialogContent id="share-dialog-description"
                               sx={{
                                   display: "flex",
                                   flexDirection: "column",
                                   alignItems: "center",
                               }}>
                    <Typography variant={"body2"}>
                        Share with
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        my: 1,
                        gap: 1,
                    }}>
                        <FacebookShareButton
                            url={gameUrl}
                            quote={facebookQuote}
                            hashtag={"#beatclicker"}
                            title={facebookTitle}
                        >
                            <FacebookIcon size={32}
                                          round/>
                        </FacebookShareButton>
                        <RedditShareButton
                            url={gameUrl}
                            title={redditTitle}
                        >
                            <RedditIcon size={32}
                                        round/>
                        </RedditShareButton>
                        <WhatsappShareButton
                            url={gameUrl}
                            title={whatsappTitle}
                        >
                            <WhatsappIcon size={32}
                                          round/>
                        </WhatsappShareButton>
                        <LineShareButton
                            url={gameUrl}
                            title={lineTitle}
                        >
                            <LineIcon size={32}
                                      round/>
                        </LineShareButton>
                        <EmailShareButton
                            url={gameUrl}
                            title={emailTitle}
                        >
                            <EmailIcon size={32}
                                       round/>
                        </EmailShareButton>
                    </Box>
                </DialogContent>
            </DialogContent>
        </Dialog>
    )
}

export { ShareDialog };


