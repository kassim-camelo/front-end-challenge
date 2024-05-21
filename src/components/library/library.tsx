import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Box, Container, Typography } from "@mui/material";
import { useState } from 'react';

import LanguageModal from '../modal/language';
import { CardText, LanguageButton, LibaryButton, LibraryCard, LibraryFooter, LibraryFooterText, LibraryHeader, PlaylistIcon, PlusIcon, TextContainer } from './libraryStyled';

function Library() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container maxWidth='sm' sx={{ minWidth: '400px', padding: '0rem 0.5rem'}} disableGutters>
            <LanguageModal open={open} onClose={handleClose} />
            <Box sx={{ bgcolor: '#121212', height: '750px', borderRadius: '1rem', marginTop: '5px', marginBottom: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div>
                    <LibraryHeader>
                        <Box sx={{display: 'flex', alignItems: 'center', paddingTop:'0.75rem', paddingLeft: '1.25rem', width: '100%'}}>
                            <PlaylistIcon /><Typography variant='body1' sx={{ color: '#b3b3b3' }}><strong>Sua Biblioteca</strong></Typography>
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
                        <LibraryCard component='section' sx={{ marginTop: '1.5rem !important' }}>
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
                    <LanguageButton onClick={handleOpen}>
                        <LanguageOutlinedIcon sx={{marginRight: '5px'}} /> <strong>Português do Brasil</strong>
                    </LanguageButton>
                </Box>
            </Box>
        </Container>
    );
}

export default Library;