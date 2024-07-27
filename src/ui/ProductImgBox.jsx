import { useState } from "react";
import { FaBoxOpen } from "react-icons/fa";
import styled from "styled-components";

const StyledProductImgBox = styled.div`
  position: relative;
  transition: var(--main-transition);
  display: flex;
  flex: 1 0 0;
  width: 100%;

  .alternate-image {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;

    &.small {
      gap: 2rem !important;

      p {
        font-size: 1.4rem !important;
      }

      svg {
        font-size: 48px !important;
      }
    }

    svg {
      font-size: 72px;
    }

    p {
      font-size: 1.8rem;
      font-weight: bold;
      text-wrap: balance;
      text-align: center;
    }
  }
`;

const StyledProductImg = styled.img`
  height: 100%;
  object-fit: cover;
  transition: var(--main-transition);
`;

const ProductGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  left: 2px;
  bottom: 4px;
  transition: var(--main-transition);

  &.small {
    gap: 0.6rem;
  }
`;

const ProductGalleryImg = styled.img`
  width: 3rem;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  box-shadow: 0 0 4px 2px #333;
  transition: var(--main-transition);
  cursor: pointer;
  transition: var(--main-transition);

  &.active {
    box-shadow: 0 0 1px 2px #000;
  }

  &.small {
    width: 2rem;
    border-radius: 4px;
    box-shadow: 0 0 2px 2px #333;
  }
`;

function ProductImgBox({ images, title, size }) {
  const [viewedImg, setViewedImg] = useState(images ? images[0] : null);
  const [imgError, setImgError] = useState(false);

  function handleViewedImg(e) {
    setViewedImg(e.target.src);
  }

  function handleImgError() {
    setImgError(true);
  }

  return (
    <StyledProductImgBox>
      {imgError ? (
        <div className={`alternate-image ${size === "small" ? "small" : ""}`}>
          <FaBoxOpen />
          <p>Sorry, this image is not available right now!</p>
        </div>
      ) : (
        <>
          <StyledProductImg
            src={viewedImg}
            alt={title}
            onError={handleImgError}
          />
          {images.length > 1 && (
            <ProductGalleryContainer
              className={size === "small" ? "small" : ""}
            >
              {images.map((image) => (
                <ProductGalleryImg
                  key={image}
                  src={image}
                  alt={title}
                  onClick={handleViewedImg}
                  className={`
                ${viewedImg === image ? "active" : ""}
                ${size === "small" ? "small" : ""}
              `}
                />
              ))}
            </ProductGalleryContainer>
          )}
        </>
      )}
    </StyledProductImgBox>
  );
}

export default ProductImgBox;
