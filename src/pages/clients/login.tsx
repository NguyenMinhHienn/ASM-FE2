import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Đăng Nhập</h2>
        <form>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Nhập email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Mật khẩu */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              placeholder="Nhập mật khẩu"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Nút Đăng Nhập */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Đăng Nhập
          </button>
        </form>

        {/* Quên mật khẩu */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Quên mật khẩu?{" "}
          <a href="/reset-password" className="text-blue-500 hover:underline">
            Khôi phục mật khẩu
          </a>
        </p>

        {/* Chưa có tài khoản */}
        <p className="text-sm text-center text-gray-600 mt-2">
          Chưa có tài khoản?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Đăng ký
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;