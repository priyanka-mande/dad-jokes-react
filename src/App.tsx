import React, { useState, useEffect } from "react";
import { Layout, Typography, Row, Col, Input, Button } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import { JokeList } from './components/JokeList';
import axios from "axios";
import 'antd/dist/antd.css';
import './resource/css/index.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { Search } = Input;

function App() {
  const [randomJokes, setRandomJoke] = useState([] as any);
  const [searchText, setSearch] = useState('' as any);
  const [loader, setLoader] = useState(true);
    
  useEffect(() => {
      getJoke();
  },[]);

  const getJoke = async () => {
    let jokesList : string[] = [];
      while(jokesList.length < 10){
          const response = await axios.get("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" }
          });
          jokesList.push(response.data)
      }
      setRandomJoke(jokesList);
      setLoader(false);
  }

  const onSearch = async (value: string) => {
    if(value !== '' && searchText !== value){
      setSearch(value);
      setLoader(true);
      const response = await axios.get("https://icanhazdadjoke.com/search", {
          headers: { Accept: "application/json" },
          params: { "limit": 10, "term": value }
        });
      setRandomJoke(response.data.results)
      setLoader(false);
    }
  }

  const loadMore = () => {
    setLoader(true);
    getJoke();
  }

  return (
    <Layout className="layout">
      <Header className="main-header">
          <Row>
              <Col span={10}><Title level={3} className="header-title">Random Dad Jokes</Title></Col>
              <Col span={14}><Search className="search-box" placeholder="Search for dad jokes" onSearch={onSearch} allowClear enterButton /></Col>
          </Row>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
            <Row>
              <Col span={5}></Col>
              <Col span={14}>
                <JokeList jokes={randomJokes} loader={loader} />
                {!loader && <div className="btn-load"><Button type="primary" shape="round" icon={<ArrowDownOutlined /> } size='large' onClick={loadMore}>Load More Jokes</Button></div>}
              </Col>
              <Col span={5}></Col>
            </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2021 Nitor Infotech</Footer>
    </Layout>
  );
}

export default App;
