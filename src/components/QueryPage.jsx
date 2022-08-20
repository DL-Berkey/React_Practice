import { Link, useSearchParams} from "react-router-dom";
import { Span } from "../styles";

const QueryPage = () => {
    const [ query, setQuery] = useSearchParams();

    return (
        <Span>
            <p>당신이 입력한 쿼리: {query.get("value")}</p>
            <Link to="/">Home</Link>
        </Span>
    );
}

export default QueryPage;