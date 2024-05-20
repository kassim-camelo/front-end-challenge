import { Box, Typography } from "@mui/material";

export interface Podcast {
    name: string,
    image: string,
    studio: string
}

const Podcast = ({name, image, studio}: Podcast) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={image} alt={name} />
        <Typography variant='body2'>{name}</Typography>
        <Typography variant='caption'>{studio}</Typography>
    </Box>
)

const TopPodcasts = ({podcasts}: {podcasts: Podcast[]}) => {
    return(
        <>
            <Typography variant='h6'>Podcasts originais do Spotify</Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                {podcasts.map((podcast) => <Podcast name={podcast.name} image={podcast.image} studio={podcast.studio} />)}
            </Box>
        </>
    )
}

export default TopPodcasts;