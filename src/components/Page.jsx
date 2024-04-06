import "../App.css";
import ChangeLenguage from "../elements/changeLanguage";
import { useTranslation } from "react-i18next";
import { Col, FloatButton, Row, Space } from "antd";
import AboutProject from "../elements/aboutProject";
import SocialMedia from "../elements/socialMedia";
import CountdownTimer from "../elements/countdownTimer";
import Gallery from "../elements/gallery";

function CapibaraMain() {
  const { t } = useTranslation(["welcome"]);

  return (
    <div>
      <div style={{ minHeight: "100vh", backgroundColor: "#11151c" }}>
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
      </div>

      <div style={{ padding: 10, backgroundColor: "white" }}>
        <Gallery />
      </div>

      <footer style={{ padding: 10, backgroundColor: "white" }}>
        <p>© 2024 by Capibara Rescue. {t("copyright")}</p>
      </footer>
    </div>
  );
}

export default CapibaraMain;
