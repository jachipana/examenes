<template>
    <h1>Primer ejercicio - Tercer Parcial</h1>
    <div class="contenedor">
        <div class="contenedor-inputs">
            <div>
                Nombre:
                <input type="text" v-model="nombre">
            </div>
            <div>
                Edad:
                <input type="number" v-model="edad">
            </div>
            <div>
                sexo:
                M<input type="radio" value="Masculino" v-model="sexo">
                F<input type="radio" value="Femenino" v-model="sexo">
            </div>
            <div>
                <button @click="registrar" class="btn btn-success">Registrar</button>
            </div>
        </div>
        <div class="contenedor-tabla">
            <table class="table table-striped">
                <thead class="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Sexo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in users" :key="index">
                        <td>{{ user.id }}</td>
                        <td>{{ user.nombre }}</td>
                        <td>{{ user.edad }}</td>
                        <td>{{ user.sexo }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
export default {
    name: 'Eje1Parcial3',
    setup() {
        const users = ref([])
        const nombre = ref('')
        const edad = ref(0)
        const sexo = ref('')
        const registrar = () => {
            const user = {
                id: generarID(),
                nombre: nombre.value,
                edad: edad.value,
                sexo: sexo.value
            }
            users.value.push(user)
        }
        const generarID = () => {
            return uuidv4();
        }
        return { users, nombre, edad, sexo, registrar, generarID }
    }
}
</script>

<style scoped>
.contenedor {
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contenedor-inputs {
    background-color: yellow;
    width: 500px;
    margin: 10px;
}

.contenedor-tabla {
    background-color: green;
    width: 600px;
    margin: 10px;
}
</style>