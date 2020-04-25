import React, { memo } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit">AJ</Link> {new Date().getFullYear()}
    {'.'}
  </Typography>
);

export default memo(Copyright, () => true);
