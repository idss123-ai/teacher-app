// frontend/services/api.js
// This file connects the frontend to your live backend

const API_BASE_URL = 'https://teacher-app.vercel.app'; // ← Your live backend

const api = {
  // Send login data to the backend
  login: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data };
    } else {
      return { success: false, message: data.message || 'Login failed' };
    }
  },

  // Send registration data
  register: async (firstName, lastName, email, password) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data };
    } else {
      return { success: false, message: data.message || 'Registration failed' };
    }
  },
};

export default api;
