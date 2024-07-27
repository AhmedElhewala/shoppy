import { useState } from "react";
import { FaBoxOpen } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import styled from "styled-components";

const StyledTableImgWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const StyledImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

function TableImgWrapper({ rowData }) {
  const [imgError, setImgError] = useState({
    avatar: false,
    image: false,
    images: rowData?.images?.map(() => false) || [],
  });

  const handleError = (type, index = null) => {
    if (type === "images" && index !== null) {
      setImgError((prevState) => {
        const updatedErrors = [...prevState.images];
        updatedErrors[index] = true;
        return { ...prevState, images: updatedErrors };
      });
    } else {
      setImgError((prevState) => ({ ...prevState, [type]: true }));
    }
  };

  return (
    <StyledTableImgWrapper>
      {rowData?.avatar &&
        (imgError.avatar ? (
          <HiUserCircle
            style={{
              width: "36px",
              height: "36px",
              color: "var(--color-grey-700)",
            }}
          />
        ) : (
          <StyledImg
            src={rowData.avatar}
            alt="avatar"
            onError={() => handleError("avatar")}
          />
        ))}
      {rowData?.image &&
        (imgError.image ? (
          <FaBoxOpen
            style={{
              width: "36px",
              height: "36px",
              color: "var(--color-grey-700)",
            }}
          />
        ) : (
          <StyledImg
            src={rowData.image}
            alt="image"
            onError={() => handleError("image")}
          />
        ))}
      {rowData?.images &&
        rowData.images.map((image, index) =>
          imgError.images[index] ? (
            <FaBoxOpen
              key={index}
              style={{
                width: "36px",
                height: "36px",
                color: "var(--color-grey-700)",
              }}
            />
          ) : (
            <StyledImg
              src={image}
              alt={`image-${index}`}
              key={index}
              onError={() => handleError("images", index)}
            />
          )
        )}
    </StyledTableImgWrapper>
  );
}

export default TableImgWrapper;
