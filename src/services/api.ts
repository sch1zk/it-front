import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081',
});

export const fetchCases = async (page: number = 1, limit: number = 10) => {
  try {
    const { data } = await api.get("/cases", {
      params: { page, limit },
    });
    return data;
  } catch (err) {
    throw new Error('Failed to fetch cases');
  }
};

export const fetchCase = async (case_id: string) => {
  try {
    const { data } = await api.get(`/cases/${case_id}`);
    return data
  } catch (err: any) {
    throw new Error('Failed to fetch case details');
  }
};

export const runCode = async (case_id: string, code: string, lang: string) => {
  try {
    const response = await api.post(`/cases/${case_id}/run`, { code, lang });
  } catch (err) {
    throw new Error('Failed to run code');
  }
}
