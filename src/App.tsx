import { Box, CssBaseline } from "@mui/material"

import Banner from "./components/banner/banner"
import Home from "./components/home/home"
import Library from "./components/library/library"
import Sidebar from "./components/sidebar/sidebar"

function App() {
  return (
    <Box sx={{ bgcolor: 'black', maxHeight: '100vh', minHeight: '100vh' }}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Sidebar />
          <Library />
        </Box>
        <Box>
          <Home />
        </Box>
      </Box>
      <Banner />
    </Box>
  )
}

export default App
