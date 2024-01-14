import { Box, Avatar } from '@mui/material';

import AboutMe from './AboutMe';

import Image from '../../img/imagenPerfil.jpeg';

const HomeSection = () => {
  return (
      <Box sx={{display: 'flex', justifyContent: 'center', ml: { md: 0, sm: 4, xs: 4.5 } }}>
        <Box sx={{ mt: 22 }}>
          <Avatar 
            sx={{
              width: { md: '80px', sm: '70px', xs: '40px' },
              height: { md: '80px', sm: '70px', xs: '40px' },
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', mb: 1.6
            }}
            alt="Imagen Perfil" 
            src={Image}
          />

          <AboutMe />
        </Box>
      </Box>
  )
}

export default HomeSection;