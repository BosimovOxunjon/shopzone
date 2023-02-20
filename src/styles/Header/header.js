import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  min-height: 90px;
  .header_logo {
    display: inline-block;
    margin: 0 auto;
    width: 140px;
    height: 40px;
  }
  .header_link {
    color: #003f62;
    font-size: 12px;
    font-weight: 600;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
export { StyledHeader };
