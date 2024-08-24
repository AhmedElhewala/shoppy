import styled from "styled-components";
import useCategoryList from "../features/category/useCategoryList";
import HomeProductSection from "../ui/HomeProductSection";

const StyledHomeMainContainer = styled.main`
  width: calc(100% - 6rem);
  padding: 40px 40px 80px;
  min-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media screen and (max-width: 767px) {
    padding: 40px 16px 80px;
  }
`;

const HomeMainHeading = styled.h1`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 2.2rem;
  position: relative;
  text-wrap: balance;
  text-align: center;
  filter: drop-shadow(0 0 1px var(--color-grey-600));

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background-color: var(--color-grey-400);
    position: absolute;
    bottom: -2rem;
    left: 0;
  }

  > svg {
    color: var(--color-btn-red);
    filter: drop-shadow(0 0 1px var(--color-btn-red));
  }
`;

function Home() {
  const { categories } = useCategoryList();

  console.log(categories);

  return (
    <StyledHomeMainContainer>
      <HomeMainHeading>
        Shop at home, hope you find your needs ❤
      </HomeMainHeading>
      {categories?.length > 0 &&
        categories.map((category) => (
          <HomeProductSection key={category.id} category={category} />
        ))}
    </StyledHomeMainContainer>
  );
}

export default Home;
