import React, {Component} from 'react';

import 'amcharts3';
import 'amcharts3/amcharts/pie';
import 'amcharts3/amcharts/xy';
import 'amcharts3/amcharts/radar';
import '@esri/arcgis-rest-request';
import '@esri/arcgis-rest-feature-layer';
import '@esri/cedar/dist/umd/themes/amCharts/calcite';

import { Chart } from '@esri/cedar';


export default class Graphics extends Component {

    cria_mapa(definitions){
      //create a cedar chart using the known 'bar' type
      var elementId = 'chart-valvula';
      return new Chart(elementId, definitions);
    }

    async prepare_map() {
        let definitions = {
            "type": "pie",
            "innerRadius": "50",
            "datasets": [
              {
                "url": "https://geoportal.corsan.com.br/server/rest/services/POC/POC_DashboardCCO/MapServer/0",
                "query": {
                  "orderByFields": "Number_of_SUM DESC",
                  "token": "wXyh_ZViNUl7YPym1owbTz4yNsywj6OHu5ZJ7Qd6eqT31XodfJAHC8T2O-WUsAkAegAA5H_4M9yRQk4tAkFxP_b6luXcd42PfGd9nQ_UcuLm4sDvtJF75_Q447jk6PyzA9zytoFESO1QV_n4Yp2ckWTJ-rQ9ZM3WHt4hf7h3SwMMA3ObRZqvrE45rih9_ybPgQpDn2oWOjfRQH_WajlO_Q..",
                  "groupByFieldsForStatistics": "STATUSCCO",
                  "outFields": "STATUSCCO",
                  "outStatistics": [{
                    "statisticType": "count",
                    "onStatisticField": "STATUSCCO",
                    "outStatisticFieldName": "NUMBER_OF_SUM"
                  }]
                }
              }
            ],
            "series": [{
                "category": {"field": "STATUSCCO", "label": "Status"},
                "value": {
                    "field": "NUMBER_OF_SUM",
                    "label": "Number of Students"
                  }
                }
            ]
          } 
   
        let chart = await this.cria_mapa(definitions);

        chart.show();
    }
    
    
    componentDidMount() {
      this.prepare_map();
    }
  
    render() {
      return (
        <div id="chart-valvula" style={{ height: '100%' }}>
        </div>
      )
    }
}