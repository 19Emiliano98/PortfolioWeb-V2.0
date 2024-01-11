import { Box, Avatar } from '@mui/material';

import AboutMe from './AboutMe';
import SkillsCards from './SkillsCards';

import Image from '../../img/imagenPerfil.jpeg';

const HomeSection = () => {
  return (
    <Box>
      <Box sx={{display: 'flex', justifyContent: 'center', color: '#B7C0DA'}}>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 17 }}>
          <Avatar 
            sx={{
              width: { xl: '200px', md: '130px', xs: '105px' },
              height: { xl: '200px', md: '130px', xs: '105px' },
              border: '2px solid #171624',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
              mr: 5
            }}
            alt="Imagen Perfil" 
            src={Image} 
          />

          <AboutMe />
        </Box>
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 11 }}>
        <SkillsCards />
      </Box>
    </Box>
  )
}

export default HomeSection;