import { Box, Avatar } from '@mui/material';

import AboutMe from './AboutMe';

import Image from '../../img/imagenPerfil.jpeg';

const HomeSection = () => {
  return (
      <Box sx={{display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ mt: { sm: 22, xs: 17 }, ml: { sm: 0, xs: 0.5 } }}>
          <Avatar 
            sx={{
              width: { sm: '70px', xs: '60px' },
              height: { sm: '70px', xs: '60px' },
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