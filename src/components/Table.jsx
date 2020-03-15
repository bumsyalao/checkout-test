import React from 'react';
import styled from 'styled-components';

const users = [
  { id: 1, name: 'Wasif', email: 'wasif@email.com' },
  { id: 2, name: 'Ali', email: 'ali@email.com' },
  { id: 3, name: 'Saad', email: 'saad@email.com' },
  { id: 4, name: 'Asad', email: 'asad@email.com' }
];
const headers = Object.keys(users[0]);

const StyleTable = styled.div`
  margin-top: 40px;
`;
const StyledTableHeader = styled.div`
  color: white;
  border: none;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  padding: 1px;
  background-color: #00B48F;
  width: 100px;
  letter-spacing: 3px;
`;
const StyledTableContent = styled.table`
  border-collapse: collapse;
`;
const StyledTableBody = styled.tbody`
  font-family: 'Noto Serif',serif;
`;
const StyledTableRow = styled.tr`
  &:hover {
    background-color:#f5f5f5;
  }
`;
const StyledTableRowHead = styled.th`
  font-weight: normal !important;
  font-size: 10px !important;
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;
const StyledTableData = styled.td`
  padding: 8px;
  text-align: left;
  font-size: 10px;
  border-bottom: 1px solid #ddd;
`;

const Table = () => {
  return (
    <StyleTable>
      <StyledTableHeader>Active users</StyledTableHeader>
      <StyledTableContent>
        <StyledTableBody>
          {headers.map((key, index) => <StyledTableRowHead key={index}>{key.toUpperCase()}</StyledTableRowHead>)}
          {users.map(({ id, name, email }) =>
            <StyledTableRow key={id}>
              <StyledTableData>{id}</StyledTableData>
              <StyledTableData>{name}</StyledTableData>
              <StyledTableData>{email}</StyledTableData>
            </StyledTableRow>
          )}
        </StyledTableBody>
      </StyledTableContent>
    </StyleTable>
  )
}

export default Table;
