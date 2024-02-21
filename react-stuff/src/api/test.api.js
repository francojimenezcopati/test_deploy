import axios from "axios";

// const TESTS_API_URL = "http://127.0.0.1:8000/api/v1/tests/";
const TESTS_API_URL = "https://testdeploy.up.railway.app/api/v1/tests/";

const testsApi = axios.create({
    baseURL: TESTS_API_URL,
});

export const getAllTests = () => testsApi.get("/");
