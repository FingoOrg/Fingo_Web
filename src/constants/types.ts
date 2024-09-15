import { Dispatch, SetStateAction } from "react";

export type Route = {
  path: string;
  name: string;
  icon: string;
};

export type NodeInfo = {
  type: string;
  title: string;
  description: string;
  status: 'active' | 'locked' | 'completed';
};

export type UserData = {
  name: string;
};

// Types for the API Response
export type Plan = {
  id: number;
  title: string;
  description: string;
  type: string;
  amount: number;
  due_date: string;
  status: boolean;
};

export type FormData = {
  question: string;
  answer: string;
  position: number;
};

export type Badge = {
  title: string;
  type: string;
  description: string;
};

export type API = {
  bedrock_response: Plan[] | string;
  path_id: string;
  user_id: string;
  form_data: FormData[];
  badges: Badge[];
};

// Type for the overall response body
export type UserDataResponse = {
  status: string;
  data: API[];
  amounts: {
    investment_total: number,
    savings_total: number,
  };
  activePath: string;
};

export type APIResponse = {
  statusCode: number;
  body: string;
  amounts: {
    investment_total: number,
    savings_total: number,
  };
};

// Context Type for userContext
export type UserContextType = {
  setData: Dispatch<SetStateAction<UserDataResponse>>;
  data: UserDataResponse
};

