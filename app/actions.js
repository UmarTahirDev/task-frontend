"use server"

import axios from "axios";

export async function getMessage() {
    const baseUrl = process.env.BACKEND_URL;
    const res = await axios.get(`${baseUrl}/api/message`);
    return res.data;
}