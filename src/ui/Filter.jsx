import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import useCategoryList from "../features/category/useCategoryList";
import toast from "react-hot-toast";
import { HiAdjustments } from "react-icons/hi";
import Modal from "./Modal";
import useModalEffects from "../hooks/useModalEffects";

const StyledFilterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap: 2rem;
`;

const StyledFilterButton = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; 
  transition: var(--main-transition);
  cursor: pointer;

  > svg {
    font-size: 2.6rem;
    transform: rotate(90deg);
  }
`;

const StyledFilterBoxesContainer = styled.div`
  width: 100%;
  max-width: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  transition: var(--main-transition);
  background-color: #efefef;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
`;

const StyledFilterBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: var(--main-transition);
`;

const StyledFilterLabel = styled.label`
  font-size: 1.4rem;
  color: #333;
`;

const StyledInput = styled.input`
  max-width: 100%;
  padding: 6px 12px;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: #ececec;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  transition: var(--main-transition);
`;

const StyledCategoryInput = styled.select`
  width: 100%;
  padding: 6px 12px;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: #efefef;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  transition: var(--main-transition);
  cursor: pointer;
`;

const StyledCategoryOption = styled.option``;

const StyledFilterOperationBtn = styled.button`
  width: 100%;
  padding: 7px 12px;
  border-radius: 7px;
  outline: none;
  border: none;
  font-weight: bold;
  color: #efefef;
  background-color: var(--color-btn-green);
  box-shadow: var(--shadow-btn-green);
  transition: var(--main-transition);
  cursor: pointer;
`;

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const priceParam = !searchParams.get("price")
    ? ""
    : Number(searchParams.get("price"));

  const priceMinParam = !searchParams.get("price_min")
    ? ""
    : Number(searchParams.get("price_min"));

  const priceMaxParam = !searchParams.get("price_max")
    ? ""
    : Number(searchParams.get("price_max"));

  const titleParam = !searchParams.get("title")
    ? ""
    : searchParams.get("title");

  const categoryIdParam = !searchParams.get("categoryId")
    ? ""
    : Number(searchParams.get("categoryId"));

  const [showFilter, setShowFilter] = useState(false);
  const [price, setPrice] = useState(priceParam);
  const [priceMin, setPriceMin] = useState(priceMinParam);
  const [priceMax, setPriceMax] = useState(priceMaxParam);
  const [title, setTitle] = useState(titleParam);
  const [category, setCategory] = useState(categoryIdParam);
  const { categories } = useCategoryList();
  const filterRef = useRef();

  useModalEffects(filterRef, showFilter, close);

  function close() {
    setShowFilter(false);
  }

  function handleShowFilter() {
    setShowFilter((show) => !show);
  }

  function handlePrice(e) {
    setPrice(e.target.value);
  }

  function handlePriceMin(e) {
    setPriceMin(e.target.value);
  }

  function handlePriceMax(e) {
    setPriceMax(e.target.value);
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleCategoryChange(e) {
    const value = e.target.value;
    setCategory(value);
    value
      ? searchParams.set("categoryId", value)
      : searchParams.delete("categoryId");
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  function handleApplyParam(param, value) {
    searchParams.set(param, value);
    searchParams.set("page", 1);
  }

  function handleApplyFilter() {
    if (price) handleApplyParam("price", +price);
    if (priceMin) {
      if (!priceMax) {
        toast("please add the max price", {
          icon: "⚠",
        });
      } else {
        handleApplyParam("price_min", +priceMin);
      }
    }
    if (priceMax) {
      if (!priceMin) {
        toast("please add the min price", {
          icon: "⚠",
        });
      } else {
        handleApplyParam("price_max", +priceMax);
      }
    }
    if (title) handleApplyParam("title", title);
    setSearchParams(searchParams);
    close();
  }

  function handleClearFilter() {
    if (priceParam) {
      setPrice("");
      searchParams.delete("price");
    }
    if (priceMinParam) {
      setPriceMin("");
      searchParams.delete("price_min");
    }
    if (priceMaxParam) {
      setPriceMax("");
      searchParams.delete("price_max");
    }
    if (titleParam) {
      setTitle("");
      searchParams.delete("title");
    }
    if (categoryIdParam) {
      setCategory("");
      searchParams.delete("categoryId");
    }
    setSearchParams(searchParams);
    close();
  }

  return (
    <StyledFilterContainer>
      <StyledFilterButton onClick={handleShowFilter}>
        <HiAdjustments />
      </StyledFilterButton>
      {showFilter && (
        <Modal>
          <StyledFilterBoxesContainer ref={filterRef}>
            <>
              <StyledFilterBox>
                <StyledFilterLabel htmlFor="price">Price</StyledFilterLabel>
                <StyledInput
                  type="number"
                  id="price"
                  value={price}
                  onChange={handlePrice}
                  placeholder="Price"
                />
              </StyledFilterBox>

              <StyledFilterBox>
                <StyledFilterLabel htmlFor="priceMin">
                  Minimum price
                </StyledFilterLabel>
                <StyledInput
                  type="number"
                  id="priceMin"
                  value={priceMin}
                  onChange={handlePriceMin}
                  placeholder="Minimum price"
                />
              </StyledFilterBox>

              <StyledFilterBox>
                <StyledFilterLabel htmlFor="priceMax">
                  Maximum price
                </StyledFilterLabel>
                <StyledInput
                  type="number"
                  id="priceMax"
                  value={priceMax}
                  onChange={handlePriceMax}
                  placeholder="Maximum price"
                />
              </StyledFilterBox>

              <StyledFilterBox>
                <StyledFilterLabel htmlFor="title">Title</StyledFilterLabel>
                <StyledInput
                  type="text"
                  id="title"
                  value={title}
                  onChange={handleTitle}
                  placeholder="Title"
                />
              </StyledFilterBox>

              <StyledFilterBox>
                <StyledFilterLabel htmlFor="category">
                  Category
                </StyledFilterLabel>
                <StyledCategoryInput
                  id="category"
                  name="category"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <optgroup label="Category">
                    <StyledCategoryOption value="" key="all">
                      All
                    </StyledCategoryOption>
                    {categories &&
                      categories.length > 0 &&
                      categories.map((category) => (
                        <StyledCategoryOption
                          value={category.id}
                          key={category.id}
                        >
                          {category.name}
                        </StyledCategoryOption>
                      ))}
                  </optgroup>
                </StyledCategoryInput>
              </StyledFilterBox>

              <StyledFilterOperationBtn onClick={handleApplyFilter}>
                Apply
              </StyledFilterOperationBtn>

              <StyledFilterOperationBtn onClick={handleClearFilter}>
                Clear
              </StyledFilterOperationBtn>
            </>
          </StyledFilterBoxesContainer>
        </Modal>
      )}
    </StyledFilterContainer>
  );
}

export default Filter;
