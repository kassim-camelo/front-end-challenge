import styled from "@emotion/styled";
import { Box, ButtonBase, Typography } from "@mui/material";

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
    background-color: #1e1e1e;
    border-radius: 1rem;
    color: white;
    max-height: 905px;
    overflow-x: hidden;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 12px;
    }
    ::-webkit-scrollbar-track {
        background: #1e1e1e;
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