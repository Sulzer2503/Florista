import { Box } from "@mui/material";

export default function GiftCardText() {
    return (
        <>
            <Box sx={{display: 'block'}}>
                <label style={{ fontSize: 20 }}>Your message to receiver:</label>
            </Box>
            <Box sx={{display: 'block'}}>
                <textarea name="giftCardText" rows={4} cols={30} />
            </Box>
        </>
    )
}