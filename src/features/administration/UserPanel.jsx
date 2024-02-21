import styled from "styled-components"
import Table from "../../ui/Table"
import Spinner from "../../ui/Spinner"
import useUser from "./useUser"
import { useSearchParams } from "react-router-dom"
import { PAGE_LIMIT } from "../../utilities/constants"
import Pagination from "../../ui/Pagination"
import UserRow from "./UserRow"
import UserFilter from "../../ui/UserFilter"

const StyledUserPanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

function UserPanel() {
  const {isLoading, users} = useUser();
  const [searchParams, ] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
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

  const indexStart = (currentPage - 1) * PAGE_LIMIT;
  let viewedUsers = users;
  let filteredUsers = users;
  
  if (isLoading || !users) return <Spinner />

  
  if (idParam) {
    filteredUsers = users?.filter(user => user.id === idParam);
  }
  
  if (nameParam) {
    filteredUsers = users?.filter(user => user.name.includes(nameParam));
  }
  
  if (emailParam) {
    filteredUsers = users?.filter(user => user.email.includes(emailParam));
  }
  
  if (roleParam) {
    filteredUsers = users?.filter(user => user.role === roleParam);
  }
  
  viewedUsers = filteredUsers?.slice(indexStart, indexStart + PAGE_LIMIT);
  
  return (
    <StyledUserPanel>
      <UserFilter />
      <Table
        columns="6rem 18rem 18rem 24rem 12rem 18rem"
      >
        <Table.Header>
          <span>Id</span>
          <span>Avatar</span>
          <span>Name</span>
          <span>Email</span>
          <span>Role</span>
          <span></span>
        </Table.Header>

        <Table.Body 
          data={viewedUsers}
          render={(user) => (
            <UserRow user={user} key={user.id} />
          )}
        />
      </Table>

      {filteredUsers.length > PAGE_LIMIT && 
        <Pagination 
          count={filteredUsers.length}
          length={viewedUsers.length}
        />
      }
    </StyledUserPanel>
  )
}

export default UserPanel