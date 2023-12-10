<template>
    <h1>Primer ejercicio - Segundo Parcial</h1>
    <table class="table table-striped">
        <thead class="table-dark">
            <tr>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>E-MAIL</th>
                <th>ROLE</th>
                <th>POINT</th>
                <th>NEW POINT</th>
                <th>STATE</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user, index) in users" :key="index">
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastname }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.role }}</td>
                <td>{{ user.point }}</td>
                <td v-if="user.point >= 77"><label class="table-labels">{{ user.point }}</label></td>
                <td v-else></td>
                <td v-if="user.point >= 77"><label class="table-labels">{{ user.role }} ROLE</label></td>
                <td v-else></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'Eje1Parcial2',
    setup() {
        const users = ref([
            {
                firstName: "firstName",
                lastname: "lastName",
                email: "firstName@umsa.bo",
                role: "Student",
                point: 79
            },
            {
                firstName: "firstName",
                lastname: "lastName",
                email: "firstName@umsa.bo",
                role: "Admin",
                point: 99
            },
            {
                firstName: "firstName",
                lastname: "lastName",
                email: "firstName@umsa.bo",
                role: "Student",
                point: 70
            },
            {
                firstName: "firstName",
                lastname: "lastName",
                email: "firstName@umsa.bo",
                role: "Student",
                point: 77
            },
            {
                firstName: "firstName",
                lastname: "lastName",
                email: "firstName@umsa.bo",
                role: "User",
                point: 80
            }
        ])
        return { users }
    }
}
</script>

<style scoped>
.table-labels {
    color: red;
    font-weight: bold;
}
</style>