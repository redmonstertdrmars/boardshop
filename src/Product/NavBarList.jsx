import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import logoProductList1 from '../assets/img/logoProductList1.jpg';
import logoProductList2 from '../assets/img/logoProductList2.jpg';
import logoProductList3 from '../assets/img/logoProductList3.jpg';
import logoProductList4 from '../assets/img/logoProductList4.jpg';
import logoProductList5 from '../assets/img/logoProductList5.jpg';
import logoProductList6 from '../assets/img/logoProductList6.jpg';
import logoProductList7 from '../assets/img/logoProductList7.jpg';




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        // backgroundColor: theme.palette.background.paper,

    },
    imageList: {
        width: '100 %',
        height: 1000,
        flexWrap: 'wrap'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    titleStr: {
        fontWeight: 'bold',

    }
}));


const NavBarList = () => {

    const itemData = [
        {
            img: logoProductList1,
            title: 'Маршрутка',
            author: '',
        },
        {
            img: logoProductList2,
            title: 'Grizzly',
            author: '800',
        },
        {
            img: logoProductList3,
            title: 'ЛГБТ',
            author: '800',
        },
        {
            img: logoProductList4,
            title: 'Monster',
            author: '800',
        },
        {
            img: logoProductList5,
            title: 'Колёса,траки,подшипники',
            author: '800',
        },
        {
            img: logoProductList6,
            title: 'Канадский клён ',
            author: '800',
        },
        {
            img: logoProductList7,
            title: 'собираем доски бесплатно',
            author: '800',
        }
    ];

    const classes = useStyles();



    return (

        <div className={classes.root}>
            <ImageList rowHeight={180} className={classes.imageList}>
                <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>

                </ImageListItem>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img src={item.img} alt={item.title} />
                        <ImageListItemBar
                            title={item.title}
                            // subtitle={<span>Price: {item.author}</span>}

                            className={classes.titleStr} />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
};

export default NavBarList;