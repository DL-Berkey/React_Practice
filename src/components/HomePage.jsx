import ParameterForm from "./parameter/ParameterForm";
import QueryForm from"./query/QueryForm";
import ReducerButton from  "./reducer/ReducerButton";
import AsyncButton from "./async/AsyncButton";

import { Home } from "../styles";

const MainPage = () => {
    return (
        <Home>
            <ParameterForm />
            <QueryForm />
            <ReducerButton />
            <AsyncButton />
        </Home>
    );
}

export default MainPage;