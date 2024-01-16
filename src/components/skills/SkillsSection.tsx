import { Box, Typography } from "@mui/material"
import BookIcon from '@mui/icons-material/Book';

import SkillsCard from "./SkillsCard";
import FocusSkills from "./FocusSkills";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const SkillsSection = () => {
  return (
    <Box id='skills'>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 10 }}>
        <BookIcon sx={{ fontSize: '2.4rem', mr: 2 }} fontSize="inherit"/>
        <Typography sx={{ fontSize: '3rem' }} variant="h2">Habilidades</Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
        <SkillsCard />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 10 }}>
        <AutoStoriesIcon sx={{ fontSize: '2.4rem', mr: 2 }} fontSize="inherit"/>
        <Typography sx={{ fontSize: '3rem' }} variant="h2">En Aprendizaje</Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
        <FocusSkills />
      </Box>
    </Box>
  )
}

export default SkillsSection