import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import NavBarList from '../../Product/NavBarList';
import Logo1 from '../../assets/img/logo1.jpg'
import Logo2 from '../../assets/img/logo2.jpg'
import Logo3 from '../../assets/img/logo3.jpg'
import { makeStyles } from '@material-ui/core';
// import Footer from '../Footer/Footer';

const useStyles = makeStyles((theme) => ({
    Carousel: {
        maxWidth: '80%',
        margin: 'auto',

    }
}))
const Home = () => {
    const classes = useStyles()
    return (
        <div style={{ backgroundColor: 'grey    ' }}>
            <div >
                <Carousel className={classes.Carousel}>
                    <div>
                        <img src={Logo1} />

                    </div>
                    <div>
                        <img src={Logo2} />

                    </div>
                    <div>
                        <img src={Logo3} />

                    </div>
                </Carousel>
            </div>
            <div >

                <NavBarList />
            </div>
            <div>

            </div>
        </div>
    );

};
export default Home;