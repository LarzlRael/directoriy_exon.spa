import styled from "styled-components";
const FlexContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: ${(props) => (props.small ? "column" : "row")};
  gap: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background: var(--white);
  padding: 20px;
  border-radius: 10px;
  & .StyledDropzone__fields {
    width: ${(props) => (props.small ? "100%" : "50%")};
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    & .StyledDropzone__fields {
      width: 100%;
    }
  }
`;

export default FlexContainer;
