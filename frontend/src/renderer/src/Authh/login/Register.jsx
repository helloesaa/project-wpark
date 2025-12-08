import React, { useState } from "react";
import { authService } from "../Auth-Service";

const RegisterForm = ({ onSwitch, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setIsError(false);

    const res = await authService.register(
      formData.name,
      formData.email,
      formData.password
    );

    if (res.success) {
      setMessage("Registrasi berhasil, silakan login.");
      setFormData({ name: "", email: "", password: "" });

      // kalau mau auto-switch ke login:
      if (onSwitch) onSwitch();
    } else {
      setIsError(true);
      setMessage(res.message || "Registrasi gagal");
    }

    setIsLoading(false);
  };

  return (
    <div>
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Buat Akun</h2>
        {message && (
          <div
            className={`mt-2 text-sm py-2 px-4 rounded-lg border ${isError
                ? "bg-red-50 text-red-600 border-red-200"
                : "bg-emerald-50 text-emerald-600 border-emerald-200"
              }`}
          >
            {message}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">
            Nama Lengkap
          </label>
          <input
            type="text"
            required
            className="w-full p-3 rounded-xl border border-gray-200 focus:border-main focus:outline-none mt-1"
            placeholder="Nama Anda"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            required
            className="w-full p-3 rounded-xl border border-gray-200 focus:border-main focus:outline-none mt-1"
            placeholder="email@contoh.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            required
            className="w-full p-3 rounded-xl border border-gray-200 focus:border-main focus:outline-none mt-1"
            placeholder="••••••••"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-main text-white font-semibold py-3 rounded-xl shadow-lg transition-all 
            ${isLoading
              ? "opacity-70 cursor-not-allowed"
              : "hover:bg-main-dark active:scale-95"
            }
          `}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <i className="bx bx-loader-alt animate-spin"></i> Memproses...
            </span>
          ) : (
            "Daftar"
          )}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        <button onClick={onSwitch} className="text-main font-semibold hover:underline">
          Sudah punya akun? Login
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
