import React from 'react';

import { Chart } from '@esri/cedar';


export default function Graphics() {

    async function prepare_map() {
        var datasets = [{
            "url": "https://geoportal.corsan.com.br/server/rest/services/POC/POC_DashboardCCO/MapServer/2",
            "name": "schools",
            "query": {
              "orderByFields": "Number_of_SUM DESC",
              "groupByFieldsForStatistics": "NOME",
              "outStatistics": [{
                "statisticType": "sum",
                "onStatisticField": "NIVEL",
                "outStatisticFieldName": "Number_of_SUM"
              }]
            }
          }];
    
        // designate a one or more series to show the data on the chart
        var series = [{
        "category": {"field": "NOME", "label": "nome"},
        "value": {"field": "Number_of_SUM", "label": "Nível"},
        "source": "schools"
        }];
    
        // optionally override any of the cart type's default styles
        var overrides = {
        "categoryAxis": {
            "labelRotation": -45
        }
        }
    
        //create a cedar chart using the known 'bar' type
        var elementId = 'content';
        var chart = new Chart(elementId, {"type": "bar"})
            .datasets(datasets)
            .series(series)
            .overrides(overrides);
    
        console.log(chart)

        chart.show();
    }
    
        
          // render the chart
    return (
        <div id="chart" style={{ height: '400px'}} onDragEnd={ prepare_map }>
        </div>
    )
}