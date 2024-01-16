import { Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

import { TypographyH2, TitularIcons } from '../GlobalStyles';
import SendMail from './SendMail';

const ContactSection = () => {
  return (
    <Box id='contact'>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 10 }}>
        <EmailIcon sx={{ fontSize: TitularIcons.fontSize, mr: 2 }} fontSize="inherit"/>
        <Typography sx={{ fontSize: TypographyH2.fontSize }} variant="h2">Contacto</Typography>
      </Box>

      <Box>
        <SendMail />
      </Box>
    </Box>
  )
}

export default ContactSection