import {Route, Switch} from 'react-router-dom';
import React, {Component, Fragment} from 'react';
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import NotFoundPage from './NotFoundPage';

export default class Root extends Component {
    render() {
        return (
            <Fragment>
                <Route path="/" render={(props) => (
                    <Navbar {...props}/>
                )}/>
                 <div className="container">
                    <Switch>
                        <Route exact path="/" component={Gallery}/>
                        <Route path="*" component={NotFoundPage} />
                    </Switch>
                </div>
            </Fragment>
        );
    }
}