import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const HomeContainer = styled(Box)`
    min-width: 1300px;
    background-color: #1e1e1e;
    border: 1px solid red;
    border-radius: 1rem;
    color: white;
    min-height: 100%;
`;

export const HomeNavbar = styled(Box)`
    width: 100%;
    background: linear-gradient(180deg, #1a1a1a, #121212 50%);
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    padding: 0.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;