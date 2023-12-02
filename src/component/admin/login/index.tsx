import React, { memo, lazy } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { string as yupString, object as yupObject } from 'yup';
import { styled } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import storage from 'helper/storage';
import { login } from 'action/user';
import { ADMIN } from 'route-link';

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  margin: theme.spacing(1)
}));

const Copyright = lazy(() => import('component/admin/copyright'));

const Login = ({ login }: any) => {
  const navigate = useNavigate();
  const theme = useTheme();
  console.log(theme);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 8 }}>
        <Avatar sx={{ margin: 1, backgroundColor: '' }}>AJ</Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={async values => {
            const resp = await login(values.email, values.password);
            storage.setItem('X-Access-Token', resp.response.headers['X-Access-Token']);
            navigate(ADMIN.USER, { replace: true });
          }}
          validationSchema={yupObject().shape({
            email: yupString().email().required('Required'),
            password: yupString().required('Required')
          })}
        >
          {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
            return (
              <StyledForm noValidate onSubmit={handleSubmit}>
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
                  sx={{
                    margin: '3 0 2'
                  }}
                  disabled={isSubmitting}
                >
                  Sign In
                </Button>
                <Grid container justifyContent="center" alignItems="center">
                  <Grid item>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              </StyledForm>
            );
          }}
        </Formik>
      </Box>
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
