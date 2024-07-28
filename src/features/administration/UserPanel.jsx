import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import useUser from "./useUser";
import { useSearchParams } from "react-router-dom";
import { PAGE_LIMIT } from "../../utilities/constants";
import Pagination from "../../ui/Pagination";
import UserFilter from "../../ui/UserFilter";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TableImgWrapper from "../../ui/TableImgWrapper";
import useUpdateRole from "./userUpdateRole";
import { useRef, useState } from "react";
import Modal from "../../ui/Modal";
import useModalEffects from "../../hooks/useModalEffects";
import { HiPencil } from "react-icons/hi";

const StyledUserPanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
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

const StyledEditingBox = styled.div`
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

const StyledUserRoleSelect = styled.select`
  width: 100%;
  padding: 8px 12px;
  text-indent: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  background-color: #fefefe;
  color: #000;
  border: none;
  outline: none;
  font-weight: bold;
  transition: var(--main-transition);
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 6px 1px var(--color-grey-500);
  }

  &:disabled {
    background-color: #ccc;
    font-weight: bold;
  }
`;

function UserPanel() {
  const { isLoading, users } = useUser();
  const [searchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const idParam = !searchParams.get("id") ? "" : Number(searchParams.get("id"));
  const nameParam = !searchParams.get("name") ? "" : searchParams.get("name");
  const emailParam = !searchParams.get("email")
    ? ""
    : searchParams.get("email");
  const roleParam = !searchParams.get("role") ? "" : searchParams.get("role");

  const indexStart = (currentPage - 1) * PAGE_LIMIT;
  let viewedUsers = users;
  let filteredUsers = users;
  const { updateRole } = useUpdateRole();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
  const editingModalRef = useRef();
  const [roleValue, setRoleValue] = useState(editedUser?.role);

  useModalEffects(editingModalRef, isEditing, () => setIsEditing(false));

  function handleStartEditing(user) {
    setEditedUser(user);
    setIsEditing(true);
  }

  function handleEndEditing() {
    setEditedUser(null);
    setIsEditing(false);
  }

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
      </StyledOperationsContainer>
    );
  }

  function handleRoleChange(e) {
    console.log("User role updated to:", e.target.value);
    setRoleValue(e.target.value);
  }

  if (isLoading || !users) return <Spinner />;

  if (idParam) {
    filteredUsers = users?.filter((user) => user.id === idParam);
  }

  if (nameParam) {
    filteredUsers = users?.filter((user) => user.name.includes(nameParam));
  }

  if (emailParam) {
    filteredUsers = users?.filter((user) => user.email.includes(emailParam));
  }

  if (roleParam) {
    filteredUsers = users?.filter((user) => user.role === roleParam);
  }

  viewedUsers = filteredUsers?.slice(indexStart, indexStart + PAGE_LIMIT);

  const renderAvatarWrapper = (rowData) => {
    const rowDataObj = {
      avatar: rowData.avatar,
      image: rowData.image,
      images: rowData.images,
    };

    return <TableImgWrapper rowData={rowDataObj} />;
  };

  function handleSubmitChange() {
    console.log("User role updated to:", editedUser?.role);
    console.log("User role updated to:", roleValue);
    if (!editedUser?.role) {
      setIsEditing(false);
      return;
    }
    if (editedUser?.role !== roleValue) {
      updateRole(
        { id: editedUser?.id, roleValue: editedUser?.role },
        {
          onSettled: () => {
            setIsEditing(false);
          },
        }
      );
    }
  }

  return (
    <StyledUserPanel>
      <UserFilter />
      <StyledDataTable value={viewedUsers}>
        <Column field="id" header="Id" />
        <Column field="avatar" header="Avatar" body={renderAvatarWrapper} />
        <Column field="email" header="Email" />
        <Column field="role" header="Role" />
        <Column header="" body={actionBodyTemplate} />
      </StyledDataTable>

      {filteredUsers.length > PAGE_LIMIT && (
        <Pagination count={filteredUsers.length} length={viewedUsers.length} />
      )}
      {isEditing && (
        <Modal>
          <StyledEditingBox ref={editingModalRef}>
            <p>What role would you like to change this user to?</p>
            <StyledUserRoleSelect
              name="role"
              value={editedUser?.role}
              onChange={handleRoleChange}
              disabled={!isEditing}
            >
              <option value="admin" key="admin">
                admin
              </option>
              <option value="customer" key="customer">
                customer
              </option>
            </StyledUserRoleSelect>
            <StyledOperationsContainer>
              <StyledOperationBtn className="cancel" onClick={handleEndEditing}>
                Cancel
              </StyledOperationBtn>
              <StyledOperationBtn
                className="confirm"
                onClick={() => {
                  handleSubmitChange();
                  handleEndEditing();
                }}
              >
                Confirm
              </StyledOperationBtn>
            </StyledOperationsContainer>
          </StyledEditingBox>
        </Modal>
      )}
    </StyledUserPanel>
  );
}

export default UserPanel;
