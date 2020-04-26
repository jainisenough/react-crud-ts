import React, { memo } from 'react';

const User = () => {
  return <p>hello</p>;
};

export default memo(User, () => true);
