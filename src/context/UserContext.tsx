import { createContext } from "react";
import { UserDataResponse } from "../constants/types";

export const userContext = createContext<UserDataResponse>({ 
    status: 'error',
    data: [],
    amounts: {
        investment_total: 0,
        savings_total: 0,
    },
    activePath: ''
 });
