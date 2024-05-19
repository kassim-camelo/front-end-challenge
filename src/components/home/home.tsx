import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Button, Typography } from "@mui/material";

import { HomeContainer, HomeNavbar } from './homeStyled';
import TopArtists from './sections/topArtists';
import { useEffect, useState } from 'react';
import { Artist } from './sections/topArtists';

const Home = () => {
    const [artists, setArtists] = useState([] as Artist[]);

    useEffect(() => {
        fetch('./artists.json').then(response => response.json()).then(data => setArtists(data["artists"] as Artist[])).catch(err => console.error(err));
    }, []);
    return (
        <HomeContainer sx={{my: '0.5rem'}}>
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
            <TopArtists artists={artists}/>
        </HomeContainer>
    );
}

export default Home;