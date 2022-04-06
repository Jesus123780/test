import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  /* display: flex; */
  height: auto;
  grid-area: aside;
  transition: 300ms ease;
  background-color: #212529;
  z-index: 999;
  height: 100%;
  position: absolute;
  overflow-x: hidden;
  width: 150px;
`;
export const LinkOption = styled(Link)`
  display: block;
  border-bottom: 2px solid #707070;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  padding: 5px 0px;
  padding-left: 5px;
  text-align: left;
  white-space: nowrap;
  justify-content: center;
  
  width: auto;
  & > span a {
    user-select: none;
  }
  & :hover {
    color: #000;
  }
`;
export const Divli = styled.li`
  width: auto;
  text-decoration: none;
  margin 10px 0px;
  {list-style:none;

  & :hover {

    background-color: #000;
    color: #fff;
    border-radius: 12%;
  }
`;
