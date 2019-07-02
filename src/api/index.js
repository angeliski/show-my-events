import axios from 'axios';

const sheetCode = process.env.VUE_APP_SHEET_CODE;
const sheetName = process.env.VUE_APP_SHEET_NAME;

const key = process.env.VUE_APP_API_KEY;

export const getEvents = () => axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${sheetCode}/values/${sheetName}?majorDimension=ROWS&key=${key}`);

export const noop = () => null;
