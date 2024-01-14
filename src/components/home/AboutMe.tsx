import { Box, Typography } from '@mui/material';

import CodeIcon from '@mui/icons-material/Code';

const AboutMe = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.4 }}>
        <CodeIcon fontSize='inherit' sx={{ fontSize: { md: '4rem', sm: '2.9rem', xs: '1.8rem' }, mr: 1 }}/>

        <Typography sx={{ fontSize: { md: '4rem', sm: '2.9rem', xs: '1.8rem' } }} variant='h2'>Emiliano Caballero</Typography>
      </Box>

      <Typography sx={{ width: { sm: 480, xs: 310 }, fontSize: { md: '1.4rem', sm: '1.2rem', xs: '0.9rem' }, ml: 2 }} variant='body1'>
        No soy un robot, soy un desarrollador Fullstack apasionado por la programación.
      </Typography>
    </Box>
  )
}

export default AboutMe;