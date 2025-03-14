// redux/Provider.js
"use client"; // Ensures it runs in client-side

import { Provider } from "react-redux";
import store from "@/store/store";

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
