import "../App.css";
import ChangeLenguage from "../elements/changeLanguage";
import { useTranslation } from "react-i18next";
import { Col, FloatButton, Row, Space } from "antd";
import AboutProject from "../elements/aboutProject";
import SocialMedia from "../elements/socialMedia";
import CountdownTimer from "../elements/countdownTimer";

function CapibaraMain() {
  const { t } = useTranslation(["welcome"]);

  return (
    <Space size={"large"} direction="vertical">
      <Row>
        <Col
          lg={{ span: 8, offset: 8 }}
          md={{ span: 8, offset: 8 }}
          sm={24}
          xs={24}
        >
          <CountdownTimer />
        </Col>
      </Row>
      <Row>
        <Col lg={5} sm={24}></Col>
        <Col lg={14} md={24} sm={24} xs={24}>
          <AboutProject />
        </Col>
        <Col lg={5} sm={24}></Col>
      </Row>
      <Row>
        <Col span={24}>
          <ChangeLenguage />
        </Col>
      </Row>
      <SocialMedia />
      <FloatButton.BackTop />
    </Space>
  );
}

export default CapibaraMain;
