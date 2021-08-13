import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Add from '../Admin/Add';
import Edit from '../Admin/Edit';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Content from '../components/Home/Content';
import Home from '../components/Home/Home';
import InfoModal from '../components/InfoModal/InfoModal';
import AuthContextProvider from '../Context/AuthContext';
import ProductContextProvider from '../Context/ProductsContext';
// import MenuIcon from '../MenuIcon/MenuIcon';
import ProductDetail from '../Product/ProductDetail';

const Routes = () => {
    return (
        <AuthContextProvider>
            <ProductContextProvider>
                <BrowserRouter>
                    <Header />
                    <Switch>

                        <Route exact path="/" component={Home} />
                        <Route exact path="/list" component={Content} />
                        <Route exact path="/add" component={Add} />
                        <Route exact path="/edit/:id" component={Edit} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/modal" component={InfoModal} />
                        <Route exact path="/detail/:id" component={ProductDetail} />


                    </Switch>
                    <Footer />
                </BrowserRouter>
            </ProductContextProvider>
        </AuthContextProvider>
    );
};

export default Routes;