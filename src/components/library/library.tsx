import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Box, Button, Container, Typography } from "@mui/material";

import { CardText, LanguageButton, LibaryButton, LibraryCard, LibraryFooter, LibraryFooterText, LibraryHeader, PlaylistIcon, PlusIcon, TextContainer } from './libraryStyled';

function Library() {
    return (
        <Container maxWidth='sm' sx={{ minWidth: '600px'}}>
            <Box sx={{ bgcolor: '#121212', height: '650px', borderRadius: '1rem', marginTop: '5px', marginBottom: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
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
                        <LibraryFooterText component='a' href='/' variant="caption" sx={{ color: '#b3b3b3'}}>Legal</LibraryFooterText>
                        <LibraryFooterText component='a' href='/' variant="caption" sx={{ color: '#b3b3b3'}}>Segurança e Centro de privacidade</LibraryFooterText>
                        <LibraryFooterText component='a' href='/' variant="caption" sx={{ color: '#b3b3b3'}}>Política de privacidade</LibraryFooterText>
                    </LibraryFooter>
                    <LibraryFooter>
                        <LibraryFooterText component='a' href='/' variant="caption" sx={{ color: '#b3b3b3'}}>Cookies</LibraryFooterText>
                        <LibraryFooterText component='a' href='/' variant="caption" sx={{ color: '#b3b3b3'}}>Sobre anúncios</LibraryFooterText>
                        <LibraryFooterText component='a' href='/' variant="caption" sx={{ color: '#b3b3b3'}}>Acessibilidade</LibraryFooterText>
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