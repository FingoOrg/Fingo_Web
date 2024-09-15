import { createContext } from "react";
import { UserContextType } from "../constants/types";

export const userContext = createContext<UserContextType>({
    data: {
        activePath: "",
        amounts: {
            investment_total: 0,
            savings_total: 0
        },
        data: [],
        status: ''
    },
    setData: () => {}
 });
