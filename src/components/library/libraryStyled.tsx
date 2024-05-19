import styled from "@emotion/styled";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import { styled as muiStyled } from "@mui/material";
import { Box, ButtonBase, Typography } from "@mui/material";

export const LibraryHeader = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const LibraryCard = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #242424;
    padding: 1rem;
    margin: 1.75rem 0.75rem;
    border-radius: 0.5rem;
`;

export const TextContainer = styled.div`
    margin-bottom: 1rem;
`;

export const CardText = styled(Typography)`
    color: white;
    margin-bottom: 0.5rem;
`;

export const PlaylistIcon = styled(PlaylistAddCheckOutlinedIcon)`
    font-size: 2.75rem;
    color: #b3b3b3;
    margin-right: 0.75rem;
`;

export const PlusIcon = styled(AddOutlinedIcon)`
    font-size: 2.5rem;
    margin-right: 1.5rem;
    margin-top: 1rem;
    color: #b3b3b3;
    border-radius: 4rem;
    transition: 0.2s;
    &:hover{
        background-color: #41414190;
    }
`;

export const LibaryButton = styled(ButtonBase)`
    color: black;
    display: flex;
    font-size: 0.75rem;
    padding: 0.5rem;
    border-radius: 1rem;
    background-color: white;
    font-weight: 700;
    &:hover{
        transform: scale(1.05);
        background-color: #f5f5f5;
    }
`;

export const LibraryFooter = styled(Box)`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-left: 1.5rem;
`;

export const LibraryFooterText = muiStyled(Typography)({
    color: '#b3b3b3',
    textDecoration: 'none',
    marginRight: '45px',
    marginBottom: '0.75rem'
});

export const LanguageButton = styled(ButtonBase)`
    margin-left: 1.5rem;
    border: 1px solid #b3b3b3;
    color: white;
    border-radius: 1rem;
    padding: 0.3rem;
    margin-top: 25px;
    width: 175px;
    font-weight: 700;
    &:hover{
        border: 1px solid white;
        transform: scale(1.03);
    }
`;