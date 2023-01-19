import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 90px;
  background: #f4f4f4;
  .header_logo {
    display: inline-block;
    margin: 0 auto;
    with: 140px;
    height: 40px;
  }
  .header_link {
    color: #003f62;
    font-size: 12px;
    font-weight: 600;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
export { StyledHeader };
