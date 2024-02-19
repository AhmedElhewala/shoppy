import styled from "styled-components";
import Table from "../../ui/Table";
import { HiOutlineCheck, HiOutlineRefresh, HiPencil } from "react-icons/hi";
import { useState } from "react";
import useUpdateRole from "./userUpdateRole";

const StyledId = styled.span`
  font-weight: bold;
`

const StyledImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
`

const StyledName = styled.span`

`

const StyledEmail = styled.span`
  
`

const StyledRole = styled.span`
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--color-grey-800);
`

const StyledRoleSelect = styled.select`
  width: 80%;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: var(--color-grey-300);
  color: var(--color-grey-700);
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  position: relative;
  cursor: pointer;
`

const StyledRoleOption = styled.option`
  
`

const StyledOperationsContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  position: relative;
`

const StyledOperationBtn = styled.span`
  padding: 6px 20px;
  border-radius: 6px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  font: bold;

  &.edit {
    background-color: var(--color-grey-700);
    color: var(--color-grey-100);
    box-shadow: 0 0 4px 2px var(--color-grey-500) inset;
  }

  &.submit {
    background-color: var(--color-btn-green);
    color: #efefef;
    box-shadow: var(--shadow-btn-green);
  }

  >svg {
    font-size: 1.8rem;
  }
`

function UserRow({ user }) {
  const {id, avatar, name, email, role} = user;
  const { updateRole } = useUpdateRole()
  const [userRole, setUserRole] = useState(user?.role);
  const [isEditing, setIsEditing] = useState(false);

  
  function handleRoleChange(e) {
  console.log("User role updated to:", e.target.value);
    setUserRole(e.target.value)
  }
  
  function handleStartEditing() {
    setIsEditing(true);
  }
  
  function handleReset() {
    setUserRole(role);
  }
  
  function handleSubmitChange() {
    console.log(role);
    console.log(userRole);
    if (!userRole) {
      setIsEditing(false);
      return;
    }
    if (userRole !== role) {
      updateRole(
        {id, role: userRole},
        {onSettled: () => {
          setIsEditing(false);
        },
        onError: () => {
          handleReset();
        }
        }
      )
    }
  }

  return (
    <Table.Row>
      <StyledId>{id}</StyledId>
      <StyledImg 
        src={avatar}
        alt={name}
      />
      <StyledName>{name}</StyledName>
      <StyledEmail>{email}</StyledEmail>
      {isEditing ? 
        <StyledRoleSelect
          name="role"
          value={userRole}
          onChange={handleRoleChange}
          disabled={!isEditing}
        >
          <StyledRoleOption 
            value="admin"
            key="admin"
            >
            admin
          </StyledRoleOption>
          <StyledRoleOption
            value="customer"
            key="customer"
          >
            customer
          </StyledRoleOption>
        </StyledRoleSelect> :
        <StyledRole>
          {role}
        </StyledRole>
      }
      <StyledOperationsContainer
      >
        {isEditing ?
          <>
            <StyledOperationBtn 
              className="edit"
              title="Reset"
              onClick={handleReset}
            >
              <HiOutlineRefresh />
            </StyledOperationBtn>
            <StyledOperationBtn 
              className="submit"
              title="Submit role"
              onClick={handleSubmitChange}
            >
              <HiOutlineCheck />
            </StyledOperationBtn>
          </> : 
          <StyledOperationBtn 
            className="edit"
            title="Edit role"
            onClick={handleStartEditing}
          > 
            <HiPencil />
            Edit Role
          </StyledOperationBtn>
        }
      </StyledOperationsContainer>
    </Table.Row>
  )
}

export default UserRow