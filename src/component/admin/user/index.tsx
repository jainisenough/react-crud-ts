import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import { getUsers } from 'action/user';

const User = ({ getUsers, users }: any) => {
  useEffect(() => {
    if (_isEmpty(users.data)) {
      getUsers();
    }
  }, [getUsers, users.data]);
  return <p>{JSON.stringify(users)}</p>;
};

const mapStateToProps = (state: { user: any }) => ({
  users: _get(state, 'user', {
    isPending: false,
    isFulfilled: false,
    isRejected: false
  })
});

const mapDispatchToProps = (dispatch: (arg0: any) => any) => ({
  getUsers: () => dispatch(getUsers())
});

User.propTypes = {
  users: PropTypes.shape({
    isPending: PropTypes.bool.isRequired,
    isFulfilled: PropTypes.bool.isRequired,
    isRejected: PropTypes.bool.isRequired,
    data: PropTypes.array
  }),
  getUsers: PropTypes.func.isRequired
};

const UserComponent = connect(mapStateToProps, mapDispatchToProps)(User);
export default memo(UserComponent);
