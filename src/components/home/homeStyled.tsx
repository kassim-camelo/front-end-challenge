import styled from "@emotion/styled";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, ButtonBase, List, ListItem, Typography } from "@mui/material";

export const NavbarContainerLeft = styled(Box)`
    width: 50%;
    height: 50px;
    align-items: center;
    display: flex;
    justify-content: left;
    padding-left: 1.25rem;
    margin: 0.25rem;
`;

export const NavbarContainerRight = styled(Box)`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
`;

export const SubscribeText = styled(Typography)`
    color: #a7a7a7;
    font-size: 1rem;
`;

export const LoginButton = styled(ButtonBase)`
    border-radius: 4rem;
    background-color: white;
    color: black;
    padding: 1.5rem 1.75rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    max-height: 50px;
    font-weight: 700;
    font-size: 1rem;
    &:hover{
        transform: scale(1.05);
    }
`;

export const HomeContainer = styled(Box)`
    max-width: 1470px;
    background-color: #121212;
    border-radius: 1rem;
    color: white;
    max-height: 905px;
    overflow-x: hidden;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 12px;
    }
    ::-webkit-scrollbar-track {
        background: #1e1e1e00;
    }
    ::-webkit-scrollbar-thumb {
        background: #555;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export const HomeNavbar = styled(Box)`
    width: 100%;
    background: linear-gradient(180deg, #101010, #111111 50%);
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    padding: 0.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FooterList = styled(List)`
    margin-right: 5rem;
    margin-bottom: 25px;
    min-width: 200px;
`;

export const ListTitle = styled(Typography)`
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    padding-bottom: 0.5rem;
`;

export const Item = styled(ListItem)`
    color: #a7a7a7;
    padding: 0;
    padding-bottom: 0.5rem !important;
    padding-left: 0.1rem !important;
    &:hover{
        color: white;
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const Facebook = styled(FacebookOutlinedIcon)`
    height: 40px;
    width: 40px;
    padding: 0.75rem;
    border-radius: 100%;
    margin-right: 0.75rem;
    background-color: #292929;
    &:hover{
        background-color: #808080;
        cursor: pointer;
    }
`;

export const Instagram = styled(InstagramIcon)`
    height: 40px;
    width: 40px;
    padding: 0.75rem;
    border-radius: 100%;
    margin-right: 0.75rem;
    background-color: #292929;
    &:hover{
        background-color: #808080;
        cursor: pointer;
    }
`;

export const Twitter = styled(TwitterIcon)`
    height: 40px;
    width: 40px;
    padding: 0.75rem;
    border-radius: 100%;
    margin-right: 0.75rem;
    background-color: #292929;
    &:hover{
        background-color: #808080;
        cursor: pointer;
    }
`;