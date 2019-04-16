import PropTypes from 'prop-types';
import React from 'react';
import { ResponsiveScatterPlot } from '@nivo/scatterplot';

const containerStyle = {
  height: 600,
  width: 800
};

const range = 5;

const Plot = ({ data }) => (
  <div style={containerStyle}>
    <ResponsiveScatterPlot
      data={data}
      margin={{
        top: 60,
        right: 140,
        bottom: 70,
        left: 90,
      }}
      colors={['#1b8bcdff', '#27c78aff']}
      xScale={{
        type: 'linear',
        min: -range,
        max: range,
      }}
      symbolSize={20}
      yScale={{
        type: 'linear',
        min: -range,
        max: range,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'x (meters)',
        legendPosition: 'middle',
        legendOffset: 46,
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'y (meters)',
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
