import { Typography } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import capibaraLogo from "../assets/capibara_ok.png";
import { contractAddress } from "../config/contractAddress";

export default function AboutProject() {
  const { t } = useTranslation(["welcome"]);

  return (
    <div>
      <img src={capibaraLogo} />
      <div>
        <Typography.Title style={{ margin: 12 }}>
          {t("aboutProject.title")}
        </Typography.Title>
        <Typography.Text style={{ margin: 0, color: "white" }}>
          {t("contractAddress", { id: contractAddress })}
        </Typography.Text>
      </div>
      <Typography.Title level={4}>{t("aboutProject.body")}</Typography.Title>
    </div>
  );
}
