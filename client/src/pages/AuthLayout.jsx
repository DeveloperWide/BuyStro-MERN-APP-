// AuthLayout.jsx
import { Link, Outlet, useLocation } from 'react-router';

const AuthLayout = () => {
  const location = useLocation();
  const getTitle = () => {
    if (location.pathname === '/login') return 'Welcome Back';
    if (location.pathname === '/register') return 'Create Your Account';
    return 'Signup or Login';
  };

  const active = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="auth-card relative w-full max-w-[400px] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-black/10 backdrop-blur-xl animate-fadeIn">
        <div className="w-full p-8 flex flex-col justify-center items-center gap-6">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold">
            {getTitle()}
          </h2>

          {/* Tabs */}
          <div className="relative w-[100%] md:w-[90%]">
            <div className="tabs flex rounded-2xl border border-gray-400">
              <Link
                to="/login"
                className={`tab flex-1 text-center py-3 font-bold rounded-2xl transition-all text-sm md:text-base ${active('/login') ? 
                  'bg-gradient-to-r from-[#273EBC] to-[#385AF6] text-white'
                  : ''
                }`}
              >
                Login
              </Link>

              <Link
                to="/register"
                className={`tab flex-1 text-center py-3 font-bold rounded-2xl transition-all text-sm md:text-base ${active('/register') ? 
                  'bg-gradient-to-r from-[#273EBC] to-[#385AF6] text-white'
                  : ''
                }`}
              >
                Signup
              </Link>
            </div>

            {/* Sliding underline */}
          </div>

          {/* Outlet or info */}
          {location.pathname === '/' ? (
            <>
            <h1 className='text-xl text-gray-700 font-bold capitalize'>Welcome to BuyStro</h1>
            <p className="text-gray-600 text-sm">
              Click <span className="font-semibold">Signup</span> or{' '}
              <span className="font-semibold">Login</span> to continue.
            </p>
            </>
          ) : (
            <div className="mt-2 w-[100%] border">
              <Outlet />
            </div>
          )}

          {/* Footer */}
          <div className="text-xs text-gray-600 mt-4">
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
