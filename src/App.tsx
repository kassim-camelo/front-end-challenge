import { CssBaseline } from "@mui/material"

import Library from "./components/library/library"
import Sidebar from "./components/sidebar/sidebar"

function App() {
  return (
    <>
      <CssBaseline />
      <Sidebar />
      <Library />
    </>
  )
}

export default App
