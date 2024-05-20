import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material"

export interface Playlist {
    name: string,
    image: string,
    description: string
}

const PlaylistImage = styled.img`
    border-radius: 5px;
    height: 200px;
    width: 200px;
    margin: 0.5rem;
    object-fit: cover;
    box-shadow: 0px 0px 20px 0px #00000090;
    transform: scale(1.1);
`;

const PlaylistContainer = styled(Box)`
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

const PlaylistName = styled(Typography)`
    padding-top: 0.75rem;
    letter-spacing: 0.05rem;
`;

const PlaylistDescription = styled(Typography)`
    padding-top: 0.5rem;
    letter-spacing: 0.05rem;
    color: #a7a7a7;
    font-weight: bold;
`;

const Playlist = ({name, image, description}: Playlist) =>{
    const filteredDesc = description.length > 30 ? description.substring(0, 30) + "..." : description;
    return (
    <PlaylistContainer>
        <PlaylistImage src={image} alt={name} />
        <Box sx={{ width: '100%' }}>
            <PlaylistName variant='body2'>{name}</PlaylistName>
            <PlaylistDescription variant='caption'>{filteredDesc}</PlaylistDescription>
        </Box>
    </PlaylistContainer>
)}

const TopPlaylists = ({playlists}: {playlists: Playlist[]}) => {
    return(
        <Box sx={{padding: '1rem'}}>
            <Title variant='h5'>Playlists do Spotify</Title>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                {playlists.map((playlist) => <Playlist name={playlist.name} image={playlist.image} description={playlist.description} />)}
            </Box>
        </Box>
    )
}

export default TopPlaylists;