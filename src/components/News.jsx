import React, { useState } from 'react';
import { Avatar, Card, Col, Row, Select, Typography } from 'antd';
import moment from 'moment/moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader'

const { Title, Text } = Typography;
const { Option } = Select;

const demoImageUrl = "https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg"

const News = ({ simplified }) => {

  const [newsCategory, setnewsCategory] = useState("Cryptocurrency")
  const count = simplified ? 6 : 100;
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count })
  const { data } = useGetCryptosQuery(100)

  if (!cryptoNews?.value) return <Loader />;

  return (
    <>
      {
        !simplified && (
          <Col>
            <Select
              showSearch
              className='select-news'
              placeholder="Select a news Crypto"
              optionFilterProp='children'
              onChange={(value) => { setnewsCategory(value) }}
              filterOption={((input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0)}
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {
                data?.data?.coins.map((coin) => (
                  <Option value={coin.name}>{coin.name}</Option>
                ))
              }
            </Select>
          </Col>
        )
      }
      <Row gutter={[24, 24]}>
        {cryptoNews?.value.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className='news-image-container' rel="noreferrer">
                  <Title className='news-title' level={4}>{news.name}</Title>
                  <img style={{ maxWidth: "200px", maxHeight: "100px" }} src={news?.image?.thumbnail?.contentUrl || demoImageUrl} alt="news" />
                </div>
                <p>
                  {news.description > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description
                  }
                </p>
                <div className='provider-container'>
                  <div>
                    <Avatar src={news.provider[0].image?.thumbnail?.contentUrl} />
                    <Text className='provider-name'>{news.provider[0]?.name}</Text>
                  </div>
                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default News