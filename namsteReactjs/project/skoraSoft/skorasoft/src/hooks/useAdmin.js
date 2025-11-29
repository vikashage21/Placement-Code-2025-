export const adminLogin = async (credentials) => {
  try {
    const res = await fetch("http://localhost:3000/api/admin/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("admintoken", data.token);
    }

    return data;
  } catch (error) {
    console.error("Error:", error);
    return { success: false, message: "Network error" };
  }
};


export const getMessages = async () => {
  const token = localStorage.getItem("admintoken");

  const res = await fetch("http://localhost:3000/api/admin/messages", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
};
