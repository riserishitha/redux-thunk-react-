import DataFetched from "./reduxComponents/actionCallBack";
import { useDispatch, useSelector } from "react-redux";
function App() {
    const dispatch = useDispatch();
    const fetchedData = useSelector((state) => state);
    console.log(fetchedData);
    return (
        <div>
            <div style={{textAlign:"center"}}>
            <button onClick={() => dispatch(DataFetched())}>Fetch Data</button>
            </div>
            {fetchedData.items.map((infro, id) => {
                return (
                    <div key={id}>
                        <h1 style={{textAlign:"center"}}>{infro.name}</h1>
                        <h2 style={{textAlign:"center"}}>{infro.email}</h2>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export default App;