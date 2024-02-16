import { useState } from "react";
import styled from "styled-components";

const StyledProductImgBox = styled.div`
  position: relative;
  transition: var(--main-transition);
`

const StyledProductImg = styled.img`
  height: 100%;
  object-fit: cover;
  transition: var(--main-transition);
`

const ProductGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  left: 2px;
  bottom: 2px;
  transition: var(--main-transition);
  
  &.small {
    gap: 0.6rem;
  }
`

const ProductGalleryImg = styled.img`
  width: 3rem;
  height: 4rem;
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
    height: 2rem;
    border-radius: 4px;
    box-shadow: 0 0 2px 2px #333;
  }
`

function ProductImgBox({images, title, size}) {
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
      {!imgError &&
        <>
          <StyledProductImg 
            src={viewedImg}
            alt={title}
            onError={handleImgError}
          />
          {images.length > 1 &&
            <ProductGalleryContainer className={size === "small" ? "small" : ""}>
              {images.map(image => (
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
          }
        </>
      }
    </StyledProductImgBox>
  )
}

export default ProductImgBox