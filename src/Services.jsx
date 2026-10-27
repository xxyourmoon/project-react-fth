export const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return users.map((user) => {
      const street = user.address?.street || "Jl. Sudirman";
      const city = user.address?.city || "Jakarta";

      // Object Property Shorthand ({ street, city })
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        street,
        city,
      };
    });
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error;
  }
};
