import React from "react";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import { contractAddress } from "../config/contractAddress";
import capibaraLogo from "../assets/capibara_ok.png";

export default function AboutProject() {
  const { t } = useTranslation(["translation"]);

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
