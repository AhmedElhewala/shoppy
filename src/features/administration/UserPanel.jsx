import styled from "styled-components"
import Table from "../../ui/Table"
import Spinner from "../../ui/Spinner"
import useUser from "./useUser"
import { useSearchParams } from "react-router-dom"
import { PAGE_LIMIT } from "../../utilities/constants"
import Pagination from "../../ui/Pagination"
import UserRow from "./UserRow"

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
  const indexStart = (currentPage - 1) * PAGE_LIMIT;
  
  if (isLoading || !users) return <Spinner />
  
  const viewedUsers = users?.slice(indexStart, indexStart + PAGE_LIMIT);

  return (
    <StyledUserPanel>
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

      {users.length > PAGE_LIMIT &&
        <Pagination 
          count={users.length}
          length={viewedUsers.length}
        />
      }
    </StyledUserPanel>
  )
}

export default UserPanel