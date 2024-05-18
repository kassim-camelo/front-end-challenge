import { Box, Button, Container, Typography } from "@mui/material";

const Banner = () =>{
    return (
        <Container maxWidth={false} sx={{ height: '100%', background: 'linear-gradient(90deg ,#ae2896, #509af4) ', display: 'flex', padding: '1.25rem', maxWidth: '99%' }}>
            <Box component='footer' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', color: 'white'}}>
                <Typography variant='h6'>Testar o Premium de graça</Typography>
                <Typography variant='body1'>Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</Typography>
            </Box>
            <Button variant="contained" disableElevation sx={{borderRadius: '0', bgcolor: '#1db954', color: '#fff'}}>Inscreva-se grátis</Button>
        </Container>
    )
}

export default Banner;