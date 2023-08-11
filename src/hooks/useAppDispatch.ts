import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();

// export type AppDispatch = typeof store.dispatch
//  export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types