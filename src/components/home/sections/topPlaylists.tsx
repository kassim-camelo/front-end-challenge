import { Box, Typography } from "@mui/material"

export interface Playlist {
    name: string,
    image: string,
    description: string
}

const Playlist = ({name, image, description}: Playlist) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={image} alt={name} />
        <Typography variant='body2'>{name}</Typography>
        <Typography variant='caption'>{description}</Typography>
    </Box>
)

const TopPlaylists = ({playlists}: {playlists: Playlist[]}) => {
    return(
        <>
            <Typography variant='h6'>Playlists do Spotify</Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                {playlists.map((playlist) => <Playlist name={playlist.name} image={playlist.image} description={playlist.description} />)}
            </Box>
        </>
    )
}

export default TopPlaylists;