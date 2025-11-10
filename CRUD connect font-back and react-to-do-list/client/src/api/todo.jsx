const ENDPOINT = "http://localhost:5000/api/todo";
import axios from "axios";

export const getData = async () => await axios.get(ENDPOINT);


export const removeData =async(id) =>
    await axios.delete(ENDPOINT+'/' + id)


export const createData = async(data) =>
    await axios.post(ENDPOINT,data)
