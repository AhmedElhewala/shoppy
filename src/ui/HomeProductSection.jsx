import styled from "styled-components";
import useSapmleCategoryProduct from "../features/category/useSapmleCategoryProduct";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import ProductImgBox from "./ProductImgBox";
import ProductWatchlistButton from "./ProductWatchlistButton";
import { formatCurrency } from "../utilities/helpers";
import AddProductToCartBtn from "./AddProductToCartBtn";
import { useRef } from "react";

const StyledHomeProductSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  transition: var(--main-transition);
`

const StyledSectionHeadingLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
  font-size: 1.8rem;
  transition: var(--main-transition);

  >svg {
    font-size: 2rem;
  }
`

const StyledProductsListContainer = styled.div`
  padding: 0.8rem;
  width: 100%;
  display: flex;
  gap: 1.5rem;
  position: relative;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  &::-webkit-scrollbar-horizontal {
    height: 0;
  }
`

const StyledProductBox = styled.div`
  width: 18rem;
  min-height: 10rem;
  padding-bottom: 2rem;
  border-radius: 6px;
  background-color: var(--color-grey-300);
  color: var(--color-grey-800);
  box-shadow: 0 0 4px 2px var(--color-grey-500);
  position: relative;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  transition: var(--main-transition);
`;

const StyledProductTitle = styled.h4`
  padding: 0 1rem;
  margin: 1rem 0;
  font-size: 1.4rem;
`

const StyledProductPrice = styled.span`
  width: 100%;
  padding: 0 1rem;
  font-size: 1.4rem;
  font-weight: bold;
  flex: 1;
  display: flex;
  align-items: end;
  justify-content: end;
`

function HomeProductSection({category}) {
  const {id, name} = category;
  const {products, count} = useSapmleCategoryProduct(id, 0);
  const productsContainerRef = useRef();

  const handleWheel = (e) => {
    e.preventDefault();
    e.stopPropagation();
    productsContainerRef.current.scrollLeft += e.deltaY;
  };

  const handleMouseEnter = () => {
    window.addEventListener("wheel", handleWheel, { passive: false });
  };

  const handleMouseLeave = () => {
    window.removeEventListener("wheel", handleWheel);
  };

  return (
    <StyledHomeProductSection>
      <StyledSectionHeadingLink to={`/category/${id}`}>
        {name}
        <HiChevronRight />
      </StyledSectionHeadingLink>
      <StyledProductsListContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={productsContainerRef}
      >
        {count > 0 &&
          products.map(product => (
            <StyledProductBox key={product.id}>
              <ProductWatchlistButton 
                product={product}
                size="small"
              />

              <ProductImgBox 
                key={product.id}
                images={product.images}
                title={product.title}
                size="small"
              />
              <StyledProductTitle>{product.title}</StyledProductTitle>
              <StyledProductPrice>{formatCurrency(product.price)}</StyledProductPrice>
              <AddProductToCartBtn 
                product={product}
                size="small"
              />
            </StyledProductBox>
          ))
        }
      </StyledProductsListContainer>
    </StyledHomeProductSection>
  )
}

export default HomeProductSection