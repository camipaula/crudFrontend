<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card p-5 shadow-lg" style="width: 400px;">
      <h2 class="text-center mb-4">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" v-model="email" id="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password:</label>
          <input type="password" v-model="password" id="password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary w-100">Login</button>
        
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:5170/api/auth/login', {
          email: this.email,
          password: this.password
        });
        if (response.status === 200) {
          localStorage.setItem('auth', true); // Guardar la sesión del usuario en el localStorage
          this.$router.push({ path: '/' });
        }
      } catch (error) {
        alert('Login failed. Please check your credentials.');
      }
    }
  }
};
</script>

<style scoped>
.d-flex {
  background-color: #f0f2f5;
}

.card {
  border-radius: 10px;
}

.shadow-lg {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}
</style>
