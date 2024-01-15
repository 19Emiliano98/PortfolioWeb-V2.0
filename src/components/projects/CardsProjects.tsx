import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@mui/material';

import { ThemeColors, TypographyBody, TypographyH5, ButtonStyles } from '../GlobalStyles';
import LaunchIcon from '@mui/icons-material/Launch';
import LinkIcon from '@mui/icons-material/Link';
import desus1 from '../../img/projects/desus1.png';
import imageUploader from '../../img/projects/ImageUploaderChallengue/UploadImage.png';
import jsImage from '../../img/lenguages/jsLogo.png';
import tsImage from '../../img/lenguages/tsLogo.png';
import nodeImage from '../../img/lenguages/Backend/nodejsLogo.jpg';
import materialImage from '../../img/lenguages/Frontend/materialLogo.png';
import Tags from './Tags';

interface testing {
  title: string;
  image: string;
}
interface CardsDataProps {
  title: string;
  paraph: string;
  protected: boolean;
  image: string;
  url: string;
  lenguages: Array<testing>;
}

const CardsData:CardsDataProps[] = [
  {
    title: "Desusweb",
    paraph: "Pagina web creada para pequeña empresa desarrolladora de software, código oculto por cuestiones de privacidad del cliente.",
    protected: true,
    image: desus1,
    url: 'https://desusweb-19emiliano98.netlify.app/inicio',
    lenguages: [
      { title: 'Javascript', image: jsImage },
      { title: 'Material-UI', image: materialImage }
    ]
  },
  {
    title: "Image Uploader",
    paraph: "Pagina web de practica donde podemos almacenar imagenes en la nube.",
    protected: false,
    image: imageUploader,
    url: 'https://image-challengue-uploader.netlify.app/',
    lenguages: [
      { title: 'Typescript', image: tsImage },
      { title: 'Node.js', image: nodeImage },
      { title: 'Material-UI', image: materialImage }

    ]
  }
]

const cardRender = (
  CardsData.map( x => (
    <Box key={ x.title } sx={{ display: 'flex', justifyContent: 'center', width: 750, mb: 5 }}>
      <CardMedia
        sx={{ width: 405, height: 290, objectFit: 'cover', borderRadius: '15px' }}
        image= { x.image }
        title= { x.title }
      />
      <Card 
        sx={{ 
          display: 'flex', 
          width: 260, height: 300,
          backgroundColor: ThemeColors.backgroundColor,
          boxShadow: '0px 0px 0px 0px'
        }}
      >
        <Box sx={{ height: 290 }}>
          <CardContent sx={{ width: 215, ml: 1}}>
            <Typography sx={{ color: TypographyH5 }} gutterBottom variant="h5" component="div">
              { x.title }
            </Typography>
            <Typography sx={{ color: TypographyBody }} variant="body2">
              { x.paraph }
            </Typography>

            <Tags param={ x.lenguages }/>
          </CardContent>
          <CardActions sx={{ ml: 2, mt: -1}}>
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
            <Button
              size="small" 
              variant="contained"
              href={ x.url }
              disabled={ x.protected ? true : false}
              sx={{ 
                textTransform: 'none', 
                backgroundColor: ButtonStyles
              }}
            >
              Code
              <LinkIcon fontSize='medium' sx={{ ml: 0.4 }}/>
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Box>
  ))
)

const CardsProjects = () => {
  return (
    <>
      { cardRender }
    </>
  )
}

export default CardsProjects