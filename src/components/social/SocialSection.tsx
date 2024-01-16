import { Box, Typography } from "@mui/material"
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

import SocialCards from "./SocialCards";
import { TypographyH2, TitularIcons } from "../GlobalStyles";

const SocialSection = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: { sm: 10, xs: 8 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ConnectWithoutContactIcon sx={{ fontSize: TitularIcons.fontSize, mr: 1 }} fontSize="inherit"/>
        
        <Typography sx={{ fontSize: TypographyH2.fontSize }} variant="h2">Social</Typography>
      </Box>

      <Box sx={{ mt: 5 }}>
        <SocialCards />
      </Box>
    </Box>
  )
}

export default SocialSection