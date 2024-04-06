import React, { useEffect, useState } from "react";
import { Col, Row, Image } from "antd";
import data from "../images.json";

function getImageUrl(name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
}

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const arr = data.images;
    const shuffledImages = [...arr].sort(() => Math.random() - 0.5);
    setImages(shuffledImages);
  }, []);

  return (
    <Row gutter={[8, 8]}>
      {images.map((image, index) => {
        return (
          <Col key={index} xs={8} sm={8} md={6} lg={6}>
            <Image
              height={"95%"}
              width={"100%"}
              src={getImageUrl(image)}
              alt={`Imagen ${index + 1}`}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default Gallery;
