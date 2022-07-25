import styled from "styled-components";

export const Search = styled.div` 
justify-content: center;
    width: 300px;
    margin: 0 auto;
    position: relative;
    display: flex;
`;
  
export const SearchSpan = styled.span`
    width: 10%;
    border: 1px solid #01bf71;
    background: #01bf71;
    padding-top: 4px;
    text-align: center;
    color: #fff;
    border-radius: 5px 0 0 5px;
    font-size: 20px;
`;
  
export const SearchInput = styled.input`
    width: 70%;
    border: 3px solid #01bf71;
    border-left: none;
    padding: 5px;
    border-radius: 0 5px 5px 0;
    outline: none;
`;