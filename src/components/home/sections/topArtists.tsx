import styled from "@emotion/styled";
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import { Box, Typography } from "@mui/material";

export interface Artist {
    name: string,
    image: string
}

const ArtistImage = styled.img`
    border-radius: 100%;
    height: 200px;
    width: 200px;
    margin: 0.5rem;
    object-fit: cover;
    box-shadow: 0px 0px 20px 0px #00000090;
    transform: scale(1.1);
`;

const ArtistContainer = styled(Box)`
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

const PlayButton = styled.div`
    display: flex;
    background-color: black;
    color: #1ed760;
    max-width: 25px;
    border-radius: 4rem;
    position: absolute;
    right: 25px;
    bottom: 70px;
`;

const Title = styled(Typography)`
    padding: 0.75rem 1rem;
    //margin-top: 1rem;
`;

const ArtistName = styled(Typography)`
    padding-top: 0.75rem;
    letter-spacing: 0.05rem;
`;

const ArtistCaption = styled(Typography)`
    padding-top: 0.5rem;
    letter-spacing: 0.05rem;
    color: #a7a7a7;
    font-weight: bold;
`;

const Artist = ({name, image}: Artist) => (
    <ArtistContainer>
        <ArtistImage src={image} alt={name} />
        <Box sx={{ width: '100%', position: 'relative' }}>
            <ArtistName variant='body2'>{name}</ArtistName>
            <ArtistCaption variant='caption'>Artista</ArtistCaption>
            <PlayButton>
                <PlayCircleFilledOutlinedIcon sx={{transform: 'scale(2)'}}/>
            </PlayButton>
        </Box>
    </ArtistContainer>
)

const TopArtists = ({artists}: {artists: Artist[]}) => {
    return(
        <Box sx={{padding: '1rem'}}>
            <Title variant='h5'><strong>Artistas populares</strong></Title>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                {artists.map((artist) => <Artist name={artist.name} image={artist.image} />)}
            </Box>
        </Box>
    )
}
export default TopArtists;