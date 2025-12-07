const API_BASE_URL = 'http://localhost:5000/api'; 

export const authService = {
  async login(email, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      return data; 

    } catch (error) {
      console.error("Service Login Error:", error);
      return { success: false, message: "Gagal terhubung ke server" };
    }
  },

  async register(name, email, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      return await response.json();
    } catch (error) {
      return { success: false, message: "Gagal terhubung ke server" };
    }
  }
};