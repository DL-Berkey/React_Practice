import styled from "styled-components";

const Button = styled.button`
    width: fit-content;
    height: 50px;
    background-color: blue;
    color: white;
    font-size: 18px;
    border: none;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

export default Button;