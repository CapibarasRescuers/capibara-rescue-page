import "../App.css";
import ChangeLenguage from "../elements/changeLanguage";
import { useTranslation } from "react-i18next";
import { Col, Flex, Row } from "antd";
import AboutProject from "../elements/aboutProject";

function CapibaraMain() {
  const { t } = useTranslation(["welcome"]);

  return (
    <>
      <Row>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Col span={12}>
            <AboutProject />
          </Col>
        </div>
      </Row>
      <Row>
        <Col span={24}>
          <ChangeLenguage />
        </Col>
      </Row>
    </>
  );
}

export default CapibaraMain;
