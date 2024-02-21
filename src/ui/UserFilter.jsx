import { useState } from "react";
import { HiAdjustments } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledFilterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap: 2rem;
`


const StyledFilterButton = styled.span`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 2.5rem;
  transition: var(--main-transition);
  cursor: pointer;

  >svg {
    font-size: 2.6rem;
    transform: rotate(90deg);
  }
`

const StyledFilterBox = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: var(--main-transition);

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 45%;
  }
`

const StyledFilterBoxesContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: end;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  transition: var(--main-transition);
`

const StyledFilterLabel = styled.label`
  font-size: 1.4rem;
`

const StyledInput = styled.input`
  max-width: 100%;
  padding: 6px 12px;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: #efefef;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  transition: var(--main-transition);
`

const StyledRoleSelect = styled.select`
  width: 100%;
  padding: 6px 12px;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: #efefef;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  transition: var(--main-transition);
  cursor: pointer;
`

const StyledRoleOption = styled.option`
  
`

const StyledFilterOperationBtn = styled.button`
  width: 18%;
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
  
  @media screen and (max-width: 480px) {
    width: 100%;
  }
  
  @media (min-width: 481px) and (max-width: 767px) {
    width: 45%;
    margin-top: 1rem;
  }
`

function UserFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const idParam = !searchParams.get("id")
  ? ""
  : Number(searchParams.get("id"));
  const nameParam = !searchParams.get("name")
  ? ""
  : searchParams.get("name");
  const emailParam = !searchParams.get("email")
  ? ""
  : searchParams.get("email");
  const roleParam = !searchParams.get("role")
  ? ""
  : searchParams.get("role");

  const [showFilter, setShowFilter] = useState(false);
  const [id, setId] = useState(idParam);
  const [name, setName] = useState(nameParam);
  const [email, setEmail] = useState(emailParam);
  const [role, setRole] = useState(roleParam);

  function handleShowFilter() {
    setShowFilter(show => !show);
  }

  function handleIdChange(e) {
    const value = e.target.value;
    setId(value);
  }

  function handleNameChange(e) {
    const value = e.target.value;
    setName(value);
  }

  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);
  }

  function handleRoleChange(e) {
    const value = e.target.value;
    setRole(value);
  }

  function handleApplyParam(param, value) {
    searchParams.set(param, value);
    searchParams.set("page", 1);
  }

  function handleApplyFilter() {
    if (id) handleApplyParam("id", id);
    if (name) handleApplyParam("name", name);
    if (email) handleApplyParam("email", email);
    if (role) {
      handleApplyParam("role", role);
    } else if (role === "") {
      searchParams.delete("role");
    }
    setSearchParams(searchParams);
  }

  function handleClearFilter() {
    if (id) {
      setId("");
      searchParams.delete("id");
    }
    if (name) {
      setName("");
      searchParams.delete("name");
    }
    if (email) {
      setEmail("");
      searchParams.delete("email");
    }
    if (role) {
      setRole("");
      searchParams.delete("role");
    }
    setSearchParams(searchParams);
  }

  return (
    <StyledFilterContainer>
      <StyledFilterButton
        onClick={handleShowFilter}
      >
        <HiAdjustments />
      </StyledFilterButton>

      {showFilter &&
        <StyledFilterBoxesContainer>
          <>
          <StyledFilterBox>
              <StyledFilterLabel htmlFor="id">
                Id
              </StyledFilterLabel>
              <StyledInput 
                type="number"
                id="id"
                value={id}
                onChange={handleIdChange}
                placeholder="User Id"
              />
            </StyledFilterBox>

            <StyledFilterBox>
              <StyledFilterLabel htmlFor="name">
                Name
              </StyledFilterLabel>
              <StyledInput 
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                placeholder="User Name"
              />
            </StyledFilterBox>

            <StyledFilterBox>
              <StyledFilterLabel htmlFor="email">
                Email
              </StyledFilterLabel>
              <StyledInput 
                type="text"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="User Email"
              />
            </StyledFilterBox>

            <StyledFilterBox>
              <StyledFilterLabel htmlFor="role">
                Role
              </StyledFilterLabel>
              <StyledRoleSelect
                id="role"
                value={role}
                onChange={handleRoleChange}
              >
                <StyledRoleOption
                  key="all"
                  value=""
                >
                  All
                </StyledRoleOption>
                <StyledRoleOption
                  key="admin"
                  value="admin"
                >
                  Admin
                </StyledRoleOption>
                <StyledRoleOption
                  key="customer"
                  value="customer"
                >
                  Customer
                </StyledRoleOption>
              </StyledRoleSelect>
            </StyledFilterBox>

            <StyledFilterOperationBtn
              onClick={handleApplyFilter}
            >
              Apply
            </StyledFilterOperationBtn>

            <StyledFilterOperationBtn
              onClick={handleClearFilter}
            >
              Clear
            </StyledFilterOperationBtn>
          </>
        </StyledFilterBoxesContainer>
      }
    </StyledFilterContainer>
  )
}

export default UserFilter