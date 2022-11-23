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
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import validator from 'validator';
//import IconButton from '@mui/material/IconButton';
//import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert'
import AuthFooter from './Footer';

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: theme.palette.text.primary
}))

export default function SignIn({ props }) {

    const [open, setOpen] = React.useState(false);
    const [emailFieldInput, setEmailFieldInput] = React.useState({ status: false, message: '' })
    const [passwordFieldInput, setPasswordFieldInput] = React.useState({ status: false, message: '' })
    const [loading, setLoading] = React.useState(false)
    const [credential] = React.useState(JSON.parse(window.localStorage.getItem("user")))
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const user = {
        username: "swtbhsmn@gmail.com",
        password: "0000"
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new FormData(event.currentTarget);
        let email = data.get('email');
        let password = data.get('password');
        let remember = data.get('remember');
        if (!validator.isEmpty(email) && !validator.isEmpty(password)) {

            if (remember !== null) {
                window.localStorage.setItem("user", JSON.stringify({ username: email, password: password }))
            }
            if (!validator.isEmail(email)) {
                setEmailFieldInput(
                    {
                        status: true,
                        message: 'Please enter valid email.'
                    }
                )
                return
            }
            if (email === user.username && password === user.password) {
                setLoading(true)
                setTimeout(() => {
                    props.navigate('/');
                    return true;
                }, 2000)

            }
            else {
                setEmailFieldInput(
                    {
                        status: true,
                        message: 'Please enter valid credentials.'
                    }
                )
                setPasswordFieldInput(
                    {
                        status: true,
                        message: 'Please enter valid credentials.'
                    }
                )
                return
            }

        }
        else {
            if (email === '' && password === '') {
                setEmailFieldInput(
                    {
                        status: true,
                        message: 'Email field should not be empty!'
                    }
                )
                setPasswordFieldInput(
                    {
                        status: true,
                        message: 'Password field should not be empty!'
                    }
                )
                return
            }
            else if (email === '') {
                setEmailFieldInput(
                    {
                        status: true,
                        message: 'Email field should not be empty!'
                    }
                )
                return
            }
            else {
                setPasswordFieldInput(
                    {
                        status: true,
                        message: 'Password field should not be empty!'
                    }
                )
                return
            }
        }

    };

    const onChangleHandler = (event)=>{
        let email = validator.isEmail(event.target.value);
        if(email){
            setEmailFieldInput({status:!email,message:''})
            return
        }
        else
        {
            setEmailFieldInput({status:!email,message:'Please enter valid email.'})
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
                    {loading ? (<CircularProgress color="inherit" size={25} />) : (<LockOutlinedIcon />)}
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                >
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%', bgcolor: "#1565c0", color: "#fff" }}>

                    </Alert>
                </Snackbar>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        error={emailFieldInput.status ? true : false}
                        helperText={emailFieldInput.status ? emailFieldInput.message : ''}
                        defaultValue={credential !== null ? credential.username : ''}
                        onChange={onChangleHandler}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        error={passwordFieldInput.status ? true : false}
                        helperText={passwordFieldInput.status ? passwordFieldInput.message : ''}
                        defaultValue={credential !== null ? credential.password : ''}


                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" name="remember" />}
                        label="Remember me"

                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>

                </Box>
                <Grid container>
                    <Grid item xs>
                        <StyledLink to="/" variant="body2" >
                            Forgot password?
                        </StyledLink>
                    </Grid>
                    <Grid item >
                        <StyledLink to="/signup" variant="body2" >
                            {"Create account?"}
                        </StyledLink>
                    </Grid>
                </Grid>
                <Grid container>

                    <Grid item xs sx={{ mr: 1 }}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3 }}
                        >
                            <GoogleIcon /> Login
                        </Button>
                    </Grid>
                    <Grid item xs sx={{ ml: 1 }}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3 }}
                        >
                            <FacebookIcon /> Login
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <AuthFooter sx={{ mt: 8, mb: 4 }} />
        </Container>

    );
}