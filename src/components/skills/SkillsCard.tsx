import { Box, Card, CardMedia, Typography } from "@mui/material"

import { 
  jsImage, tsImage, reactImage, nextImage, materialImage,
  boostrapImage, nodeImage, mongoImage, sqlImage
} from "../ImagesLoader";
import { SkillsCardStyles, TypographyMiniCards } from "../GlobalStyles";

interface skillsContentProps {
  title: string;
  image: string;
}

const skillsContent:Array<skillsContentProps> = [
  { title: 'Javascript', image: jsImage },
  { title: 'Typescript', image: tsImage },
  { title: 'React.js', image: reactImage },
  { title: 'Next.js', image: nextImage },
  { title: 'Material UI', image: materialImage },
  { title: 'Boostrap', image: boostrapImage },
  { title: 'Node.JS', image: nodeImage },
  { title: 'MongoDB', image: mongoImage },
  { title: 'MySQL', image: sqlImage }
]

const renderCards = (
  skillsContent.map( x => (
    <Box key={ x.title }>
      <Card 
        sx={{ 
          borderRadius: SkillsCardStyles,
          mr: { sm: 3, xs: 0 }, mb: 3 
        }}
      >
        <CardMedia 
          sx={{ 
            width: 35, height: 35, 
            borderRadius: '5px', mr: 2,
            backgroundColor: 'white'
          }}
          image= { x.image }
        />

        <Typography sx={{ fontSize: TypographyMiniCards }} variant="body1">{ x.title }</Typography>
      </Card>
    </Box>
  ))
)

const SkillsCard = () => {
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

export default SkillsCard