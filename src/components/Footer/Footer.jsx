import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { alpha, makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({

    back: {
        flexWrap: 'none',
        // display: 'flex',

        // justifyContent: 'space-evenly',
        backgroundColor: 'black'
    },
    root: {


        flexGrow: 1
    },
    number: {
        fontWeight: 'bold'
    },
    name: {
        fontWeight: 'bold'


    }


}));



const Footer = ({ toggleDrawer }) => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar className={classes.back} position="static">
                <Toolbar className={classes.number}>
                    number : 0709139519

                </Toolbar>
                <Toolbar className={classes.name}>
                    author : Radbek uulu Mars
                </Toolbar>
            </AppBar>
        </div >
    );
};

export default Footer;