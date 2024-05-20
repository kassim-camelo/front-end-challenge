import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export interface Radio {
    title: string,
    subtitle: string,
    image: string
}

const RadioImage = styled.img`
    border-radius: 5px;
    height: 200px;
    width: 200px;
    margin: 0.5rem;
    object-fit: cover;
    box-shadow: 0px 0px 20px 0px #00000090;
    transform: scale(1.1);
`;

const RadioContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    &:hover {
        background-color: #1f1f1f;
        border-radius: 0.5rem;
        cursor: pointer;
    }
`;

const Title = styled(Typography)`
    padding: 0.75rem 1rem;
    font-weight: bold;
    //margin-top: 1rem;
`;

const RadioName = styled(Typography)`
    padding-top: 0.75rem;
    letter-spacing: 0.05rem;
`;

const RadioSubtitle = styled(Typography)`
    padding-top: 0.5rem;
    letter-spacing: 0.05rem;
    color: #a7a7a7;
    font-weight: bold;
`;

const Radio = ({title, image, subtitle}: Radio) => {
    const filteredSub = subtitle.length > 40 ? subtitle.substring(0, 40) + "..." : subtitle;
    return (
    <RadioContainer>
        <RadioImage src={image} alt={title} />
        <Box sx={{ width: '100%' }}>
            <RadioName variant='body2'>{title}</RadioName>
            <RadioSubtitle variant='caption'>{filteredSub}</RadioSubtitle>
        </Box>
    </RadioContainer>
)}

const TopRadios = ({radios}: {radios: Radio[]}) => {
    return(
        <Box sx={{padding: '1rem'}}>
            <Title variant='h5'>Estações de rádio Populares</Title>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                {radios.map((radio) => <Radio title={radio.title} image={radio.image} subtitle={radio.subtitle} />)}
            </Box>
        </Box>
    )
}

export default TopRadios;