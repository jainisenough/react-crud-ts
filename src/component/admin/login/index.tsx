import React, { memo, lazy } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { string as yupString, object as yupObject } from 'yup';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import storage from '../../../helper/storage';
import { login } from '../../../action/user';
import { ADMIN } from '../../../route-link';
import useStyles from './style';

const Copyright = lazy(() => import('../copyright'));

const Login = ({ login }: any) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>AJ</Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={async values => {
            const resp = await login(values.email, values.password);
            storage.setItem('X-Access-Token', resp.response.headers['X-Access-Token']);
            history.replace(ADMIN.USER);
          }}
          validationSchema={yupObject().shape({
            email: yupString().email().required('Required'),
            password: yupString().required('Required')
          })}
        >
          {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
            return (
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? 'text-input error' : 'text-input'}
                />
                {errors.email && touched.email && <div className="error">{errors.email}</div>}
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && touched.password ? 'text-input error' : 'text-input'}
                />
                {errors.password && touched.password && <div className="error">{errors.password}</div>}
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={isSubmitting}
                >
                  Sign In
                </Button>
                <Grid container justify="center" alignItems="center">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              </form>
            );
          }}
        </Formik>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

const mapDispatchToProps = (_dispatch: (arg0: any) => any) => ({
  login: (username: string, password: string) => login(username, password)
});

Login.propTypes = {
  login: PropTypes.func.isRequired
};

const LoginComponent = connect(null, mapDispatchToProps)(Login);
export default memo(LoginComponent);
