import { Box, Avatar } from '@mui/material';
import ContactPageIcon from '@mui/icons-material/ContactPage';

import AboutMe from './AboutMe';
import { ThemeColors } from '../GlobalStyles';
import Image from '../../img/imagenPerfil.jpeg';
import doc from '../../docs/Caballero Emiliano CV.pdf';

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

          <Box 
            component='a' 
            href={doc} 
            target='_blank'
            sx={{
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              position: 'fixed',
              width: 100, height: 100,
              backgroundColor: ThemeColors.fontColor,
              borderRadius: '50%',
              ml: 133, mt: -47
            }}
          >
            <ContactPageIcon 
              fontSize='inherit' 
              sx={{ 
                fontSize: '70px', 
                color: ThemeColors.backgroundColor 
              }}
            />
          </Box>
        </Box>
      </Box>
  )
}

export default HomeSection;