import styled from "styled-components";

const Button = styled.button`
    width: 100px;
    height: 50px;
    background-color: blue;
    color: white;
    font-size: 18px;
    border: none;

    & + & {
        margin-left: 30px;
    }
`

export default Button;