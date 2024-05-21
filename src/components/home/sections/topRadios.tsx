import styled from "@emotion/styled";
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import { Box, Typography } from "@mui/material";
import { useState } from "react";

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
    //margin-right: 5px;
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
    max-width: 216px;
    color: #a7a7a7;
    font-weight: bold;
`;

const PlayButton = styled.div<{ isVisible: boolean}>`
    opacity: ${(props) => props.isVisible ? 1 : 0};
    visibility: ${(props) => props.isVisible ? 'visible' : 'hidden'};
    transform: ${(props) => props.isVisible ? 'translateY(0)' : 'translateY(10px)'};
    background-color: black;
    color: #1ed760;
    max-width: 25px;
    border-radius: 4rem;
    position: absolute;
    right: 15px;
    bottom: 90px;
    transition: all 0.2s;
    box-shadow: 1px 1px 20px 0px #00000090;
`;

const Radio = ({title, image, subtitle}: Radio) => {
    const [isHovered, setIsHovered] = useState(false);
    const filteredSub = subtitle.length > 40 ? subtitle.substring(0, 40) + "..." : subtitle;
    return (
    <RadioContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <RadioImage src={image} alt={title} />
        <Box sx={{ width: '100%', position: 'relative', maxWidth: '216px'  }}>
            <RadioName variant='body2'>{title}</RadioName>
            <RadioSubtitle variant='caption'>{filteredSub}</RadioSubtitle>
            <PlayButton isVisible={isHovered}>
                <PlayCircleFilledOutlinedIcon sx={{transform: 'scale(2)'}}/>
            </PlayButton>
        </Box>
    </RadioContainer>
)}

const TopRadios = ({radios}: {radios: Radio[]}) => {
    return(
        <Box sx={{padding: '1rem' }}>
            <Title variant='h5'>Estações de rádio populares</Title>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {radios.map((radio) => <Radio title={radio.title} image={radio.image} subtitle={radio.subtitle} />)}
            </Box>
        </Box>
    )
}

export default TopRadios;