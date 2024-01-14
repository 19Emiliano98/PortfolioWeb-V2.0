import { Box } from '@mui/material'

import LinkBar from './components/appBar/LinkBar.tsx';
import HomeSection from './components/home/HomeSection.tsx';
import ProjectsSection from './components/projects/ProjectsSection.tsx';
import Contact from './components/contact/Contact.tsx';

import { ThemeColors } from './components/GlobalStyles.ts';

function App() {
  return (
    <Box sx={{ backgroundColor: ThemeColors.backgroundColor, minHeight: '100vh', m: -1, color: ThemeColors.fontColor }}>
      <LinkBar />
      
      <HomeSection />
      
      <ProjectsSection />
      
      <Box sx={{ position: 'fixed', top: '44%', left: '2%' }}>
        <Contact />
      </Box>
    </Box>
  )
}

export default App
