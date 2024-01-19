import { Box, Card, CardMedia, Typography } from "@mui/material"

import { SkillsCardStyles, TypographyMiniCards } from "../GlobalStyles";
import { cSharpImage, netImage, reactNativeImage, nextImage } from "../ImagesLoader";

interface skillsContentProps {
  title: string;
  image: string;
}

const skillsContent:Array<skillsContentProps> = [
  { title: 'C #', image: cSharpImage },
  { title: '.Net Core', image: netImage },
  { title: 'React Native', image: reactNativeImage },
  { title: 'Next.Js', image: nextImage }
]

const renderCards = (
  skillsContent.map( x => (
    <Box key={ x.title }>
      <Card sx={{ borderRadius: SkillsCardStyles, mr: { sm: 3, xs: 0 }, mb: 3 }}>
        <CardMedia 
          sx={{ width: 35, height: 35, borderRadius: '5px', mr: 2 }}
          image= { x.image }
        />

        <Typography sx={{ fontSize: TypographyMiniCards }} variant="body1">{ x.title }</Typography>
      </Card>
    </Box>
  ))
)

const FocusSkills = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', flexWrap: 'wrap',
        justifyContent: 'center', maxWidth: { sm: 900, xs: 300 }, mx: 'auto'
      }}
    >
      { renderCards }
    </Box>
  )
}

export default FocusSkills