import { Box, Modal, Typography } from "@mui/material";

interface LanguageModalProps {
    open: boolean;
    onClose: () => void;
}


function LanguageModal({open, onClose}: LanguageModalProps) {
    return(
    <>
        <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="language"
        aria-describedby="language-modal-description"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <Box sx={{backgroundColor: '#212121', padding: '4rem'}}>
                <Typography variant="h6" component="h2" sx={{color: 'white'}}>
                    Escolha um Idioma
                </Typography>
                <Typography sx={{ mt: 2, color: 'white' }}>
                Essa configuração atualiza o que você lê no open.spotify.com.
                </Typography>
            </Box>
        </Modal>
    </>
    )
}

export default LanguageModal;