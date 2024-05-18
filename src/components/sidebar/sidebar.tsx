import { Container } from "@mui/material";

import { HomeIcon, ListItemStyled, ListStyled, MainBox, SearchIcon, Text } from './sidebarStyled';

function Sidebar() {
    return (
        <>
            <Container maxWidth="sm">
                <MainBox>
                    <img style={{marginTop: '1.5rem', marginLeft:'1.5rem', objectFit:'cover', height:'1.75rem'}} src='/spotify-logo.png' alt='Spotify Logo' />
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