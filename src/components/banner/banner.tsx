import styled from "@emotion/styled";
import { Box, ButtonBase, Container, Typography } from "@mui/material";

const PremiumButton = styled(ButtonBase)`
    border-radius: 4rem;
    background-color: white;
    color: black;
    padding: 0.25rem 1.75rem;
    font-weight: 700;
    font-size: 1rem;
    &:hover{
        transform: scale(1.05);
    }
`;

const Banner = () =>{
    return (
        <Container maxWidth={false} sx={{ height: '100%', background: 'linear-gradient(90deg ,#ae2896, #509af4) ', display: 'flex',justifyContent: 'space-between', padding: '1.25rem', maxWidth: '99%' }}>
            <Box component='footer' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', color: 'white'}}>
                <Typography variant='h6'>Testar o Premium de graça</Typography>
                <Typography variant='body1'>Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</Typography>
            </Box>
            <PremiumButton>Inscreva-se grátis</PremiumButton>
        </Container>
    )
}

export default Banner;