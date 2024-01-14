import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@mui/material';

import { ThemeColors, TypographyBody, TypographyH5, ButtonStyles } from '../GlobalStyles';
import LaunchIcon from '@mui/icons-material/Launch';
import desus1 from '../../img/projects/desus1.png';

interface CardsDataProps {
  title: string;
  paraph: string;
  protected: boolean;
  image: string;
  url: string;
}

const CardsData:CardsDataProps[] = [
  {
    title: "Desusweb",
    paraph: "Pagina web creada para pequeña empresa desarrolladora de software, código oculto por cuestiones de privacidad del cliente.",
    protected: true,
    image: desus1,
    url: 'https://desusweb-19emiliano98.netlify.app/inicio'
  }
]

const cardRender = (
  CardsData.map( x => (
    <>
      <CardMedia
        sx={{ width: 1300, height: 300, objectFit: 'contain', borderRadius: '15px', }}
        image= { x.image }
        title= { x.title }
      />
      <Card 
        sx={{ 
          display: 'flex', 
          width: 720, height: 300,
          backgroundColor: ThemeColors.backgroundColor,
          boxShadow: '0px 0px 0px 0px'
        }}
      >
        <Box sx={{ height: 270, my: 'auto' }}>
          <CardContent sx={{ width: 215, ml: 1}}>
            <Typography sx={{ color: TypographyH5 }} gutterBottom variant="h5" component="div">
              { x.title }
            </Typography>
            <Typography sx={{ color: TypographyBody }} variant="body2">
              { x.paraph }
            </Typography>
          </CardContent>
          <CardActions sx={{ ml: 2 }}>
            <Button 
              size="small" 
              variant="contained"
              href={ x.url }
              sx={{ 
                textTransform: 'none', 
                backgroundColor: ButtonStyles
              }}
            >
              Live
              <LaunchIcon fontSize='medium' sx={{ ml: 0.4 }}/>
            </Button>
            {/* <Button size="small">Code</Button> */}
          </CardActions>
        </Box>
      </Card>
    </>
  ))
)

const CardsProjects = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: 750 }}>
      { cardRender }
    </Box>
  )
}

export default CardsProjects