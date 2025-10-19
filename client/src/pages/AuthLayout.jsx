// AuthLayout.jsx
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import './auth.css';

const AuthLayout = () => {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname === '/login') return 'Welcome Back';
    if (location.pathname === '/register') return 'Create Your Account';
    return 'Signup or Login';
  };

  const active = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="auth-card relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-black/10 backdrop-blur-xl bg-gray-600 animate-fadeIn">
        <div className="w-full p-8 flex flex-col gap-6">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-100">
            {getTitle()}
          </h2>

          {/* Tabs */}
          <div className="relative w-full">
            <div className="tabs flex rounded-full bg-white/5 p-1 border border-white/10">
              <Link
                to="/login"
                className={`tab flex-1 text-center py-3 rounded-full transition-all text-sm md:text-base ${
                  active('/login')
                    ? 'text-white font-semibold'
                    : 'text-gray-400'
                }`}
              >
                Login
              </Link>

              <Link
                to="/register"
                className={`tab flex-1 text-center py-3 rounded-full transition-all text-sm md:text-base ${
                  active('/register')
                    ? 'text-white font-semibold'
                    : 'text-gray-400'
                }`}
              >
                Signup
              </Link>
            </div>

            {/* Sliding underline */}
            <div
              className={`underline absolute top-1 left-1 h-10 rounded-full bg-white/10 shadow-sm transition-transform duration-400 ${
                active('/login')
                  ? 'translate-x-0 w-1/2'
                  : 'translate-x-full w-1/2'
              }`}
              aria-hidden="true"
              style={{ width: '50%' }}
            />
          </div>

          {/* Outlet or info */}
          {location.pathname === '/' ? (
            <p className="text-gray-300 text-sm">
              Click <span className="font-semibold">Signup</span> or{' '}
              <span className="font-semibold">Login</span> to continue.
            </p>
          ) : (
            <div className="mt-2">
              <Outlet />
            </div>
          )}

          {/* Footer */}
          <div className="text-xs text-gray-500 mt-4">
            By continuing you agree to the{' '}
            <span className="underline">Terms</span> and{' '}
            <span className="underline">Privacy Policy</span>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
