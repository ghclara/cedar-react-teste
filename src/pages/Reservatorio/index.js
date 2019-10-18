import React, {Component} from 'react';

import 'amcharts3';
import 'amcharts3/amcharts/serial';
import '@esri/arcgis-rest-request';
import '@esri/arcgis-rest-feature-layer';
import '@esri/cedar/dist/umd/themes/amCharts/calcite';

import { Chart } from '@esri/cedar';


export default class Graphics extends Component {

    cria_mapa(datasets, series, overrides){
      //create a cedar chart using the known 'bar' type
      var elementId = 'chart-reservatorio';
      return new Chart(elementId, {"type": "bar"})
          .datasets(datasets)
          .series(series)
          .overrides(overrides);
    }

    async prepare_map() {
        var datasets = [{
            "url": "https://geoportal.corsan.com.br/server/rest/services/POC/POC_DashboardCCO/MapServer/2",
            "name": "schools",
            "query": {
              "orderByFields": "NIVEL DESC",
              "token": "wXyh_ZViNUl7YPym1owbTz4yNsywj6OHu5ZJ7Qd6eqT31XodfJAHC8T2O-WUsAkAegAA5H_4M9yRQk4tAkFxP_b6luXcd42PfGd9nQ_UcuLm4sDvtJF75_Q447jk6PyzA9zytoFESO1QV_n4Yp2ckWTJ-rQ9ZM3WHt4hf7h3SwMMA3ObRZqvrE45rih9_ybPgQpDn2oWOjfRQH_WajlO_Q..",
              "groupByFieldsForStatistics": "NOME",
              "where": "NIVEL > 0",
              "outFields": "NOME, NIVEL",
            }
          }];
    
        // designate a one or more series to show the data on the chart
        var series = [{
        "category": {"field": "NOME", "label": ""},
        "value": {"field": "NIVEL", "label": "Nível"},
        "source": "schools"
        }];
    
        // optionally override any of the cart type's default styles
        var overrides = {
        "categoryAxis": {
            "labelRotation": -45
        }
        }
    
        let chart = await this.cria_mapa(datasets, series, overrides);

        chart.show();
    }
    
    
    componentDidMount() {
      this.prepare_map();
    }
  
    render() {
      return (
        <div id="chart-reservatorio" style={{ height: '100%' }}>
        </div>
      )
    }
}