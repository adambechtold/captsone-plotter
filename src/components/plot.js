import PropTypes from 'prop-types';
import React from 'react';
import { ResponsiveScatterPlot } from '@nivo/scatterplot';

const containerStyle = {
  height: 300,
};

const Plot = ({ data }) => (
  <div style={containerStyle}>
    Plot goes here!
    <ResponsiveScatterPlot
      data={data}
      margin={{
        top: 60,
        right: 140,
        bottom: 70,
        left: 90,
      }}
      xScale={{
        type: 'linear',
        min: -10,
        max: 10,
      }}
      yScale={{
        type: 'linear',
        min: -10,
        max: 10,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'weight',
        legendPosition: 'middle',
        legendOffset: 46,
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'size',
        legendPosition: 'middle',
        legendOffset: -60,
      }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          translateX: 130,
          itemWidth: 100,
          itemHeight: 12,
          itemsSpacing: 5,
          itemTextColor: '#999',
          symbolSize: 12,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  </div>
);

Plot.propTypes = {
  data: PropTypes.array,
};

Plot.defaultProps = {
  data: [{ x: 0, y: 0 }],
};

export default Plot;
