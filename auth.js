function showForm(type) {
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('signupForm').classList.remove('active');
    if (type === 'login') document.getElementById('loginForm').classList.add('active');
    else document.getElementById('signupForm').classList.add('active');
  }
  
  // SIGNUP
  document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
  
    const res = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
  
    const data = await res.json();
    document.getElementById('signupMsg').innerText = data.message || 'Signup complete';
  });
  
  // LOGIN
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
  
    const data = await res.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      document.getElementById('loginMsg').innerText = 'Login successful!';
      // Optionally redirect: window.location.href = 'home.html';
    } else {
      document.getElementById('loginMsg').innerText = data.message || 'Login failed';
    }
  });
  