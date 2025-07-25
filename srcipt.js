 // Switch Forms
function showForm(type) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.form').forEach(form => form.classList.remove('active'));
    document.querySelector(`.tab[onclick*="${type}"]`).classList.add('active');
    document.getElementById(`${type}Form`).classList.add('active');
    document.getElementById('popup').style.display = 'none';
  }
  
  // Error Helpers
  function setError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorText = document.getElementById(inputId + 'Error');
    input.classList.add('error');
    errorText.innerText = message;
  }
  
  function clearErrors(ids) {
    ids.forEach(id => {
      document.getElementById(id).classList.remove('error');
      document.getElementById(id + 'Error').innerText = '';
    });
    document.getElementById('popup').style.display = 'none';
  }
  
  // Login Validation
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const ids = ['loginUsername', 'loginEmail', 'loginPassword'];
    clearErrors(ids);
    let hasError = false;
  
    if (!loginUsername.value.trim()) { setError('loginUsername', 'Username is required'); hasError = true; }
    if (!loginEmail.value.trim()) { setError('loginEmail', 'Email is required'); hasError = true; }
    if (!loginPassword.value.trim()) { setError('loginPassword', 'Password is required'); hasError = true; }
  
    if (hasError) {
      document.getElementById('popup').innerText = 'Please correct login details';
      document.getElementById('popup').style.display = 'block';
    } else {
      alert('Login Successful!');
    }
  });
  
  // Sign Up Validation
  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const ids = ['signupUsername', 'signupEmail', 'signupPassword', 'signupConfirm'];
    clearErrors(ids);
    let hasError = false;
  
    if (!signupUsername.value.trim()) { setError('signupUsername', 'Username is required'); hasError = true; }
    if (!signupEmail.value.trim()) { setError('signupEmail', 'Email is required'); hasError = true; }
    if (!signupPassword.value.trim()) { setError('signupPassword', 'Password is required'); hasError = true; }
    if (signupPassword.value !== signupConfirm.value) { setError('signupConfirm', 'Passwords do not match'); hasError = true; }
  
    if (hasError) {
      document.getElementById('popup').innerText = 'Please fix sign-up details';
      document.getElementById('popup').style.display = 'block';
    } else {
      alert('Sign Up Successful!');
    }
  });
  
  // Mouse move effect on form
  document.addEventListener("mousemove", e => {
    const wrapper = document.getElementById("formWrapper");
    const x = (e.clientX - window.innerWidth / 2) / 40;
    const y = (e.clientY - window.innerHeight / 2) / 40;
    wrapper.style.transform = `translate(-50%, -50%) rotateX(${y}deg) rotateY(${x}deg)`;
  });
  
  
