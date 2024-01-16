import { Box, Typography } from "@mui/material"
import WorkIcon from '@mui/icons-material/Work';

import { TitularIcons, TypographyH2 } from "../GlobalStyles";
import CardsProjects from "./CardsProjects";

const ProjectsSection = () => {
  return (
    <Box id='projects'>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 10 }}>
        <WorkIcon sx={{ fontSize: TitularIcons.fontSize, mr: 2 }} fontSize="inherit"/>
        <Typography sx={{ fontSize: TypographyH2.fontSize }} variant="h2">Proyectos</Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 7 }}>
        <CardsProjects />
      </Box>
    </Box>
  )
}

export default ProjectsSection