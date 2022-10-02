import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Row, Col, Card, Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import Loader from './Loader'
=======
>>>>>>> 58e9962859d999d152a5b0273faae9fb9d0a0681

const Cryptocurrencies = ({ simplified }) => {

  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  // const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [cryptos, setCryptos] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {

    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filteredData)

  }, [cryptosList, searchTerm])

<<<<<<< HEAD
  if (isFetching) return <Loader />;
=======
  if (isFetching) return "Loading...";
>>>>>>> 58e9962859d999d152a5b0273faae9fb9d0a0681

  return (
    <>
      {!simplified && (
        <div className='search-crypto'>
          <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
<<<<<<< HEAD
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card title={`${currency.rank}. ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl} alt="Cryptocurreny" />}
=======
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card title={`${currency.rank}. ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl} />}
>>>>>>> 58e9962859d999d152a5b0273faae9fb9d0a0681
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>MarketCap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        )
        )}
      </Row>
    </>
  )
}

export default Cryptocurrencies