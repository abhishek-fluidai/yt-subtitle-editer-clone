import * as React from 'react';
import './Mid.css'
import Player from './Player/Player'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import UploadIcon from '@mui/icons-material/Upload';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import TranslateIcon from '@mui/icons-material/Translate';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function VerticalDividers() {
    
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          minHeight:'450px',
          boxSizing:'border-box',
          padding:'5px',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          flex:1,
          borderRadius: 1,
          '& svg': {
            m: 0.5,
          },
         
        }}
      >


        <Grid item  sx={{backgroundColor: '#292829',flex:1}}>
            
         <Typography variant="text" component="div" sx={{textAlign: 'left', marginLeft: '25px',  opacity: 0.6, marginTop: '22px' }}>
           Select how you want to add captions
          </Typography>
            <List de sx={{padding: '15px 35px'}}>
            <ListItem className='opt'
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" >
                      <HelpOutlineIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                      <UploadIcon />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Upload file"
                    
                  />
                </ListItem>

            <Divider />
            <ListItem className='opt'
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <HelpOutlineIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                      <AutoAwesomeIcon />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Auto-sync"
                    
                  />
                </ListItem>

            <Divider />

            <ListItem className='opt'
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <HelpOutlineIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                      <KeyboardIcon />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Type manually"
                    
                  />
                </ListItem>

            <Divider />

            <ListItem className='opt'
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <HelpOutlineIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                      <TranslateIcon />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Auto-translate"
                    
                  />
                </ListItem>

            <Divider />
                               
            </List>
        </Grid>
  

       
        <Divider orientation="vertical" flexItem />
            <Box sx={{flex:1,mr:-0.7}}>
                <Player style={{flex:1}}/>
                <Box
               sx={{
                display: 'flex',
                flexDirection: 'column',
                margin: '9px 20px',
                height: '10px',       
                borderRadius: 1,
                color: 'text.parimary',
                boxSizing: 'border-box',
              
                '& svg': {
                  m: 1.5,
                },
              
              }}
            >
            <Typography variant="subtitle2" component="h2">
              Enter subtitles faster with <a href='#' style={{color: '#90caf9'}}>keyboard shortcuts</a>
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Pause while typing" />
           </FormGroup>                
            </Box>
            </Box>
      </Box>
    </div>
  );
 }
