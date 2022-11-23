import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import validator from 'validator';
import AuthFooter from './Footer';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary
}))


export default function SignUp() {

  const [emailFieldInput, setEmailFieldInput] = React.useState({ status: false, message: '' })
  const [passwordFieldInput, setPasswordFieldInput] = React.useState({ status: false, message: '' })
  const [firstnameFieldInput, setFirstnameFieldInput] = React.useState({ status: false, message: '' })
  const [lastnameFieldInput, setLastnameFieldInput] = React.useState({ status: false, message: '' })
  const [confirmPasswordFieldInput, setconfirmPasswordFieldInput] = React.useState({ status: false, message: '' })
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let firstname = data.get('firstName');
    let lastname = data.get('lastName');
    let email = data.get('email');
    let password = data.get('password');
    let confirmPassword = data.get('confirm-password');
    let agree = data.get('agree')!==null?true:false;
    if (!validator.isEmpty(firstname) && !validator.isEmpty(lastname) && validator.isEmail(email) &&
      !validator.isEmpty(password)) {
      if (password === confirmPassword) {
        //Here 
        console.log(agree)
      }
      else {
        setPasswordFieldInput({ status: true, message: 'Password not matched with confirm password.' })
        setconfirmPasswordFieldInput({ status: true, message: 'Confirm  password not matched with password.' })
      }
    }
    else {
      if (validator.isEmpty(firstname)) {
        setFirstnameFieldInput({ status: true, message: 'Please enter firstname.' })
        return
      }
      else if (validator.isEmpty(lastname)) {
        setLastnameFieldInput({ status: true, message: 'Please enter lastname.' })
        return
      }
      else if (!validator.isEmail(email)) {
        if (validator.isEmpty(email)) {
          setEmailFieldInput({ status: true, message: 'Please enter email.' })
          return
        }
        else {
          setEmailFieldInput({ status: true, message: 'Please enter valid email.' })
          return
        }

      }
      else if (validator.isEmpty(password)) {
        setPasswordFieldInput({ status: true, message: 'Please enter password.' })
        return
      }

    }


  };
  const onChangleHandler = (event) => {
    let email = validator.isEmail(event.target.value);
    if (email) {
      setEmailFieldInput({ status: !email, message: '' })
      return
    }
    else {
      setEmailFieldInput({ status: !email, message: 'Please enter valid email.' })
      return
    }
  }
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={firstnameFieldInput.status ? true : false}
                helperText={firstnameFieldInput.status ? firstnameFieldInput.message : ''}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                error={lastnameFieldInput.status ? true : false}
                helperText={lastnameFieldInput.status ? lastnameFieldInput.message : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={emailFieldInput.status ? true : false}
                helperText={emailFieldInput.status ? emailFieldInput.message : ''}
                onChange={onChangleHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                error={passwordFieldInput.status ? true : false}
                helperText={passwordFieldInput.status ? passwordFieldInput.message : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirm-password"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                autoComplete="off"
                error={confirmPasswordFieldInput.status ? true : false}
                helperText={confirmPasswordFieldInput.status ? confirmPasswordFieldInput.message : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" name="agree"/>}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <StyledLink to="/signin" variant="body2" >
                Already have an account? Sign in
              </StyledLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <AuthFooter sx={{ mt: 5 }} />
    </Container>

  );
}