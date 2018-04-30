import React from 'react';
import { Chart } from 'react-google-charts';

export default class GameChart extends React.Component {
  render() {

    return (
      <div className={'my-pretty-chart-container'}>
        <Chart
          chartType="PieChart"
          data={[["Task","Hours per Day"],["Work",11],["Eat",2],["Commute",2],["Watch TV",2],["Sleep",7]]}
          title='Win/Loss'
          width="100%"
          legend_toggle
          options={{title:"My Daily Activities", pieHole: 0.3, is3D: false}}
        />
        {/* <Chart
          chartType="ScatterChart"
          data={[['Age', 'Weight'], [8, 12], [4, 5.5]]}
          options={{}}
          graph_id="ScatterChart"
          width="100%"
          height="400px"
          legend_toggle
        /> */}
      </div>
    )
  }
}