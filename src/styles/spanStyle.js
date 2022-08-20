import styled from "styled-components";

const Span = styled.span`
    display: flex;
    flex-direction: column;

    & + & {
        margin-left: 30px;
    }
`

export default Span;