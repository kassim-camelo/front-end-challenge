import { Container } from "@mui/material";

import Spotify from '../../assets/spotify-logo.png';
import { HomeIcon, ListItemStyled, ListStyled, Logo, MainBox, SearchIcon, Text } from './sidebarStyled';

function Sidebar() {
    return (
        <>
            <Container maxWidth="sm" sx={{padding: '0.25rem 0.75rem'}} disableGutters>
                <MainBox>
                    <Logo src={Spotify} alt='Spotify Logo' />
                    <ListStyled>
                        <ListItemStyled>
                            <HomeIcon />
                            <Text variant="h6">Início</Text>
                        </ListItemStyled>
                        <ListItemStyled>
                            <SearchIcon/>
                            <Text variant="h6">Buscar</Text>
                        </ListItemStyled>
                    </ListStyled>
                </MainBox>
            </Container>
        </>
    )
}

export default Sidebar;