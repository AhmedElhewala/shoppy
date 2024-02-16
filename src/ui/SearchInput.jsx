import { useState } from "react"
import styled from "styled-components"
import { useNavigate } from  "react-router-dom"

import { HiOutlineSearch } from "react-icons/hi";
import useCategoryList from "../features/category/useCategoryList";

const StyledSerachContainer = styled.form`
  position: relative;
  font-size: 1.6px;
  display: flex;
  align-items: center;
  gap: 0;
  transition: var(--main-transition);
  order: 1;
  max-width: 70%;

  @media screen and  (max-width: 767px) {
    display: none;
    order: 2;
    max-width: 100%;

    &.show {
      display: flex;
    }
  }
`

const StyledSelectCategoryList = styled.select`
  padding: 8px 10px;
  height: 3.2rem;
  max-width: 30%;
  border-radius: 8px 0 0 8px;
  border: none;
  outline: none;
  background-color: var(--color-grey-700);
  color: var(--color-grey-100);
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  cursor: pointer;
  transition: var(--main-transition);
`

const StyledSelectCategoryOption = styled.option`

`

const StyledSerachInput = styled.input`
  flex: 1;
  padding: 8px 20px;
  height: 3.2rem;
  background-color: #efefef;
  border: none;
  transition: var(--main-transition);
  box-shadow: 0 0 2px 1px var(--color-grey-500);
`

const StyledSerachButton = styled.button`
  padding: 8px 10px;
  height: 3.2rem;
  border-radius: 0 8px 8px 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-700);
  color: var(--color-grey-100);
  font-weight: bold;
  font-size: 1.6rem;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  cursor: pointer;
`

function SearchInput({isShow}) {
  const [searchCategory, setSearchCategory] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const {categories} = useCategoryList();
  const navigate = useNavigate();

  function handleSearchCategoryChange(e) {
    setSearchCategory(e.target.value)
  }

  function handleSearchValueChange(e) {
    setSearchVal(e.target.value)
  }

  function handleSubmitSearch(e) {
    e.preventDefault();
    if (searchVal) {
      navigate(`/search?title=${searchVal}${searchCategory ? "&categoryId=" + searchCategory : ""}`);
    }
  }

  return (
    <StyledSerachContainer
      onSubmit={handleSubmitSearch}
      className={isShow ? "show" : ""}
    >
      <StyledSelectCategoryList
        id="category"
        name="category"
        value={searchCategory}
        onChange={handleSearchCategoryChange}
      >
        <optgroup label="Category">
          <StyledSelectCategoryOption value="" key="all">All</StyledSelectCategoryOption>
          {categories && categories.length > 0 && 
            categories.map(category => (
              <StyledSelectCategoryOption
                value={category.id}
                key={category.id}
              >
                {category.name}
              </StyledSelectCategoryOption>
            ))
          }
        </optgroup>
      </StyledSelectCategoryList>
      <StyledSerachInput
        type="text"
        value={searchVal}
        onChange={handleSearchValueChange}
        placeholder="What product you want ..."
      />
      <StyledSerachButton
        type="submit"
      >
        <HiOutlineSearch />
      </StyledSerachButton>
    </StyledSerachContainer>
  )
}

export default SearchInput