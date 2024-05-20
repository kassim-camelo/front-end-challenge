import { Box, Typography } from "@mui/material";

export interface Radio {
    name: string,
    subtitle: string,
    image: string
}

const Radio = ({name, image, subtitle}: Radio) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={image} alt={name} />
        <Typography variant='body2'>{name}</Typography>
        <Typography variant='caption'>{subtitle}</Typography>
    </Box>
)

const TopRadios = ({radios}: {radios: Radio[]}) => {
    return(
        <>
            <Typography variant='h6'>Estações de rádio Populares</Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                {radios.map((radio) => <Radio name={radio.name} image={radio.image} subtitle={radio.subtitle} />)}
            </Box>
        </>
    )
}

export default TopRadios;