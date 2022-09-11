import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import FeedbackIcon from '@mui/icons-material/Feedback';
import CloseIcon from '@mui/icons-material/Close';
import { Divider } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
   
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <SubtitlesIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{mr:'auto'}}>
           English (India)
          </Typography>
          <Divider/>
          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            
          >
            <FeedbackIcon />
          </IconButton>

          <Button color="primary" sx={{mr:1}}>SAVE DRAFT</Button>
          <Button variant="contained" sx={{fontWeight:'bold'}}>PUBLISH</Button>

 
          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 0 }}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
    </Box>
  );
}
