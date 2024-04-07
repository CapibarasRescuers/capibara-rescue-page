import "../App.css";
import ChangeLenguage from "../elements/changeLanguage";
import { useTranslation } from "react-i18next";
import { Col, FloatButton, Row, Space } from "antd";
import AboutProject from "../elements/aboutProject";
import Twitter from "../assets/socialMediaIcons/x.png";
import Discord from "../assets/socialMediaIcons/discord.png";
import Github from "../assets/socialMediaIcons/github.png";

export default function SocialMedia() {
  const { t } = useTranslation(["translation"]);

  const FloatButtonImg = ({ icon, toolTip }) => (
    <FloatButton
      tooltip={<div>{toolTip}</div>}
      icon={<img src={icon} style={{ width: "120%" }} />}
    />
  );

  return (
    <>
      <FloatButton.Group
        shape="square"
        style={{
          left: 32,
        }}
      >
        <FloatButtonImg icon={Twitter} toolTip={t("socialMedia.twitter")} />
        <FloatButtonImg icon={Discord} toolTip={t("socialMedia.discord")} />
        <FloatButtonImg icon={Github} toolTip={t("socialMedia.gitHub")} />
      </FloatButton.Group>
    </>
  );
}
