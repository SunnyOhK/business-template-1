import React from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';

function Header() {

  return (
    <div style={{
      display: 'flex',
      width: '100vw',
      backgroundColor: 'pink',
      justifyContent: 'end',
      alignItems: 'end'
    }}>
      <IconButton 
        aria-label='close video'
        sx={{ marginRight: '1.2em', color: 'white' }}>
        <ExpandLessIcon sx={{ fontSize: '40px' }} />
      </IconButton>
    </div>
  )
}

export default Header;