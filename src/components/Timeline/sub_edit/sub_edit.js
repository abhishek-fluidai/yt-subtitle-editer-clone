import * as React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
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
         color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
         
        }}
      >
      
        <MusicNoteIcon sx={{flexShrink:1, width:'140px' }}/>
        <Divider orientation="vertical" flexItem />
        
        
      </Box>
    </div>
  );
}
