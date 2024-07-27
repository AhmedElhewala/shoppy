import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import useCategory from "../category/useCategory";
import { useSearchParams } from "react-router-dom";
import { PAGE_LIMIT } from "../../utilities/constants";
import Pagination from "../../ui/Pagination";
import { useState } from "react";
import CategoryForm from "./CategoryForm";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TableImgWrapper from "../../ui/TableImgWrapper";

const StyledCategoryPanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  &::-webkit-scrollbar-horizontal {
    height: 0;
  }
`;

const StyledDataTable = styled(DataTable)`
  width: 100%;

  .p-datatable-table {
    width: 100%;
  }
  .p-datatable-thead {
    th {
      border: 1px solid var(--color-grey-300) !important;
      padding: 1.5rem 2rem !important;
    }
  }
  .p-datatable-tbody {
    td {
      border: 1px solid var(--color-grey-300) !important;
      padding: 1.5rem 2rem !important;
    }
  }
`;

// const StyledAddProduct = styled.button`
//   width: fit-content;
//   padding: 6px 20px;
//   border-radius: 6px;
//   border: none;
//   outline: none;
//   background-color: var(--color-btn-green);
//   color: #efefef;
//   box-shadow: var(--shadow-btn-green);
//   text-align: center;
//   font-size: 1.4rem;
//   cursor: pointer;
// `;

function CategoryPanel() {
  const { isLoading, categories } = useCategory();
  const [searchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const indexStart = (currentPage - 1) * PAGE_LIMIT;
  const [isAdding, setIsAdding] = useState(false);

  // function handleStartAdding() {
  //   setIsAdding(true);
  // }

  function handleEndAdding() {
    setIsAdding(false);
  }

  if (isLoading || !categories) return <Spinner />;

  const viewedCategories = categories?.slice(
    indexStart,
    indexStart + PAGE_LIMIT
  );

  const renderAvatarWrapper = (rowData) => {
    const rowDataObj = {
      avatar: rowData.avatar,
      image: rowData.image,
      images: rowData.images,
    };

    return <TableImgWrapper rowData={rowDataObj} />;
  };

  return (
    <StyledCategoryPanel>
      <StyledDataTable value={categories}>
        <Column field="id" header="Id" />
        <Column field="name" header="Name" />
        <Column field="image" header="Image" body={renderAvatarWrapper} />
      </StyledDataTable>

      {viewedCategories.length > PAGE_LIMIT && (
        <Pagination
          count={viewedCategories.length}
          length={viewedCategories.length}
        />
      )}

      {categories.length > PAGE_LIMIT && (
        <Pagination
          count={categories.length}
          length={viewedCategories.length}
        />
      )}

      {isAdding && <CategoryForm close={handleEndAdding} isOpen={isAdding} />}
    </StyledCategoryPanel>
  );
}

export default CategoryPanel;
