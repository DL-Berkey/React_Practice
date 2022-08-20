import ParameterForm from "./ParameterForm";
import QueryForm from"./QueryForm";
import ReducerPageButton from  "./ReducerPageButton";
import { Home } from "../styles";

const MainPage = () => {
    return (
        <Home>
            <ParameterForm />
            <QueryForm />
            <ReducerPageButton />
        </Home>
    );
}

export default MainPage;