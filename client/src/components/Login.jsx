// Login.jsx
import React from 'react';
import AuthForm from './AuthForm';

const Login = () => {
  const handleLogin = (data) => {
    // replace with real login logic / API call
    console.log('Login data:', data);
    alert('Logged in (demo). Check console for payload.');
  };

  return (
    <div>
      <AuthForm
        fields={[
          {
            name: 'email',
            type: 'email',
            placeholder: 'you@domain.com',
            autoComplete: 'email',
          },
          {
            name: 'password',
            type: 'password',
            placeholder: 'Your strong password',
            autoComplete: 'current-password',
          },
        ]}
        onSubmit={handleLogin}
        submitLabel="Login"
        variant="neon"
        extraNode={
          <div className="flex items-center justify-between text-xs text-white/70 mt-1">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                className="accent-white/90"
              />{' '}
              Remember me
            </label>
          </div>
        }
      />
    </div>
  );
};

export default Login;
