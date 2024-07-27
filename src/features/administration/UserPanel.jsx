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

  return (
    <StyledUserPanel>
      <UserFilter />
      <StyledDataTable value={viewedUsers}>
        <Column field="id" header="Id" />
        <Column field="avatar" header="Avatar" body={renderAvatarWrapper} />
        <Column field="email" header="Email" />
        <Column field="role" header="Role" />
      </StyledDataTable>

      {filteredUsers.length > PAGE_LIMIT && (
        <Pagination count={filteredUsers.length} length={viewedUsers.length} />
      )}
    </StyledUserPanel>
  );
}

export default UserPanel;
