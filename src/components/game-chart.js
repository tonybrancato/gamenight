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
      </div>
    )
  }
}