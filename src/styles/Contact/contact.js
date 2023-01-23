import styled from "styled-components";

const StyledContact = styled.section`
  display: flex;
  align-items: center;
  min-height: 50px;
  color: #292d32;
  .contact_phone {
    text-decoration: none;
    color: #292d32;
  }
  .contact_info {
    display: flex;
    align-items: center;
    .contact_icon {
      margin-right: 10px;
    }
  }
`;

export { StyledContact };
