import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Span, Input } from "../styles";

const QueryButton = () => {
    const [ query, setQuery ] = useState("");
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        
        navigate(`/query/?value=${query}`);
    }

    return (
        <Span>
            <Input value={query} onChange={((e) => setQuery(e.target.value))}/>
            <Button onClick={handleClick}>Input Query</Button>
        </Span>
    );
}

export default QueryButton;