import { Box, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

import { TypographyBody, TitularIcons } from '../GlobalStyles';

const AboutMe = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.4 }}>
        <CodeIcon fontSize='inherit' sx={{ fontSize: TitularIcons.fontSize, mr: 1 }}/>

        <Typography sx={{ fontSize: { sm: '4rem', xs: '1.9rem' } }} variant='h1'>Emiliano Caballero</Typography>
      </Box>

      <Typography sx={{ width: { sm: 560, xs: 310 }, fontSize: TypographyBody.fontSize }} variant='body1'>
        No soy un robot, soy un desarrollador Fullstack apasionado por la programación.
      </Typography>
    </Box>
  )
}

export default AboutMe;