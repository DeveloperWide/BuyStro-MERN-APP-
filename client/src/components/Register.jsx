// Register.jsx
import React from 'react';
import AuthForm from './AuthForm';

const Register = () => {
  const handleRegister = (data) => {
    // replace with real register logic / API call
    console.log('Register data:', data);
    alert('Registered (demo). Check console for payload.');
  };

  return (
    <div>
      <AuthForm
        fields={[
          {
            name: 'name',
            type: 'text',
            placeholder: 'Full name',
            autoComplete: 'name',
          },
          {
            name: 'email',
            type: 'email',
            placeholder: 'you@domain.com',
            autoComplete: 'email',
          },
          {
            name: 'password',
            type: 'password',
            placeholder: 'Choose a strong password',
            autoComplete: 'new-password',
          },
        ]}
        onSubmit={handleRegister}
        submitLabel="Create Account"
        variant="neon"
      />
    </div>
  );
};

export default Register;
