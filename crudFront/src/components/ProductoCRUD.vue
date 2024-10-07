<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="text-center">Lista de Productos</h2>
      <button class="btn btn-danger" @click="logout">Cerrar Sesión</button>
    </div>
    <table class="table table-striped table-hover">
      <thead class="thead-dark">
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto in productos" :key="producto.id">
          <td>{{ producto.nombre }}</td>
          <td>{{ producto.descripcion }}</td>
          <td>{{ producto.precio }}</td>
          <td>
            <button class="btn btn-primary btn-sm me-2" @click="editarProducto(producto)">Editar</button>
            <button class="btn btn-danger btn-sm" @click="eliminarProducto(producto.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <h3 class="mt-5">Crear/Editar Producto</h3>
    <form @submit.prevent="guardarProducto" class="row g-3 mt-3">
      <div class="col-md-4">
        <input v-model="producto.nombre" class="form-control" placeholder="Nombre" required />
      </div>
      <div class="col-md-4">
        <input v-model="producto.descripcion" class="form-control" placeholder="Descripción" required />
      </div>
      <div class="col-md-4">
        <input v-model="producto.precio" class="form-control" type="number" placeholder="Precio" required />
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-success">Guardar</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      productos: [],
      producto: {
        id: null,
        nombre: '',
        descripcion: '',
        precio: 0,
      },
    };
  },
  mounted() {
    this.cargarProductos();
  },
  methods: {
    cargarProductos() {
      axios.get('http://localhost:5170/api/productos')
        .then(response => {
          this.productos = response.data;
        });
    },
    guardarProducto() {
      if (this.producto.id) {
        axios.put(`http://localhost:5170/api/productos/${this.producto.id}`, this.producto)
          .then(() => {
            this.cargarProductos();
            this.resetFormulario();
          });
      } else {
        const nuevoProducto = {
          nombre: this.producto.nombre,
          descripcion: this.producto.descripcion,
          precio: this.producto.precio
        };
        axios.post('http://localhost:5170/api/productos', nuevoProducto)
          .then(() => {
            this.cargarProductos();
            this.resetFormulario();
          });
      }
    },
    editarProducto(producto) {
      this.producto = { ...producto };
    },
    eliminarProducto(id) {
      axios.delete(`http://localhost:5170/api/productos/${id}`)
        .then(() => {
          this.cargarProductos();
        });
    },
    resetFormulario() {
      this.producto = {
        id: null,
        nombre: '',
        descripcion: '',
        precio: 0,
      };
    },
    logout() {
      // Eliminar la autenticación del localStorage
      localStorage.removeItem('auth');
      
      // Redirigir al usuario a la página de login
      this.$router.push({ name: 'login' });
    }
  },
};
</script>

<style scoped>
.d-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
