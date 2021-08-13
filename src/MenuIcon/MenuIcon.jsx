import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > svg': {
        },
        margin: '0 15 0 0',
    },
    iconHome: {
        // margin: '0 15 0 0',
        color: "rgb(52, 228, 29)",
        border: '1px solid white',
    }
}));

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}


const MenuIcon = () => {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <HomeIcon className={classes.iconHome} fontSize="large" />

        </div>

    );
};

export default MenuIcon;