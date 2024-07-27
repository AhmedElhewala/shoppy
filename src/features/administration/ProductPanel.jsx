import styled from "styled-components";
import Filter from "../../ui/Filter";
import useProductList from "../product/useProductList";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import { PAGE_LIMIT } from "../../utilities/constants";
import ProductForm from "./ProductForm";
import { useState } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TableImgWrapper from "../../ui/TableImgWrapper";

const StyledProductPanel = styled.div`
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

  /* .p-paginator {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 3rem;

    button {
      padding: 6px;
      border-radius: 6px;
      color: var(--color-grey-900);
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        color: var(--color-grey-100);
        box-shadow: 0 0 2px 1px var(--color-grey-500);
        font-weight: bold;
        background-color: var(--color-grey-600);
      }
      &.p-disabled {
        color: var(--color-grey-400);
      }
    }

    span {
      display: flex;
      align-items: center;
      gap: 1rem;

      button {
        padding: 6px 12px;
        border-radius: 6px;
        color: var(--color-grey-900);

        &:hover,
        &.p-highlight {
          color: var(--color-grey-100);
          box-shadow: 0 0 2px 1px var(--color-grey-500);
          font-weight: bold;
          background-color: var(--color-grey-600);
        }
      }
    }

    .p-dropdown {
      padding: 6px 12px;
      border-radius: 6px;
      background-color: var(--color-grey-800);
      color: var(--color-grey-100);
      box-shadow: 0 0 2px 1px var(--color-grey-500);
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      svg {
        font-size: 1.4rem;
      }
    }
  } */

  .p-datatable-wrapper {
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
    &::-webkit-scrollbar-horizontal {
      height: 0;
    }
  }

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

function ProductPanel() {
  const { isLoading, products, count } = useProductList();
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page"));
  const [isAdding, setIsAdding] = useState(false);

  // function handleStartAdding() {
  //   setIsAdding(true);
  // }

  function handleEndAdding() {
    setIsAdding(false);
  }

  const renderAvatarWrapper = (rowData) => {
    const rowDataObj = {
      avatar: rowData.avatar,
      image: rowData.image,
      images: rowData.images,
    };

    return <TableImgWrapper rowData={rowDataObj} />;
  };

  if (isLoading || !products) return <Spinner />;

  return (
    <StyledProductPanel>
      <Filter />

      <StyledDataTable value={products} stripedRows>
        <Column field="id" header="Id" />
        <Column field="title" header="Title" />
        <Column field="description" header="Description" />
        <Column field={`category.name`} header="Category" />
        <Column field="price" header="Price" />
        <Column field="images" header="Images" body={renderAvatarWrapper} />
      </StyledDataTable>

      {!(currentPage == 1 && count <= PAGE_LIMIT) && (
        <Pagination length={products.length} count={count} />
      )}
      {isAdding && <ProductForm close={handleEndAdding} isOpen={isAdding} />}
    </StyledProductPanel>
  );
}

export default ProductPanel;
