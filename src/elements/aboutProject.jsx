import { Image, Typography } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import capibaraLogo from "../assets/capibara_ok.png";

export default function AboutProject() {
  const { t } = useTranslation(["welcome"]);

  return (
    <>
      <Image src={capibaraLogo} />
      <Typography.Title> {t("aboutProject.title")}</Typography.Title>
      <Typography.Title level={3}> {t("aboutProject.body")}</Typography.Title>
    </>
  );
}
