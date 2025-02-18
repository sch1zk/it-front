import { BACKEND_URL } from '@/lib/config';

export const login = async (email: string, password: string) => {
  try {
    const res = await fetch(`${BACKEND_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    });
    if (!res.ok) throw new Error('Failed to login');
    return await res;
  } catch (err) {
    throw new Error('Failed to login');
  }
};

export const register = async (username: string, email: string, password: string) => {
  try {
    const res = await fetch(`${BACKEND_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
      credentials: 'include',
    });
    if (!res.ok) throw new Error('Failed to register');
    return await res;
  } catch (err) {
    throw new Error('Failed to register');
  }
};

export const fetchArticles = async (page: number = 1, limit: number = 10) => {
  try {
    const res = await fetch(`${BACKEND_URL}/media?page=${page}&limit=${limit}`);
    if (!res.ok) throw new Error('Failed to fetch articles');
    return await res.json();
  } catch (err) {
    throw new Error('Failed to fetch articles');
  }
};

export const fetchArticle = async (article_id: string) => {
  try {
    const res = await fetch(`${BACKEND_URL}/media/${article_id}`);
    if (!res.ok) throw new Error('Failed to fetch article');
    return await res.json();
  } catch (err) {
    throw new Error('Failed to fetch article');
  }
};

export const fetchCases = async (page: number = 1, limit: number = 10) => {
  try {
    const token = localStorage.getItem("access_token");
    const res = await fetch(`${BACKEND_URL}/cases?page=${page}&limit=${limit}`);
    if (!res.ok) throw new Error('Failed to fetch cases');
    return await res.json();
  } catch (err) {
    throw new Error('Failed to fetch cases');
  }
};

export const fetchCase = async (case_id: string) => {
  try {
    const token = localStorage.getItem("access_token");
    const res = await fetch(`${BACKEND_URL}/cases/${case_id}`);
    if (!res.ok) throw new Error('Failed to fetch case details');
    return await res.json();
  } catch (err) {
    throw new Error('Failed to fetch case details');
  }
};

export const runCode = async (case_id: string, code: string, lang: string) => {
  try {
    const token = localStorage.getItem("access_token");
    const res = await fetch(`${BACKEND_URL}/cases/${case_id}/run`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, lang }),
    });

    if (!res.ok) throw new Error('Failed to run code');
    return await res.json();
  } catch (err) {
    throw new Error('Failed to run code');
  }
};
