import React, { Component } from 'react'
import Typography from '@mui/material/Typography';
import { styled} from '@mui/material/styles';
import {Link} from 'react-router-dom';

const StyledLink = styled(Link)(({theme})=>({
    textDecoration:"none",
    color:theme.palette.text.primary,
    '&:hover':{
        color:theme.palette.text.secondary
    }
}))

export default class AuthFooter extends Component {
    render() {
        return (
            <>
                <Typography variant="body2" color="text.secondary" align="center" {...this.props}>
                    {'Copyright © '}
                
                        RoyLab
                   {' '}
                    {new Date().getFullYear()}
                    {'.'}
                    <StyledLink to='/'>[visit home page]</StyledLink>
                </Typography>

            </>
        )
    }
}