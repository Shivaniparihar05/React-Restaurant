import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from '../components/HomePage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter =(props) =>(
    
    <BrowserRouter >

        <div>
            <Header/>
            <Switch>
                <Route path='/' component={HomePage} exact={true}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;