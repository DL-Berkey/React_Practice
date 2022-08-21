import { Link, useSearchParams} from "react-router-dom";
import { Span } from "../../styles";
import QueryForm from "./QueryForm";

const QueryPage = () => {
    const [ query, setQuery] = useSearchParams();

    return (
        <Span>
            <h1>URL을 확인해보세요!</h1>
            <p>당신이 입력한 쿼리: {query.get("value")}</p>
            <QueryForm />
            <Link to="/">Home</Link>
        </Span>
    );
}

export default QueryPage;