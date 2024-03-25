import { Image, Button, Spin } from "antd";
import { useEffect, useState } from "react";
import { StableDiffusion } from "./openai";

export default function GenerateImage() {
  const [loading, setLoading] = useState(true);

  const onClick = () => {
    getImage();
  };

  const getImage = async () => {
    setLoading(true);
    await StableDiffusion();
    setLoading(false);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <Spin spinning={loading}>
      <div id="images-container"></div>
      <Button onClick={() => onClick()}>Generate</Button>
    </Spin>
  );
}
