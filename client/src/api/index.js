import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api",
});

export const UserSignUp = async (data) => API.post("/user/signup", data);
export const UserSignIn = async (data) => API.post("/user/signin", data);

export const getDashboardDetails = async (token) =>
     API.get("/user/dashboard", {
        headers: { Authorization: `Bearer ${token}`}
     });

export const getWorkouts = async (token) =>
     API.get("/user/dashboard", {
        headers: { Authorization: `Bearer ${token}`}
     });

export const addWorkout = async (token) =>
     API.get("/user/dashboard", {
        headers: { Authorization: `Bearer ${token}`}
     });
