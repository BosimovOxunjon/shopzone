import styled from "styled-components";

const StyledSearch = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  background: #003f62;
  .header_logo {
    display: inline-block;
    margin: 0 auto;
    with: 140px;
    height: 40px;
  }
  .search_form {
    position: relative;
    margin-left: 8%;
  }
  .search_form-input {
    position: relative;
    display: inline-block;
    width: 250px;
    padding: 15px 30px;
    border-radius: 20px;
    border: none;
  }
  .search_form-btn {
    position: absolute;
    right: 0;
    padding: 10px 20px;
    border-radius: 20px;
    background: #eda415;
  }
  .search_link {
    color: white;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-transform: capitalize;
    .search_icon {
      // margin-right: 10px;
    }
    .search_counts {
      background: #eda415;
      width: 17.21px;
      height: 20px;
      margin-left: 3px;
      margin-right: 10px;
      border-radius: 10px;
    }
  }
`;
export { StyledSearch };
