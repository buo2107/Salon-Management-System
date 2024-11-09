import styled, { css } from "styled-components";

const LayoutRow = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

LayoutRow.defaultProps = {
  type: "vertical",
};

export default LayoutRow;
