import { useState } from "react";
import axios from "axios";
const AddNewItem = () => {
	const [error, setError] = useState(null);

    const [username, setLogin] = useState("");
    const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(
          "https://thewebstorenode.uz.thewebstore.uz/sign",
          {
            username,
            password,
          }
        );
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token)
          window.location.reload()
        } else {
          setError("Invalid credentials");
         
        }
      } catch (err) {
        setError("Login failed");
        console.log(err);
        
      }
    };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 z-10 ">
              <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Login</h2>
                <form
                  onSubmit={handleLogin}
                  className="mb-4">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setLogin(e.target.value)}
                    placeholder="Username"
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                    required
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Login
                  </button>
                </form>
                {error && (
                  <div className="p-4 border border-red-500 bg-red-100 rounded">
                    <p className="text-red-700">Error: {error}</p>
                  </div>
                )}
              </div>
            </div>
  );
};

export default AddNewItem;