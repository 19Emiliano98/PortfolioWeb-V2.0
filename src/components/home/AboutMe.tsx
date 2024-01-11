import { Box, Typography } from '@mui/material';

const AboutMe = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ ml: 0.8 }} variant='body1'>Hola! mi nombre es:</Typography>

      <Typography sx={{ mt: 0.9, fontSize: { md: '95px', sm: '68px', xs: '60px' } }} variant='h1'>Emiliano Caballero</Typography>

      <Typography sx={{ mt: 1, ml: 0.2, fontSize: { md: '60px', sm: '37px', xs: '22px' }}} variant='h2'>Soy desarrollador FullStack</Typography>

      <Typography sx={{ fontSize: { md: '17px', sm: '17px', xs: '15px' }, mt: 3, ml: 0.7, width: { md: 700, sm: 540, xs: 270 } }} variant='body2'>
          Me especializo en el desarrollo de diferentes tipos de paginas web en el Front-End 
        utilizando React.js así como tambíen he desarrollado API rest con Node.js y C#.
      </Typography>
    </Box>
  )
}

export default AboutMe;