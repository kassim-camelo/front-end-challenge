import { Box, Typography } from "@mui/material"

export interface Album {
    name: string,
    artist: string,
    image: string
}

const Album = ({name, image, artist}: Album) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={image} alt={name} />
        <Typography variant='body2'>{name}</Typography>
        <Typography variant='caption'>{artist}</Typography>
    </Box>
)

const TopAlbums = ({albums}: {albums: Album[]}) => {
    return(
        <>
            <Typography variant='h6'>Álbuns Populares</Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                {albums.map((album) => <Album name={album.name} image={album.image} artist={album.artist} />)}
            </Box>
        </>
    )
}

export default TopAlbums;