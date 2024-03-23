import React, { useState, useEffect } from "react";
import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";

export default function CountdownTimer() {
  const { t } = useTranslation(["welcome"]);
  const deadline = new Date("2024-04-15T12:00:00");

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = deadline - now;
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Formatea los valores para que tengan un 0 a la izquierda si son de un solo dígito
    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    return {
      days,
      hours: formatTime(hours),
      minutes: formatTime(minutes),
      seconds: formatTime(seconds),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const colorStyle = { color: "white" };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* <Typography.Title level={4} style={{ margin: 0 }}>
        Presale
      </Typography.Title> */}
      <Row>
        <Col span={6}>
          <Typography.Title level={4}>{timeLeft.days}</Typography.Title>
          <Typography.Paragraph style={colorStyle}>
            {t("countDown.day")}
          </Typography.Paragraph>
        </Col>
        <Col span={6}>
          <Typography.Title level={4}>{timeLeft.hours}</Typography.Title>
          <Typography.Paragraph style={colorStyle}>
            {t("countDown.hours")}
          </Typography.Paragraph>
        </Col>
        <Col span={6}>
          <Typography.Title level={4}>{timeLeft.minutes}</Typography.Title>
          <Typography.Paragraph style={colorStyle}>
            {t("countDown.minutes")}
          </Typography.Paragraph>
        </Col>
        <Col span={6}>
          <Typography.Title level={4}>{timeLeft.seconds}</Typography.Title>
          <Typography.Paragraph style={colorStyle}>
            {t("countDown.seconds")}
          </Typography.Paragraph>
        </Col>
      </Row>
    </>
  );
}
