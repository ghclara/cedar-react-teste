import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Inicial from './pages/Inicial';

export default function RoutesMap() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Inicial} />
            </Switch>
        </BrowserRouter>
    )
}
 