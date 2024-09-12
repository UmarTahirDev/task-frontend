// app/actions.js
"use server";

import axios from "axios";

export async function getMessage() {
  const baseUrl = process.env.BACKEND_URL;

  // Ensure that BACKEND_URL is defined
  if (!baseUrl) {
    throw new Error("BACKEND_URL environment variable is not set.");
  }

  try {
    const res = await axios.get(`${baseUrl}/api/message`);
    return res.data;
  } catch (error) {
    console.error("Error fetching message:", error);
    throw new Error("Failed to fetch message from the server.");
  }
}
