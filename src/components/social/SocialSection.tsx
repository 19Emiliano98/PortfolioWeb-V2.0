import { Box, Typography } from "@mui/material"

import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SocialCards from "./SocialCards";

const SocialSection = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ConnectWithoutContactIcon sx={{ fontSize: '2.4rem', mr: 1 }} fontSize="inherit"/>
        
        <Typography sx={{ fontSize: '3rem' }} variant="h2">Social</Typography>
      </Box>

      <Box sx={{ mt: 5 }}>
        <SocialCards />
      </Box>
    </Box>
  )
}

export default SocialSection