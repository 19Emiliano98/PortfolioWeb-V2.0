import { Box, Typography, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import doc from '../../docs/Emiliano Caballero - Fullstack.pdf';
import { SocialButtonStyles,  TypographyMiniCards } from "../GlobalStyles";

const SocialCards = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { sm: 'row', xs: 'column'}, alignItems: 'center' }}>
      <Button
        href="https://github.com/19Emiliano98"
        target="_blank"
        sx={{ 
          width: SocialButtonStyles.width,
          height: SocialButtonStyles.height,
          borderRadius: SocialButtonStyles,
          mr: { sm: 3, xs: 0 }, mb: { sm: 0, xs: 2.4 }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <GitHubIcon sx={{ fontSize: SocialButtonStyles.fontSize, mr: 1, color: '#F7F7EB' }} fontSize="inherit"/>
          
          <Typography sx={{ fontSize: TypographyMiniCards }} variant="body2">Github</Typography>
        </Box>
      </Button>

      <Button
        href="https://www.linkedin.com/in/emiliano-caballero98"
        target="_blank"
        sx={{ 
          width: SocialButtonStyles.width,
          height: SocialButtonStyles.height,
          borderRadius: SocialButtonStyles,
          mr: { sm: 3, xs: 0 }, mb: { sm: 0, xs: 2.4 }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LinkedInIcon sx={{ fontSize: SocialButtonStyles.fontSize, mr: 1, color: '#F7F7EB' }} fontSize="inherit"/>
          
          <Typography sx={{ fontSize: TypographyMiniCards  }} variant="body2">Linkedin</Typography>
        </Box>
      </Button>

      <Button
        href={doc}
        target="_blank"
        sx={{ 
          width: SocialButtonStyles.width,
          height: SocialButtonStyles.height,
          borderRadius: SocialButtonStyles 
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <PictureAsPdfIcon sx={{ fontSize: SocialButtonStyles.fontSize, mr: 1, color: '#F7F7EB' }} fontSize="inherit"/>
          
          <Typography sx={{ fontSize: TypographyMiniCards  }} variant="body2">Curriculum</Typography>
        </Box>
      </Button>
    </Box>
  )
}

export default SocialCards