import React, { useState, useEffect } from "react";
import "./MainContent.css";

const MainContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/pic/eco.jpg",
    "/pic/esg.jpeg",
    "/pic/leaf.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // 5초마다 자동 슬라이드
    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, []);

  return (
    <div className="MainContent">
      {/* 슬라이더 추가 */}
      <div className="slider">
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="slide">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={index === currentIndex ? "active" : "hidden"}
            />
          ))}
        </div>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      {/* 텍스트 콘텐츠 */}
      <p>1. 기후 변화, 자원 절감, 재활용 등에 대한 인식이 높아지며 친환경 제품에 대한 수요 급증</p>
      <p>2. 지구 환경 보호에 기여하고자 하는 의지</p>
    </div>
  );
};

export default MainContent;
