import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ImageSlider: React.FunctionComponent<{ imgSources: Array<string> }> = ({
  imgSources
}) => {
  const [imgIndex, setImgIndex] = useState(0);
  const numOfImgs = imgSources.length;

  const nextImage = () => {
    imgIndex === numOfImgs - 1 ? setImgIndex(0) : setImgIndex(imgIndex + 1);
  };

  const prevImage = () => {
    imgIndex === 0 ? setImgIndex(numOfImgs - 1) : setImgIndex(imgIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [imgIndex]);

  return (
    <div className="slider">
      <div className="image__holder">
        <div className="slider__control left" onClick={() => prevImage()}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="slider__control right" onClick={() => nextImage()}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        {<img key={imgIndex} src={imgSources[imgIndex]} />}
      </div>
      <style jsx>{`
        .slider {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .image__holder {
          position: relative;
        }

        .slider__control {
          position: absolute;
          background: black;
          color: white;
          border: 1px solid #999;
          padding: 24px 10px;
          font-size: 1.6rem;
          cursor: pointer;
          opacity: 0.2;

          -webkit-user-select: none; /* webkit (safari, chrome) browsers */
          -moz-user-select: none; /* mozilla browsers */
          -khtml-user-select: none; /* webkit (konqueror) browsers */
          -ms-user-select: none; /* IE10+ */
        }

        .slider__control:hover {
          opacity: 1;
        }

        .slider__control.left {
          top: 50%;
          transform: translateY(-50%);
          left: 0;
        }

        .slider__control.right {
          top: 50%;
          transform: translateY(-50%);
          right: 0;
        }

        img {
          height: 600px;
        }

        @media (max-width: 900px) {
          img {
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
