import { Box, Card, CardMedia, Typography } from "@mui/material"

import { SkillsCardStyles, TypographyMiniCards } from "../GlobalStyles";

interface skillsContentProps {
  title: string;
  image: string;
}

const skillsContent:Array<skillsContentProps> = [
  { title: 'Javascript', image: 'jsImage' }
]

const renderCards = (
  skillsContent.map( x => (
    <Box key={ x.title }>
      <Card sx={{ borderRadius: SkillsCardStyles, mr: 3, mb: 3 }}>
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
        justifyContent: 'center', width: 1000 
      }}
    >
      { renderCards }
    </Box>
  )
}

export default FocusSkills