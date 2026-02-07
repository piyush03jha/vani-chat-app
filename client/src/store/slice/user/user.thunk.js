import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserById = createAsyncThunk("users/fetchById", async () => {
    console.log("hello");
})

export const loginUserThunk = createAsyncThunk("users/login", async () => {
    console.log("hi");
})