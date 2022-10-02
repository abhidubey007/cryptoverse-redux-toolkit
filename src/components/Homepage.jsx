import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Cryptocurrencies, News } from '../components'
<<<<<<< HEAD
import Loader from './Loader';
=======
>>>>>>> 58e9962859d999d152a5b0273faae9fb9d0a0681

// destructure title
const { Title } = Typography

const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

<<<<<<< HEAD
  if (isFetching) return <Loader />;
=======
  if (isFetching) return "Loading...";
>>>>>>> 58e9962859d999d152a5b0273faae9fb9d0a0681

  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={globalStats.totalExchanges} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className="show-more"><Link to='/cryptocurrencies'>Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className="home-title">Latest Cryptocurrencies News</Title>
        <Title level={3} className="show-more"><Link to='/news'>Show More</Link></Title>
      </div>
      <News simplified />
    </>
  )
}

export default Homepage