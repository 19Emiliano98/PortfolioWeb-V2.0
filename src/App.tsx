import { Box } from '@mui/material'

import LinkBar from './components/appBar/LinkBar.tsx';
import HomeSection from './components/home/HomeSection.tsx';
import SocialSection from './components/social/SocialSection.tsx';
import ProjectsSection from './components/projects/ProjectsSection.tsx';

import { ThemeColors } from './components/GlobalStyles.ts';

function App() {
  return (
    <Box sx={{ backgroundColor: ThemeColors.backgroundColor, minHeight: '100vh', m: -1, color: ThemeColors.fontColor }}>
      <LinkBar />
      
      <HomeSection />

      <SocialSection />
      
      <ProjectsSection />
    </Box>
  )
}

export default App
