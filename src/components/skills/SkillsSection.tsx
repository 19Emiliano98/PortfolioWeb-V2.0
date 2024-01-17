import { Box, Typography } from "@mui/material"
import BookIcon from '@mui/icons-material/Book';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

import SkillsCard from "./SkillsCard";
import FocusSkills from "./FocusSkills";
import { TypographyH2, TitularIcons } from "../GlobalStyles";

const SkillsSection = () => {
  return (
    <Box id='skills'>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { sm: 10, xs: 0 } }}>
        <BookIcon sx={{ fontSize: TitularIcons.fontSize, mr: 2 }} fontSize="inherit"/>
        <Typography sx={{ fontSize: TypographyH2.fontSize }} variant="h2">Habilidades</Typography>
      </Box>

      <Box sx={{ mt: 5 }}>
        <SkillsCard />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 10 }}>
        <AutoStoriesIcon sx={{ fontSize: TitularIcons.fontSize, mr: 2 }} fontSize="inherit"/>
        <Typography sx={{ fontSize: TypographyH2.fontSize }} variant="h2">En Aprendizaje</Typography>
      </Box>

      <Box sx={{ mt: 5 }}>
        <FocusSkills />
      </Box>
    </Box>
  )
}

export default SkillsSection