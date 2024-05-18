import styled from "@emotion/styled";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, List, ListItem, Typography } from "@mui/material";

export const MainBox = styled(Box)`
    background-color: #121212;
    height: 200px;
    border-radius: 1rem;
    margin-top: 5px;
`;

export const Logo = styled.img`
    width: 100px;
    margin-top: 1.5rem;
    margin-left: 1.5rem;
`;

export const ListStyled = styled(List)`
    margin-left: 0.5rem;
`;

export const ListItemStyled = styled(ListItem)`
    color: #b3b3b3;
    margin-top: 0.5rem;
    transition: 0.3s;
    &:hover{
        color: white;
        cursor: pointer;
    }
`;

export const HomeIcon = styled(HomeOutlinedIcon)<{isTrue?: boolean}>`
    font-size: 2rem;
    color: ${props => props.isTrue ? 'white' : ''};
`;

export const SearchIcon = styled(SearchOutlinedIcon)<{isTrue?: boolean}>`
    font-size: 2rem;
    color: ${props => props.isTrue ? 'white' : ''};
`;

export const Text = styled(Typography)<{isTrue?: boolean}>`
    margin-left: 1.25rem;
    font-weight: 500;
    font-size: large;
    color: ${props => props.isTrue ? 'white' : ''};
`;