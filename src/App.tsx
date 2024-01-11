import { Box } from '@mui/material'

import LinkBar from './components/appBar/LinkBar.tsx';
import HomeSection from './components/home/HomeSection.tsx';
import Contact from './components/contact/Contact.tsx';

function App() {
  return (
    <Box sx={{ backgroundColor: '#171624', minHeight: '100vh', m: -1}}>
      <LinkBar />
      
      <HomeSection />
      
      <Box sx={{ position: 'fixed', top: '44%', left: '2%' }}>
        <Contact />
      </Box>
    </Box>
  )
}

export default App
