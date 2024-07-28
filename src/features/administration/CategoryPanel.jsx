import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import useCategory from "../category/useCategory";
import { useSearchParams } from "react-router-dom";
import { PAGE_LIMIT } from "../../utilities/constants";
import Pagination from "../../ui/Pagination";
import { useRef, useState } from "react";
import CategoryForm from "./CategoryForm";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TableImgWrapper from "../../ui/TableImgWrapper";
import { HiPencil, HiTrash } from "react-icons/hi";
import Modal from "../../ui/Modal";
import useDeleteCategory from "./useDeleteCategory";
import useModalEffects from "../../hooks/useModalEffects";

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

// const StyledAddCategory = styled.button`
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

const StyledAddCategory = styled.button`
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

function CategoryPanel() {
  const { isLoading, categories } = useCategory();
  const [searchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const indexStart = (currentPage - 1) * PAGE_LIMIT;
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [editedCategory, setEditedCategory] = useState(null);
  const [deletedCategory, setDeletedCategory] = useState(null);
  const { deleteCategory } = useDeleteCategory();
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

  function handleStartEditing(category) {
    setEditedCategory(category);
    setIsEditing(true);
  }

  function handleEndEditing() {
    setEditedCategory(null);
    setIsEditing(false);
  }

  function handleStartDeleting(category) {
    setDeletedCategory(category);
    setIsDeleting(true);
  }

  function handleEndDeleting() {
    setDeletedCategory(null);
    setIsDeleting(false);
  }

  const actionHeaderTemplate = () => {
    return (
      <StyledAddCategory onClick={handleStartAdding} className="add-btn">
        Add New Category
      </StyledAddCategory>
    );
  };

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
        <Column header={actionHeaderTemplate} body={actionBodyTemplate} />
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
      {isEditing && (
        <CategoryForm
          close={handleEndEditing}
          isOpen={isEditing}
          category={editedCategory}
        />
      )}
      {isDeleting && (
        <Modal>
          <StyledConfirmDeleteBox ref={confirmModalRef}>
            <p>Are you sure you want to delete this category?</p>
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
                  deleteCategory(deletedCategory.id);
                  handleEndDeleting();
                }}
              >
                Confirm
              </StyledOperationBtn>
            </StyledOperationsContainer>
          </StyledConfirmDeleteBox>
        </Modal>
      )}
    </StyledCategoryPanel>
  );
}

export default CategoryPanel;
