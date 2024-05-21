import styled from "@emotion/styled";
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import { Box, Typography } from "@mui/material"
import { useState } from "react";

export interface Album {
    name: string,
    artist: string,
    image: string
}

const AlbumContainer = styled(Box)`
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

const AlbumImage = styled.img`
    border-radius: 5px;
    height: 200px;
    width: 200px;
    margin: 0.5rem;
    object-fit: cover;
    box-shadow: 0px 0px 20px 0px #00000090;
    transform: scale(1.1);
`;

const AlbumArtist = styled(Typography)`
    padding-top: 0.5rem;
    letter-spacing: 0.05rem;
    color: #a7a7a7;
    font-weight: bold;
`;

const AlbumName = styled(Typography)`
    padding-top: 0.75rem;
    letter-spacing: 0.05rem;
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

const Album = ({name, image, artist}: Album) => {
    const [isHovered, setIsHovered] = useState(false);
    const filteredName = name.length > 20 ? name.substring(0, 20) + "..." : name;
    return (
    <AlbumContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <AlbumImage src={image} alt={name} />
        <Box sx={{ width: '100%', position: 'relative' }}>
            <AlbumName variant='body2'>{filteredName}</AlbumName>
            <AlbumArtist variant='caption'>{artist}</AlbumArtist>
            <PlayButton isVisible={isHovered}>
                <PlayCircleFilledOutlinedIcon sx={{transform: 'scale(2)'}}/>
            </PlayButton>
        </Box>
    </AlbumContainer>
)}

const TopAlbums = ({albums}: {albums: Album[]}) => {
    return(
        <Box sx={{padding: '1rem' }}>
            <Title variant='h5'>Álbuns populares</Title>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {albums.map((album) => <Album name={album.name} image={album.image} artist={album.artist} />)}
            </Box>
        </Box>
    )
}

export default TopAlbums;