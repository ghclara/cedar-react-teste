import React, {Component} from 'react';


import { loadCss } from 'esri-loader';
import { Map, WebMap, WebScene  } from '@esri/react-arcgis';
import { queueScheduler } from 'rxjs';


loadCss();

export default (props) => (
    <Map
        class="full-screen-map"
        mapProperties={{ basemap: 'satellite' }}
        loaderOptions={{ css: true }}
    />
)