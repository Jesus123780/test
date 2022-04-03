import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Nav = styled.div`
    /* display: flex; */
    height: auto;
    grid-area: aside;
    transition: 300ms ease;
    background-color: red;
    z-index: 999;
        height: 100%;
        position: absolute;
  
`
export const LinkOption = styled(Link)`
    display: block;
    text-decoration: none;
    font-size: calc(14px + (4 - 4) * ((100px - 320px) / (2000 - 5)));
    padding: 5px 10px;
    padding-left: 10px;
    text-align: left;
    white-space: nowrap;
    margin: 0 30px;
    & > span a {
        user-select: none;
    }
`