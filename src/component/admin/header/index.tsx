import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ADMIN } from 'route-link';

const Header = ({ title }: { title: string }) => (
  <div>
    <Link to={ADMIN.LOGIN}>Login</Link>
    <p>{title}</p>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default memo(Header);
