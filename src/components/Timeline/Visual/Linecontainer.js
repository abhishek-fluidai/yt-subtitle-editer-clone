import * as React from 'react';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function VerticalDividers() {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '80px',       
          borderRadius: 1,
          color: 'text.primary',
          boxSizing: 'border-box',
          borderLeft: '6px solid #90CAF9',

          '& svg': {
            m: 1.5,
          },
         
        }}
      >
        <SubtitlesIcon sx={{flexShrink:1, width:'140px', }} color="primary"/>
        <Divider orientation="vertical" flexItem sx={{marginLeft: '-6px'}} />        
      </Box>
    </div>
  );
}
