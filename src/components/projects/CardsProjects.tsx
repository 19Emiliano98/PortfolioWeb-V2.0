import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@mui/material';

import { ThemeColors, TypographyBody, TypographyH5, ButtonStyles } from '../GlobalStyles';
import LaunchIcon from '@mui/icons-material/Launch';
import LinkIcon from '@mui/icons-material/Link';

import desus1 from '../../img/projects/desus1.jpeg';
import imageUploader from '../../img/projects/ImageUploaderChallengue/UploadImage.png';

import { 
  tsImage, nextImage, reactImage, nodeImage, materialImage 
} 
from '../../components/ImagesLoader';
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
  urlWeb: string;
  urlCode: string;
  lenguages: Array<testing>;
}

const CardsData:CardsDataProps[] = [
  {
    title: "Desusweb",
    paraph: "Landing page creada para una startup, en este trabajo hice colaboracion en la parte Front-end junto a un equipo de diseñadores UX/UI y desarrollador Backend",
    protected: false,
    image: desus1,
    urlWeb: 'https://desusweb.vercel.app',
    urlCode: 'https://github.com/19Emiliano98/DesuswebNext.git',
    lenguages: [
      { title: 'Typescript', image: tsImage },
      { title: 'Next.js', image: nextImage },
      { title: 'Material-UI', image: materialImage }
    ]
  },
  {
    title: "Image Uploader",
    paraph: "Pagina web de practica donde podemos almacenar imagenes en la nube.",
    protected: false,
    image: imageUploader,
    urlWeb: 'https://image-challengue-uploader.netlify.app/',
    urlCode: 'https://github.com/19Emiliano98/ImageUploader-Backend.git',
    lenguages: [
      { title: 'Typescript', image: tsImage },
      { title: 'React.js', image: reactImage },
      { title: 'Material-UI', image: materialImage },
      { title: 'Node.js', image: nodeImage }
    ]
  }
]

const cardRender = (
  CardsData.map( x => (
    <Box 
      key={ x.title } 
      sx={{ 
        display: { sm: 'flex', xs: 'inline' }, 
        justifyContent: 'center', alignItems: 'center',
        maxWidth: 710, mb: 5 
      }}
    >
      <CardMedia
        sx={{ 
          width: { sm: 440, xs: 310 }, height: { sm: 250, xs: 200 }, 
          objectFit: 'cover', borderRadius: '15px' 
        }}
        image= { x.image }
        title= { x.title }
      />
      <Card 
        sx={{ 
          display: 'flex', 
          width: { sm: 260, xs: 310 }, height: 290,
          backgroundColor: ThemeColors.backgroundColor,
          boxShadow: '0px 0px 0px 0px'
        }}
      >
        <Box sx={{ height: 290 }}>
          <CardContent sx={{ width: { sm: 215, xs: 260 }, ml: 1 }}>
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
              href={ x.urlWeb }
              target="_blank"
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
              href={ x.urlCode }
              target="_blank"
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