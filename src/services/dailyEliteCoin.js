import axios from "axios";

const dailyEliteCoin = async (amount) => {
    try {
        const response = await axios.post(
            `${import.meta.env.BACKEND_URL}/api/v1/wallet/update-coins`,
            {
                amount
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        if (response.data.success) {
            // console.log(response.data.message);
            return response.data.success;
        }
    } catch (error) {
        // console.log(error.response);
    }
};

export { dailyEliteCoin };
