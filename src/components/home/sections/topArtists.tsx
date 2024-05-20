import styled from "@emotion/styled";
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
`;

const ArtistContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
`;

const Artist = ({name, image}: Artist) => (
    <ArtistContainer>
        <ArtistImage src={image} alt={name} />
        <Box sx={{ width: '100%' }}>
            <Typography variant='body2'>{name}</Typography>
            <Typography variant='caption'>Artista</Typography>
        </Box>
    </ArtistContainer>
)

const TopArtists = ({artists}: {artists: Artist[]}) => {
    return(
        <>
            <Typography variant='h6'>Artistas Populares</Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                {artists.map((artist) => <Artist name={artist.name} image={artist.image} />)}
            </Box>
        </>
    )
}
export default TopArtists;