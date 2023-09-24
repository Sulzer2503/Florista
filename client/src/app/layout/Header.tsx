import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    darkMode: boolean
    handleThemeMode: () => void
}

export default function Header({darkMode, handleThemeMode} : Props) {
    return (
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6">
                    Florista
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeMode} />
            </Toolbar>
        </AppBar>
    )
}