import styled from "styled-components";
import { Avatar, Flex } from "@adobe/react-spectrum";
import {
  Cell as RCell,
  Column as RColumn,
  Row,
  Table as RTable,
  TableBody as RTBody,
  TableHeader as RTHeader,
} from "react-aria-components";
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import Tag from "../../ui/Tag";

const Table = styled(RTable)`
  border: 1px solid var(--color-grey-200);
  font-size: 1.6rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled(RTHeader)`
  text-align: left;
  background-color: var(--color-grey-50);
  letter-spacing: 10px;
  color: var(--color-grey-600);
`;

const Column = styled(RColumn)`
  padding: 1.6rem 2.4rem;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid var(--color-grey-200);
`;

const TableBody = styled(RTBody)`
  margin: 0.4rem 0;
`;

const Cell = styled(RCell)`
  padding: 1.2rem 2.4rem;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
  letter-spacing: 4px;
`;

function GuestTable() {
  return (
    <Table aria-label="guest files">
      <TableHeader>
        <Column isRowHeader>名字</Column>
        <Column>類型</Column>
        <Column>性別</Column>
        <Column>電話號碼</Column>
        <Column>最後消費日</Column>
        <Column></Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>
            <Flex
              width="auto"
              direction="row"
              alignItems="center"
              justifyContent="start"
              gap="30px"
            >
              <Avatar src="default-user.jpg" size={50} />
              <span>王曉明</span>
            </Flex>
          </Cell>
          <Cell>
            <Tag type="yellow">VIP</Tag>
          </Cell>
          <Cell>男</Cell>
          <Cell>0266484465</Cell>
          <Cell>2024/5/5</Cell>
          <Cell>
            <ButtonIcon>
              <HiOutlineEllipsisHorizontal />
            </ButtonIcon>
          </Cell>
        </Row>
      </TableBody>
    </Table>
  );
}

export default GuestTable;
