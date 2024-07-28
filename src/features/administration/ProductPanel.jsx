import styled from "styled-components";
import Filter from "../../ui/Filter";
import useProductList from "../product/useProductList";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import { PAGE_LIMIT } from "../../utilities/constants";
import ProductForm from "./ProductForm";
import { useRef, useState } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TableImgWrapper from "../../ui/TableImgWrapper";
import useDeleteProduct from "./useDeleteProduct";
import { HiPencil, HiTrash } from "react-icons/hi";
import Modal from "../../ui/Modal";
import useModalEffects from "../../hooks/useModalEffects";

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

const StyledAddProduct = styled.button`
  width: fit-content;
  padding: 6px 20px;
  border-radius: 6px;
  border: none;
  outline: none;
  background-color: var(--color-btn-green);
  color: #efefef;
  box-shadow: var(--shadow-btn-green);
  text-align: center;
  font-size: 1.4rem;
  cursor: pointer;
`;

const StyledOperationsContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
`;

const StyledOperationBtn = styled.span`
  padding: 8px 16px;
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.edit {
    background-color: var(--color-grey-700);
    color: var(--color-grey-100);
    box-shadow: 0 0 4px 2px var(--color-grey-500) inset;
  }

  &.delete,
  &.confirm {
    background-color: var(--color-btn-red);
    color: #efefef;
    box-shadow: 0 0 4px 2px var(--shadow-btn-red);
  }

  &.cancel {
    background-color: var(--color-btn-green);
    color: #efefef;
    box-shadow: var(--shadow-btn-green);
  }

  > svg {
    font-size: 1.8rem;
  }
`;

const StyledConfirmDeleteBox = styled.div`
  width: 100%;
  max-width: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  transition: var(--main-transition);
  background-color: #efefef;
  padding: 3rem 2rem;
  border-radius: 16px;
  box-shadow: 0 0 2px 1px var(--color-grey-500);

  p {
    color: #333;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
    text-wrap: balance;
  }
`;

function ProductPanel() {
  const { isLoading, products, count } = useProductList();
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page"));
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);
  const [deletedProduct, setDeletedProduct] = useState(null);
  const { deleteProduct } = useDeleteProduct();
  const confirmModalRef = useRef();

  useModalEffects(confirmModalRef, isDeleting, () => handleEndDeleting(false));

  function actionBodyTemplate(rowData) {
    return (
      <StyledOperationsContainer>
        <StyledOperationBtn
          className="edit"
          title="Edit"
          onClick={() => handleStartEditing(rowData)}
        >
          <HiPencil />
        </StyledOperationBtn>
        <StyledOperationBtn
          className="delete"
          title="Delete"
          onClick={() => handleStartDeleting(rowData)}
        >
          <HiTrash />
        </StyledOperationBtn>
      </StyledOperationsContainer>
    );
  }

  function handleStartAdding() {
    setIsAdding(true);
  }

  function handleEndAdding() {
    setIsAdding(false);
  }

  function handleStartEditing(product) {
    setEditedProduct(product);
    setIsEditing(true);
  }

  function handleEndEditing() {
    setEditedProduct(null);
    setIsEditing(false);
  }

  function handleStartDeleting(product) {
    setDeletedProduct(product);
    setIsDeleting(true);
  }

  function handleEndDeleting() {
    setDeletedProduct(null);
    setIsDeleting(false);
  }

  const actionHeaderTemplate = () => {
    return (
      <StyledAddProduct onClick={handleStartAdding} className="add-btn">
        Add New Product
      </StyledAddProduct>
    );
  };

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

      <StyledDataTable value={products}>
        <Column field="id" header="Id" />
        <Column field="title" header="Title" />
        <Column field="description" header="Description" />
        <Column field={`category.name`} header="Category" />
        <Column field="price" header="Price" />
        <Column field="images" header="Images" body={renderAvatarWrapper} />
        <Column header={actionHeaderTemplate} body={actionBodyTemplate} />
      </StyledDataTable>

      {!(currentPage == 1 && count <= PAGE_LIMIT) && (
        <Pagination length={products.length} count={count} />
      )}
      {isAdding && <ProductForm close={handleEndAdding} isOpen={isAdding} />}
      {isEditing && (
        <ProductForm
          close={handleEndEditing}
          isOpen={isEditing}
          product={editedProduct}
        />
      )}
      {isDeleting && (
        <Modal>
          <StyledConfirmDeleteBox ref={confirmModalRef}>
            <p>Are you sure you want to delete this product?</p>
            <StyledOperationsContainer>
              <StyledOperationBtn
                className="cancel"
                onClick={handleEndDeleting}
              >
                Cancel
              </StyledOperationBtn>
              <StyledOperationBtn
                className="confirm"
                onClick={() => {
                  deleteProduct(deletedProduct.id);
                  handleEndDeleting();
                }}
              >
                Confirm
              </StyledOperationBtn>
            </StyledOperationsContainer>
          </StyledConfirmDeleteBox>
        </Modal>
      )}
    </StyledProductPanel>
  );
}

export default ProductPanel;
