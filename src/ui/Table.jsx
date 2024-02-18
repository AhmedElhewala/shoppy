import { useContext } from "react";
import { createContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  font-size: 1.6rem;
  overflow: hidden;
  transition: var(--main-transition);
  position: relative;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  &::-webkit-scrollbar-horizontal {
    height: 0;
  }
`

const BaseRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
`

const StyledHeader = styled(BaseRow)`
  padding: 8px 12px;
  font-weight: bold;
  border-bottom: 1px solid var(--color-grey-500);
`

const StyledRow = styled(BaseRow)`
  padding: 8px 12px;

  border-bottom: 1px solid var(--color-grey-500);
  &:not(:last-child) {
  }
`

const StyledBody = styled.div`
  font-size: 1.4rem;
`

const StyledEmpty = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  position: relative;
`

const TableContext = createContext();

function Table({columns, children}) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable
        role="table"
      >
        {children}
      </StyledTable>
    </TableContext.Provider>
  )
}

function Header({children}) {
  const { columns } = useContext(TableContext);

  return (
    <StyledHeader
      role="row"
      columns={columns}
      as="header"
    >
      {children}
    </StyledHeader>
  )
}

function Row({children}) {
  const { columns } = useContext(TableContext);

  return (
    <StyledRow
      role="row"
      columns={columns}
    >
      {children}
    </StyledRow>
  );
}

function Body({data, render}) {
  return (
    data.length ?
      <StyledBody>
        {data.map(render)}
      </StyledBody> :
      <StyledEmpty>
        No data to show at the moment
      </StyledEmpty>
  )
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;