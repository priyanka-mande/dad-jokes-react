import { useState, useEffect } from "react";
import { Layout, Typography, Row, Col, Input, Button, Card } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import { getJokes } from "./resource/Api/Api";
import { JokeList } from "./components/JokeList";
import { Joke } from "./app.types";
import "antd/dist/antd.css";
import "./resource/css/index.css";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { Search } = Input;

function App() {
  const [randomJokes, setRandomJoke] = useState<Joke[]>([]);
  const [searchText, setSearch] = useState<string>("");
  const [totalJokes, setTotalJokes] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    //Function for getting list of jokes via api
    (async function () {
      setLoader(true);
      const { results, total_jokes } = await getJokes(
        `/search?page=${currentPage}&limit=10&term=${searchText}`
      );
      // TODO: resolve eslint formatting warnings.
      /* eslint-disable no-unused-expressions */
      setRandomJoke(currentPage > 1 ? [...randomJokes, ...results] : results);
      setTotalJokes(total_jokes);
      setLoader(false);
    })();
    // TODO: resolve eslint formatting warnings.
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [searchText, currentPage]);

  const onSearch = async (value: string) => {
    if (searchText !== value) {
      if (value === "" || value) {
        setCurrentPage(1);
      }
      setSearch(value);
    }
  };

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <Layout className="layout">
      <Header className="main-header">
        <Row>
          <Col span={10}>
            <Title level={3} className="header-title">
              Random Dad Jokes
            </Title>
          </Col>
          <Col span={10}>
            <Search
              className="search-box"
              placeholder="Search for dad jokes"
              onSearch={onSearch}
              allowClear
              enterButton
            />
          </Col>
        </Row>
      </Header>
      <Content>
        <div className="site-card-wrapper">
          <Col span={16} className="center-content">
            <Card className="card-content" bordered={true}>
              <JokeList jokes={randomJokes} loader={loader} />
              {!loader && totalJokes > randomJokes.length && (
                <div className="btn-load">
                  <Button
                    type="primary"
                    shape="round"
                    icon={<ArrowDownOutlined />}
                    size="large"
                    onClick={loadMore}
                  >
                    Load More Jokes
                  </Button>
                </div>
              )}
            </Card>
          </Col>
        </div>
      </Content>
      <Footer className="footer-text">©2021 Nitor Infotech</Footer>
    </Layout>
  );
}

export default App;
