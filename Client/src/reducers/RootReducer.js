import { combineReducers } from "@reduxjs/toolkit";
import { userLoginReducer, userRegisterReducer } from "./userReducer";

export const rootReducer = combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer
});