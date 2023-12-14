import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux"


const Counter = () => {
    let {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div style={{ paddingLeft: "100vh", paddingTop: "45vh"}}>
            <Button className="h-100 p-2" variant="danger" onClick={() => dispatch({type: "DEC", value: 2})}>Kurang 2</Button>
            {" "} <span className="ms-2 me-2 fw-bold fs-4">{count}</span> {" "}
            <Button className="p-2 h-100"variant="primary" onClick={() => dispatch({type: "INC", value: 5})}>Tambah 5</Button>
        </div>
    );
}

export default Counter;