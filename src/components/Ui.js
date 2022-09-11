import * as React from 'react';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import Header from './Header/Header'
import Mid from './Mid_part/Mid'
import Line from './Timeline/Visual/Linecontainer'
import Sub from './Timeline/sub_edit/sub_edit'
import Utils from './Timeline/Utils/Utils'


const style = {
  bgcolor: '#292829',
  borderRadius: '5px'
};

export default function ListDividers() {
  return (
    <List sx={style} >
      <Header />      
      <Divider />

      <Mid />
      <Divider />

      <Utils />
      <Divider />
      
      <Line />
      <Divider />

      <Sub />
      <Divider />
                
    </List>
  );
}
