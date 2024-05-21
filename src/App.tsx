import { Box, CssBaseline, styled } from "@mui/material"

import Banner from "./components/banner/banner"
import Home from "./components/home/home"
import Library from "./components/library/library"
import Sidebar from "./components/sidebar/sidebar"

const StyledBox = styled(Box)`
  overflow: hidden;
  background-color: black;
  max-height: 100vh;
`

function App() {
  return (
      <StyledBox>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ maxWidth: '450px' }}>
            <Sidebar />
            <Library />
          </Box>
          <Box>
            <Home />
          </Box>
        </Box>
        <Banner />
      </StyledBox>
  )
}

export default App
