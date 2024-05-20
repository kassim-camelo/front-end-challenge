import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

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

const Podcast = ({name, image, studio}: Podcast) => (
    <PodcastContainer>
        <PodcastImage src={image} alt={name} />
        <Box sx={{ width: '100%' }}>
            <PodcastName variant='body2'>{name}</PodcastName>
            <PodcastDescription variant='caption'>{studio}</PodcastDescription>
        </Box>
    </PodcastContainer>
)

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