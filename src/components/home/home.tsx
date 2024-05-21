import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { Facebook, FooterList, HomeContainer, HomeNavbar, Instagram, Item, ListTitle, LoginButton, NavbarContainerLeft, NavbarContainerRight, SubscribeText, Twitter } from './homeStyled';
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
            <footer style={{ display: 'flex', justifyContent: 'space-between', margin: '2rem', borderBottom: '1px solid #2a2a2a'}}>
                <div style={{display: 'flex'}}>
                    <FooterList>
                        <ListTitle variant='caption'>Empresa</ListTitle>
                        <Item>Sobre</Item>
                        <Item>Empregos</Item>
                        <Item>For the Record</Item>
                    </FooterList>
                    <FooterList>
                        <ListTitle variant='caption'>Comunidades</ListTitle>
                        <Item>Para Artistas</Item>
                        <Item>Desenvolvedores</Item>
                        <Item>Publicidade</Item>
                        <Item>Investidores</Item>
                        <Item>Fornecedores</Item>
                    </FooterList>
                    <FooterList>
                        <ListTitle variant='caption'>Links úteis</ListTitle>
                        <Item>Suporte</Item>
                        <Item>Aplicativo móvel grátis</Item>
                    </FooterList>
                    <FooterList>
                        <ListTitle variant='caption'>Planos do Spotify</ListTitle>
                        <Item>Premium Individual</Item>
                        <Item>Premium Duo</Item>
                        <Item>Premium Família</Item>
                        <Item>Premium Universitário</Item>
                        <Item>Spotify Free</Item>
                    </FooterList>
                </div>
                <div>
                    <Instagram />
                    <Twitter />
                    <Facebook />
                </div>
            </footer>
            <Typography variant='caption' sx={{textAlign: 'center', color: '#929292', mx: '2rem', paddingBottom: '5rem'}}>© 2024 Spotify AB</Typography>
        </HomeContainer>
    );
}

export default Home;