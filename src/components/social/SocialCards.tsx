import { Box, Typography, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { SocialButtonStyles } from "../GlobalStyles";

const SocialCards = () => {
  return (
    <Box>
      <Button
        href="https://github.com/19Emiliano98"
        sx={{ borderRadius: SocialButtonStyles, mr: 3 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', color: '#F7F7EB' }}>
          <GitHubIcon sx={{ fontSize: '1.7rem', mr: 1 }} fontSize="inherit"/>
          
          <Typography sx={{ fontSize: '1.3rem' }} variant="body2">Github</Typography>
        </Box>
      </Button>

      <Button
        href="https://www.linkedin.com/in/emiliano-caballero98"
        sx={{ borderRadius: SocialButtonStyles }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', color: '#F7F7EB' }}>
          <LinkedInIcon sx={{ fontSize: '1.7rem', mr: 1 }} fontSize="inherit"/>
          
          <Typography sx={{ fontSize: '1.3rem' }} variant="body2">Linkedin</Typography>
        </Box>
      </Button>
    </Box>
  )
}

export default SocialCards