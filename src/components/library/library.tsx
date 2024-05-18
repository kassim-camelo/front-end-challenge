import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import { Box, Container } from "@mui/material";

function Library() {
    return (
        <Container maxWidth='sm'>
            <Box sx={{ bgcolor: '#121212', height: '650px', borderRadius: '1rem', marginTop: '5px'}}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <PlaylistAddCheckOutlinedIcon sx={{ fontSize: '5rem', color: '#b3b3b3'}} />
                </Box>
            </Box>
        </Container>
    );
}

export default Library;