import { Box, Typography } from "@mui/material";

export interface Artist {
    name: string,
    image: string
}

const Artist = ({name, image}: Artist) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={image} alt={name} />
        <Typography variant='body2'>{name}</Typography>
        <Typography variant='caption'>Artista</Typography>
    </Box>
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