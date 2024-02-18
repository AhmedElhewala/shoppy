import styled from "styled-components"
import Table from "../../ui/Table"
import Spinner from "../../ui/Spinner"
import useUser from "./useUser"
import UserRow from "./UserRow"

const StyledUserPanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 5rem;
`

function UserPanel() {
  const {isLoading, users} = useUser();

  if (isLoading) return <Spinner />

  return (
    <StyledUserPanel>
      <Table
        columns="0.6fr 1.2fr 1.2fr 2.4fr 1.2fr 1.2fr"
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
          data={users}
          render={(user) => (
            <UserRow user={user} key={user.id} />
          )}
        />
      </Table>
    </StyledUserPanel>
  )
}

export default UserPanel