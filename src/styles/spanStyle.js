import styled from "styled-components";

const Span = styled.span`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;

    & + & {
        margin-left: 30px;
    }
`

export default Span;