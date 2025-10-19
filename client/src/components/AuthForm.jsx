// AuthForm.jsx
import React from 'react';

const AuthForm = ({
  fields = [], // [{name, type, placeholder, autoComplete}]
  onSubmit,
  submitLabel = 'Submit',
  variant = 'neon', // 'neon' | 'soft' | 'gradient'
  extraNode = null,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = {};
        for (let [k, v] of formData.entries()) obj[k] = v;
        onSubmit(obj);
      }}
      className="flex flex-col gap-4"
    >
      {fields.map((f) => (
        <div key={f.name} className="flex flex-col">
          <label className="text-white/80 text-sm mb-1 capitalize">
            {f.name}
          </label>
          <input
            name={f.name}
            type={f.type || 'text'}
            autoComplete={f.autoComplete || 'off'}
            placeholder={f.placeholder || ''}
            required={f.required ?? true}
            className="glass-input px-4 py-3 rounded-xl border border-white/10 placeholder-white/50 focus:outline-none transition-shadow"
          />
        </div>
      ))}

      {extraNode}

      <button type="submit" className="btn-blue w-full py-3 rounded-xl mt-2">
        {submitLabel}
      </button>
    </form>
  );
};

export default AuthForm;
