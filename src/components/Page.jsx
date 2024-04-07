import "../App.css";
import ChangeLenguage from "../elements/changeLanguage";
import { useTranslation } from "react-i18next";
import { Col, FloatButton, Row, Typography } from "antd";
import AboutProject from "../elements/aboutProject";
import SocialMedia from "../elements/socialMedia";
import CountdownTimer from "../elements/countdownTimer";
import Gallery from "../elements/gallery";
import TopBar from "../elements/topBar";
import Capibara_BG from "../assets/capibara_bg.png";
import Capibara_BG_White from "../assets/capibara_bg_white.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background-color: #11151c;
  background-image: url(${Capibara_BG});
  background-repeat: repeat;
  background-size: 120px;
  background-position: 10px 10px;
  @media (max-width: 1440px) {
    padding-top: 60px;
    padding-bottom: 20px;
  }
`;

const ContainerGalley = styled.div`
  padding: 10px;
  min-height: 100vh;
  background-color: white;
  background-image: url(${Capibara_BG_White});
  background-repeat: repeat;
  background-size: 120px;
  background-position: 10px 10px;
`;

function CapibaraMain() {
  const { t } = useTranslation(["translation"]);

  return (
    <div>
      <TopBar />
      <Container>
        <Row>
          <Col lg={{ span: 6, order: 1 }} xs={{ span: 24, order: 2 }}>
            <Typography.Title style={{ margin: 12 }}>
              TOKENOMICS
            </Typography.Title>
          </Col>
          <Col lg={{ span: 12, order: 2 }} md={24} xs={{ span: 24, order: 1 }}>
            <AboutProject />
            <ChangeLenguage />
          </Col>
          <Col lg={{ span: 6, order: 3 }} md={24} xs={{ span: 24, order: 3 }}>
            <Typography.Title style={{ margin: 12 }}>
              COIN INFORMATION
            </Typography.Title>
            <CountdownTimer />
          </Col>
        </Row>
        <SocialMedia />
        <FloatButton.BackTop />
      </Container>

      <ContainerGalley>
        <Gallery />
        <footer style={{ padding: 10 }}>
          <p>© 2024 by Capibara Rescue. {t("copyright")}</p>
        </footer>
      </ContainerGalley>
    </div>
  );
}

export default CapibaraMain;
