import styled from "@emotion/styled";
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import { Box, Typography } from "@mui/material";
import { useState } from "react";

export interface Podcast {
    name: string,
    image: string,
    studio: string
}

const PodcastImage = styled.img`
    border-radius: 5px;
    height: 200px;
    width: 200px;
    margin: 0.5rem;
    object-fit: cover;
    box-shadow: 0px 0px 20px 0px #00000090;
    transform: scale(1.1);
`;

const PodcastContainer = styled(Box)`
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

const PodcastName = styled(Typography)`
    padding-top: 0.75rem;
    letter-spacing: 0.05rem;
`;

const PodcastDescription = styled(Typography)`
    padding-top: 0.5rem;
    letter-spacing: 0.05rem;
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
    bottom: 70px;
    transition: all 0.2s;
    box-shadow: 1px 1px 20px 0px #00000090;
`;

const Podcast = ({name, image, studio}: Podcast) => {
    const [isHovered, setIsHovered] = useState(false);

    return(
    <PodcastContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <PodcastImage src={image} alt={name} />
        <Box sx={{ width: '100%', position: 'relative' }}>
            <PodcastName variant='body2'>{name}</PodcastName>
            <PodcastDescription variant='caption'>{studio}</PodcastDescription>
            <PlayButton isVisible={isHovered}>
                <PlayCircleFilledOutlinedIcon sx={{transform: 'scale(2)'}}/>
            </PlayButton>
        </Box>
    </PodcastContainer>
)}

const TopPodcasts = ({podcasts}: {podcasts: Podcast[]}) => {
    return(
        <Box sx={{padding: '1rem'}}>
            <Title variant='h6'>Podcasts originais do Spotify</Title>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                {podcasts.map((podcast) => <Podcast name={podcast.name} image={podcast.image} studio={podcast.studio} />)}
            </Box>
        </Box>
    )
}

export default TopPodcasts;