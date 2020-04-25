import React, { memo } from 'react';
import './User.css';

const User = () => {
  return <p>hello</p>;
};

export default memo(User, () => true);
