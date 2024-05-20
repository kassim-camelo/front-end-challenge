import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useEffect, useState } from 'react';

import { HomeContainer, HomeNavbar, LoginButton, NavbarContainerLeft, NavbarContainerRight, SubscribeText } from './homeStyled';
import TopAlbums, { Album } from './sections/topAlbums';
import TopArtists from './sections/topArtists';
import { Artist } from './sections/topArtists';
import TopPlaylists, { Playlist } from './sections/topPlaylists';
import TopPodcasts, { Podcast } from './sections/topPodcasts';
import TopRadios, { Radio } from './sections/topRadios';

const Home = () => {
    const [data, setData] = useState({
        artists: [] as Artist[],
        albums: [] as Album[],
        stations: [] as Radio[],
        playlists: [] as Playlist[],
        podcasts: [] as Podcast[]
    });

    useEffect(() => {
        fetch('./artists.json').then(response => response.json()).then(data => setData(prevState => ({...prevState, artists: data["artists"]}))).catch(err => console.error(err));
        fetch('./albums.json').then(response => response.json()).then(data => setData(prevState => ({...prevState, albums: data["albums"]}))).catch(err => console.error(err));
        fetch('./radio.json').then(response => response.json()).then(data => setData(prevState => ({...prevState, stations: data["radio"]}))).catch(err => console.error(err));
        fetch('./playlists.json').then(response => response.json()).then(data => setData(prevState => ({...prevState, playlists: data["playlists"]}))).catch(err => console.error(err));
        fetch('./podcasts.json').then(response => response.json()).then(data => setData(prevState => ({...prevState, podcasts: data["podcasts"]}))).catch(err => console.error(err));
    }, []);

    return (
        <HomeContainer sx={{my: '0.5rem'}}>
            <HomeNavbar>
                <NavbarContainerLeft>
                    <ArrowBackIosNewOutlinedIcon sx={{height: '35px', width: '35px', padding: '0.5rem', backgroundColor: '#090909', borderRadius: '4rem', marginRight: '10px', color: '#929292'}} />
                    <ArrowForwardIosOutlinedIcon sx={{height: '35px', width: '35px', padding: '0.5rem', backgroundColor: '#090909', borderRadius: '4rem', color: '#929292'}} />
                </NavbarContainerLeft>
                <NavbarContainerRight>
                    <SubscribeText variant='h6'>Inscrever-se</SubscribeText>
                    <LoginButton>Entrar</LoginButton>
                </NavbarContainerRight>
            </HomeNavbar>
            <TopArtists artists={data.artists}/>
            <TopAlbums albums={data.albums}/>
            <TopRadios radios={data.stations}/>
            <TopPlaylists playlists={data.playlists}/>
            <TopPodcasts  podcasts={data.podcasts}/>
        </HomeContainer>
    );
}

export default Home;