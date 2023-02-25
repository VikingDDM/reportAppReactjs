import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../../services/api";
import { Report } from "./types";


// const initialState: ReportState = {
//     report: {
//       name: "",
//       content: "",
//       createdAt: "",
//       updatedAt: "",
//     },
//     loading: false,
//   };

const createreporting = createAsyncThunk(
  "report/createreporting",
  async (report: Report) => {
    const response = await api.createreporting(report);
    console.log(response)
    return response.data;
});

const getreporting = createAsyncThunk(
  "report/getreporting",
  async (username: string) => {
    const response = await api.getreporting(username);
    return response.data;
});



export { createreporting, getreporting };