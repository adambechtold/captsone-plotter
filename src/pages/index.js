import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Plot from '../components/plot';

let myData = [
  {
    id: 'group A',
    data: [
      {
        x: 1,
        y: 1,
      },
    ],
  },
];

const fetchPosition = () => {
  const options = {
    method: 'get',
    headers: new Headers({'Content-Type': 'application/json'}),
    // mode: 'no-cors'
  };
  return fetch('http://ec2-52-91-195-101.compute-1.amazonaws.com:3000/location', options)
    .then(response => {
      console.log(response);
      return response.json()
    })
    .then((responseJson) => {
      console.log(responseJson);
      myData[0].data[0].x = responseJson.x;
      myData[0].data[0].y = responseJson.z;
      return myData;
    })
    .catch(err => console.log('err', err));
};

class IndexPage extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      fetchPosition()
        .then(data => {
          this.setState({ data });
        })
        .catch(err => console.log(err));
    }, 100);
  }

  state = {
    data: myData,
  };

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Plot data={myData} />
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    );
  }
}

export default IndexPage;
