document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  const passwordInput = document.getElementById('password');
  const togglePasswordBtn = document.getElementById('togglePassword');
  const strengthBar = document.getElementById('strengthBar');
  const strengthText = document.getElementById('strengthText');

  // Toggle password visibility
  togglePasswordBtn.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    togglePasswordBtn.textContent = isPassword ? '🔒' : '👁️';
  });

  // Password strength logic
  passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    let strength = 0;

    if (val.length >= 8) strength += 25;
    if (/[A-Z]/.test(val)) strength += 25;
    if (/[0-9]/.test(val)) strength += 25;
    if (/[^A-Za-z0-9]/.test(val)) strength += 25;

    strengthBar.style.width = strength + '%';

    if (strength === 0) {
      strengthText.textContent = 'Must be at least 8 characters';
      strengthBar.style.backgroundColor = '#ef4444';
    } else if (strength <= 50) {
      strengthText.textContent = 'Weak password';
      strengthBar.style.backgroundColor = '#ef4444';
    } else if (strength <= 75) {
      strengthText.textContent = 'Medium strength';
      strengthBar.style.backgroundColor = '#f59e0b';
    } else {
      strengthText.textContent = 'Strong password ✓';
      strengthBar.style.backgroundColor = '#10b981';
    }
  });

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.textContent = 'Creating Account...';
    btn.style.opacity = '0.8';

    setTimeout(() => {
      btn.textContent = 'Account Created! ✓';
      btn.style.backgroundColor = '#10b981';
      form.reset();
      strengthBar.style.width = '0%';
      strengthText.textContent = 'Must be at least 8 characters';
    }, 1200);
  });
});
