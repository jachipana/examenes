<template>
    <h1>Segundo ejercicio - Segundo Parcial</h1>
    <div>Valor numerico:
        <input type="number" v-model="cantidad">
        <button @click="llenarArray" class="btn btn-success">GENERAR</button>
    </div>
    <table class="table">
        <thead class="table-dark">
            <tr>
                <th>ID</th>
                <th>TEXT</th>
                <th>COMPLETED</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(dato, index) in array" :key="index">
                <td>{{ dato.id }}</td>
                <td>{{ dato.text }}</td>
                <td>{{ dato.completed }}</td>
            </tr>
        </tbody>
    </table>
    <label>{{ cantidad }}</label>
</template>

<script>
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
export default {
    name: 'Eje2Parcial2',
    setup() {
        const generarID = () => {
            return uuidv4();
        }
        const cantidad = ref(0);
        const array = ref([])
        const llenarArray = () => {
            for (let index = 0; index < cantidad.value; index++) {
                const dato = {
                    id: generarID(),
                    text: ((index + 1) * 100),
                    completed: true
                }
                array.value.push(dato)
            }
        }
        return { cantidad, array, llenarArray }
    }
}
</script>

<style scoped></style>