import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    padding: 0 15px;
  }
`;

export const HeaderMenu = styled.div`
  width: 100%;
  color: #aaa;
  background: #eee;
  ul {
    list-style: none;
    li {
      display: inline-block;
      padding: 5px;
      a{
          display: inline-block;
        text-decoration:none;
        font-size:20px;
        transition:.3s;
        color:#333;
        padding:5px;
        line-height:1;
        &:hover{
            color:#aaa;
        }
        &.act{
            background:#333;
            color:#fff;
        }
      }
    }
  }
`;
