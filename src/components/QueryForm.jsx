import { useState } from "react"
import { Button, Span, Input } from "../styles";

const QueryButton = () => {
    const [ query, setQuery ] = useState(undefined);

    return (
        <Span>
            <Input value={query} onChange={((e) => setQuery(e.target.value))}/>
            <Button>Setting Query</Button>
        </Span>
    );
}

export default QueryButton;