import * as React from 'react';
import Button from '@mui/material/Button';

export default function MyApp() {
  return (
    <div>
      <Button variant="contained" onClick={() => { alert("Hello World !") }}>Hello World</Button>
    </div>
  );
}