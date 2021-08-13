import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '../../MenuIcon/MenuIcon';

const useStyles = makeStyles((theme) => ({
    navBarStyle: {
        display: 'flex',
        justifyContent: 'flex-end',


    },
    btnAddShow: {
        display: 'flex',
        flexWrap: 'wrap',
        fontWeight: 'bold',
        color: 'rgb(52, 228, 29)'
    },
    btnAdd: {
        display: 'flex',
        flexWrap: 'wrap',
        fontWeight: 'bold',
        color: 'rgb(52, 228, 29)'
    },
    back: {
        backgroundColor: 'black'
    },
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'rgb(52, 228, 29)'
    },
    title: {
        fontWeight: 'bold',
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        color: "rgb(52, 228, 29)    ",

    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        border: '3px solid black',
        color: 'inherit',
    },
    btn: {
        textDecoration: 'none',
        fontWeight: 'bold',
        color: 'rgb(52, 228, 29)'

    },
    login: {
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'rgb(52, 228, 29)'

    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },

}));



const Header = ({ toggleDrawer }) => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar className={classes.back} position="static">
                <Toolbar>
                    <Link to='/'>

                        <MenuIcon />
                    </Link>

                    <Typography className={classes.title} variant="h6" noWrap>
                        Board-SHOP
                    </Typography>



                    <Link to='/list'>
                        <Button className={classes.btnAddShow}>
                            show added products
                        </Button>
                    </Link>
                    <Link to='/add'>
                        <Button className={classes.btnAdd}>
                            add product
                        </Button>
                    </Link>
                    <Link to='/register' >
                        <Button className={classes.btn} variant="h6" backgroundColor="currentColor" >
                            Sing up
                        </Button>

                    </Link>


                    <Link to='/login'>
                        <Button className={classes.login} variant="h6" backgroundColor="currentColor" >
                            sing in
                        </Button>

                    </Link>
                </Toolbar>
            </AppBar>
        </div >
    );
};

export default Header;