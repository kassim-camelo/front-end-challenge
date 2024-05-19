import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Box, Button, Typography } from "@mui/material";

import { HomeContainer, HomeNavbar } from './homeStyled';

const Home = () => {
    return (
        <HomeContainer>
            <HomeNavbar>
                <div>
                    <ArrowBackIosNewOutlinedIcon />
                    <ArrowForwardIosOutlinedIcon />
                </div>
                <div>
                    <Typography variant='h6'>Inscreva-se</Typography>
                    <Button variant='contained'>Entrar</Button>
                </div>
            </HomeNavbar>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography variant='h6'>Artistas Populares</Typography>
            </Box>
        </HomeContainer>
    );
}

export default Home;