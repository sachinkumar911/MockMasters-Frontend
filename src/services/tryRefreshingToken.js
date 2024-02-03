import axios from "axios";

const tryRefreshingToken = async () => {
    try {
        const response = await axios.get(
            "http://localhost:8000/api/v1/users/refresh-token",
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        if (response.data.message === "Access token refreshed") {
            // setuserdetail(response.data.data);
            return response.data.data;
        }
        // console.log(response.data);
    } catch (error) {
        // console.log(error.response.data.message);
        // tryRefreshingToken();
        return null;
    }
}

export { tryRefreshingToken };
