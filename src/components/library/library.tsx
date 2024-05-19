import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Box, Container, Typography } from "@mui/material";

import { CardText, LanguageButton, LibaryButton, LibraryCard, LibraryFooter, LibraryFooterText, LibraryHeader, PlaylistIcon, PlusIcon, TextContainer } from './libraryStyled';

function Library() {
    return (
        <Container maxWidth='sm' sx={{ minWidth: '600px', padding: '0.25rem 0.75rem'}} disableGutters>
            <Box sx={{ bgcolor: '#121212', height: '665px', borderRadius: '1rem', marginTop: '5px', marginBottom: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div>
                    <LibraryHeader>
                        <Box sx={{display: 'flex', alignItems: 'center', paddingTop:'1.25rem', paddingLeft: '1.25rem'}}>
                            <PlaylistIcon /><Typography variant='h6' sx={{ color: '#b3b3b3'}}>Sua Biblioteca</Typography>
                        </Box>
                        <Box sx={{display: 'flex', justifyContent: 'right', alignItems: 'center', width: '340px'}}>
                            <PlusIcon />
                        </Box>
                    </LibraryHeader>
                    <Box>
                        <LibraryCard component='section'>
                            <TextContainer>
                                <CardText variant='subtitle2' sx={{fontSize: '1rem'}}>Crie sua primeira playlist</CardText>
                                <CardText variant='body1' sx={{fontSize: '0.825rem'}}>É fácil, vamos te ajudar.</CardText>
                            </TextContainer>
                            <LibaryButton sx={{width: '100px'}}>
                                Criar playlist
                            </LibaryButton>
                        </LibraryCard>
                        <LibraryCard component='section'>
                            <TextContainer>
                                <CardText variant='subtitle2' sx={{fontSize: '1rem'}}>Que tal seguir um podcast novo?</CardText>
                                <CardText variant='body1' sx={{fontSize: '0.825rem'}}>Avisaremos você sobre novos episódios.</CardText>
                            </TextContainer>
                            <LibaryButton sx={{width: '130px'}}>
                                Explore podcasts
                            </LibaryButton>
                        </LibraryCard>
                    </Box>
                </div>
                <Box component='section' sx={{ display: 'flex', flexDirection:'column', justifyContent: 'center', paddingBottom: '2rem'}}>
                    <LibraryFooter>
                        <LibraryFooterText variant="caption">Legal</LibraryFooterText>
                        <LibraryFooterText variant="caption">Segurança e Centro de privacidade</LibraryFooterText>
                        <LibraryFooterText variant="caption">Política de privacidade</LibraryFooterText>
                    </LibraryFooter>
                    <LibraryFooter>
                        <LibraryFooterText variant="caption">Cookies</LibraryFooterText>
                        <LibraryFooterText variant="caption">Sobre anúncios</LibraryFooterText>
                        <LibraryFooterText variant="caption">Acessibilidade</LibraryFooterText>
                    </LibraryFooter>
                    <LanguageButton>
                        <LanguageOutlinedIcon sx={{marginRight: '5px'}} /> Português do Brasil
                    </LanguageButton>
                </Box>
            </Box>
        </Container>
    );
}

export default Library;