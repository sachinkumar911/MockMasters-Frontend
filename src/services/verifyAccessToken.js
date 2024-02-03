import axios from "axios";
import { tryRefreshingToken } from "./tryRefreshingToken";

const verifyAccessToken = async () => {
    try {
        const response = await axios.get(
            "http://localhost:8000/api/v1/users/current-user",
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        if (response.data.message === "User fetched successfully") {
            return response.data.data;
        }
    } catch (error) {
        // console.log(error.response.data.message);
        const data = await tryRefreshingToken();
        return data;
    }
};

export { verifyAccessToken };
