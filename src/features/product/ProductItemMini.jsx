import styled from "styled-components";
import { Link } from "react-router-dom";

import { formatCurrency } from "../../utilities/helpers";
import ProductImgBox from "../../ui/ProductImgBox";
import ProductWatchlistButton from "../../ui/ProductWatchlistButton";
import AddProductToCartBtn from "../../ui/AddProductToCartBtn";

const StyledProductItem = styled.div`
  min-width: 276px;
  flex: 1 0 0;
  background-color: var(--color-grey-300);
  color: var(--color-grey-900);
  box-shadow: 0 0 4px 2px var(--color-grey-500);
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: var(--main-transition);

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledProductDetails = styled.div`
  width: 100%;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: var(--main-transition);
`;

const StyledProductTitle = styled.h3`
  font-size: 2rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledProductDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.4;
  transition: var(--main-transition);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledProductCategoryPrice = styled.div`
  padding: 20px 15px;
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  position: relative;
  transition: var(--main-transition);
`;

const SyledProductCategoryLink = styled(Link)`
  padding: 6px 18px;
  border-radius: 6px;
  background-color: var(--color-grey-700);
  color: var(--color-grey-100);
  box-shadow: 0 0 4px 2px var(--color-grey-500);
  font-size: 1.4rem;
  transition: var(--main-transition);
`;

const StyledProductPrice = styled.span`
  font-weight: bold;
`;

function ProductItemMini({ product }) {
  const { title, description, images, id, price, category } = product;
  const { id: idCategory, name: nameCategory } = category;

  return (
    <StyledProductItem>
      <ProductWatchlistButton product={product} />

      <ProductImgBox key={id} title={title} images={images} />

      <StyledProductDetails>
        <StyledProductTitle>{title}</StyledProductTitle>
        <StyledProductDescription>{description}</StyledProductDescription>
      </StyledProductDetails>

      <StyledProductCategoryPrice>
        <SyledProductCategoryLink to={`/category/${idCategory}`}>
          {nameCategory}
        </SyledProductCategoryLink>
        <StyledProductPrice>{formatCurrency(price)}</StyledProductPrice>
      </StyledProductCategoryPrice>

      <AddProductToCartBtn product={product} />
    </StyledProductItem>
  );
}

export default ProductItemMini;
