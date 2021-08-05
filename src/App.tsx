import { useState, useEffect } from "react";
import { Layout, Typography, Row, Col, Input, Button, Card } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import { getJokes } from './resource/Api/Api';
import { JokeList } from './components/JokeList';
import { Jokes } from './app-interface';
import 'antd/dist/antd.css';
import './resource/css/index.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { Search } = Input;

function App() {
  const [randomJokes, setRandomJoke] = useState([]);
  const [searchText, setSearch] = useState('' as string);
  const [loader, setLoader] = useState(false);
    
  useEffect(() => {
    //Loads initial set of jokes
    getJoke();
  },[searchText]);

  //Function for getting list of jokes via api  
  const getJoke = async () => {
    setLoader(true);
    const jokesList: any = await getJokes<Jokes>(searchText ? `/search?limit=10&term=${searchText}` : '/search?limit=10');
    setRandomJoke(jokesList);
    setLoader(false);
  }

  const onSearch = async (value: string) => {
    if(searchText !== value){
      setSearch(value);
    }
  }

  const loadMore = () => {
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
      <Content>
        <div className="site-card-wrapper">
          <Col span={16} className="center-content">
            <Card className="card-content" bordered={true}>
            <JokeList jokes={randomJokes} loader={loader} />
                {!loader && 
                  <div className="btn-load">
                      <Button type="primary" shape="round" icon={<ArrowDownOutlined /> } size='large' onClick={loadMore}>
                        Load More Jokes
                      </Button>
                  </div>
                }
            </Card>
          </Col>
        </div>
      </Content>
      <Footer className="footer-text">©2021 Nitor Infotech</Footer>
    </Layout>
  );
}

export default App;
