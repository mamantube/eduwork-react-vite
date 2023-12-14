import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "../app/store"

const Redux = () => {
    return (
        <div style={{ height: "100vh", alignContent: "center"}}>
            <Provider store={store}>
                <Counter />
            </Provider>
        </div>
    );
}

export default Redux;