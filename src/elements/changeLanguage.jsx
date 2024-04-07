import React from "react";
import { Button, Col, Row } from "antd";
import flagSpanish from "../assets/flags/spanish.png";
import flagEnglish from "../assets/flags/english.png";
import { useTranslation } from "react-i18next";

const GenerateLanguage = ({ language, icon, onClick }) => {
  return (
    <Button
      ghost={true}
      type="default"
      style={{ flex: 1, width: 150 }}
      onClick={onClick}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <img src={icon} height={20} alt={language} />
        <span>{language}</span>
      </div>
    </Button>
  );
};

export default function ChangeLanguage() {
  const { t, i18n } = useTranslation(["translation"]);

  const change = (locale) => () => {
    i18n.changeLanguage(locale);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Row gutter={[25]}>
        <Col span={12}>
          <GenerateLanguage
            language={t("languague.english")}
            icon={flagEnglish}
            onClick={change("en")}
          />
        </Col>
        <Col span={12}>
          <GenerateLanguage
            language={t("languague.spanish")}
            icon={flagSpanish}
            onClick={change("es")}
          />
        </Col>
      </Row>
    </div>
  );
}
