import axios from "axios"
const DataFetched = () => async (dispatch) => {
    dispatch({ type: "REQUEST_FETCHDATA" });
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({ type: "COMPLETED", payload: response.data });
    } catch (error) {
        dispatch({ type: "UNSUCESSFULL", error });
    }
};

export default DataFetched;