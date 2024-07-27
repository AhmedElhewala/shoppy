import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { PAGE_LIMIT } from "../utilities/constants";
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

const StyledPaginationDiv = styled.div`
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4rem;
  transition: var(--main-transition);

  @media screen and (max-width: 767px) {
    justify-content: center;
  }

  > span {
    cursor: pointer;
  }
`;

const StyledPaginationCounter = styled.div`
  transition: var(--main-transition);

  > span {
    font-weight: bold;
  }
`;

const NavBtn = styled.span`
  padding: 6px 16px;
  border-radius: 6px;
  background-color: var(--color-grey-800);
  color: var(--color-grey-100);
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  font-size: 1.4rem;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: var(--main-transition);

  @media screen and (max-width: 767px) {
    padding: 6px 12px;
  }

  &.disabled {
    background-color: transparent;
    box-shadow: none;
    color: var(--color-grey-600);
    cursor: not-allowed;
  }

  > svg {
    font-size: 1.6rem;
  }
`;

const StyledPaginationNav = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const PaginationNumbersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: var(--main-transition);

  > span {
    display: inline-block;
  }

  &.shrink {
    > span {
      display: none;
    }

    > span:first-child,
    > span:last-child,
    > span.show {
      display: inline-block;
    }
  }
`;

const PaginationNumber = styled.span`
  padding: 6px;
  border-radius: 4px;
  color: var(--color-grey-900);
  cursor: pointer;
  transition: var(--main-transition);
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active,
  &:hover {
    color: var(--color-grey-100);
    box-shadow: 0 0 2px 2px var(--color-grey-500);
    font-weight: bold;

    > svg {
      color: var(--color-grey-100);
    }
  }

  &.active {
    background-color: var(--color-grey-600);
  }

  &:hover {
    &:not(.active) {
      background-color: var(--color-grey-800);
    }
  }

  > svg {
    color: var(--color-grey-900);
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

function Pagination({ length, count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pagesCount = Math.ceil(count / PAGE_LIMIT);
  const hasNext = currentPage < pagesCount;
  const hasPrev = currentPage > 1;

  function handlePageNumber(number) {
    searchParams.set("page", number);
    setSearchParams(searchParams);
  }

  function getPage(index) {
    if (index !== currentPage) {
      handlePageNumber(index);
    }
  }

  function getPrev() {
    if (hasPrev) {
      handlePageNumber(currentPage - 1);
    }
  }

  function getNext() {
    if (hasNext) {
      handlePageNumber(currentPage + 1);
    }
  }

  return (
    <StyledPaginationDiv>
      <StyledPaginationCounter>
        Items from <span>{(currentPage - 1) * PAGE_LIMIT + 1} </span>
        to{" "}
        <span>{length < PAGE_LIMIT ? count : currentPage * PAGE_LIMIT} </span>
        of <span>{count}</span>
      </StyledPaginationCounter>

      <StyledPaginationNav>
        <NavBtn
          className={!hasPrev ? "disabled" : ""}
          onClick={() => {
            getPrev();
          }}
        >
          <HiChevronLeft />
          prev
        </NavBtn>
        <PaginationNumbersContainer className={pagesCount > 5 ? "shrink" : ""}>
          {Array.from({ length: pagesCount }, (_, index) => (
            <PaginationNumber
              key={index + 1}
              className={`
                ${index + 2 === currentPage ? "show" : ""}
                ${index + 1 === currentPage ? "active show" : ""}
                ${
                  index + 1 === currentPage + 1 && index + 1 < pagesCount
                    ? "show"
                    : ""
                }
              `}
              onClick={() => {
                getPage(index + 1);
                handlePageNumber(index + 1);
              }}
            >
              {index + 1 === 1 && currentPage > 2 ? (
                <HiChevronDoubleLeft />
              ) : index + 1 === pagesCount && currentPage < pagesCount - 1 ? (
                <HiChevronDoubleRight />
              ) : (
                index + 1
              )}
            </PaginationNumber>
          ))}
        </PaginationNumbersContainer>
        <NavBtn
          className={!hasNext ? "disabled" : ""}
          onClick={() => {
            getNext();
          }}
        >
          next
          <HiChevronRight />
        </NavBtn>
      </StyledPaginationNav>
    </StyledPaginationDiv>
  );
}

export default Pagination;
