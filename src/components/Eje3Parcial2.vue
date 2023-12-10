<template>
    <div class="contenedor">
        <div class="inputs">
            <div>
                <label>Total</label>
                <br>
                <input type="number" v-model="total">
            </div>
            <div>
                <label>Tip%</label>
                <br>
                <input type="number" v-model="tip">
            </div>
            <div>
                <label>People</label>
                <br>
                <input type="number" v-model="people">
            </div>
            <div>
                <br>
                <button @click="calcular" class="btn btn-danger">calculate</button>
            </div>
        </div>
        <div class="cuadros">
            <label>Total+tip: ${{ totalTip }}</label>
            <label>Remaining: ${{ resto }}</label>
            <div class="personas">
                <div class="person" v-for="number in personas" :key="number">
                    <div class="bg-dark text-white">Person</div>
                    <div class="bg-white">
                        <label>{{ totalTip / personas }}</label>
                        <br>
                        Paid
                        <input type="checkbox" @change="restarSaldo">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'Eje3Parcial2',
    setup() {
        const total = ref(0)
        const tip = ref(0)
        const people = ref(0)
        const personas = ref(0)
        const totalTip = ref(0)
        const calcular = () => {
            totalTip.value = total.value + (total.value * (tip.value / 100))
            resto.value = totalTip.value
            personas.value = people.value
        }
        const resto = ref(0)
        const restarSaldo = (e) => {
            if (e.target.checked) {
                resto.value = resto.value - (totalTip.value / personas.value)
            } else {
                resto.value = resto.value + (totalTip.value / personas.value)
            }
        }
        return { total, tip, people, totalTip, calcular, resto, personas, restarSaldo }
    }
}
</script>

<style scoped>
.contenedor {
    color: black;
    display: flex;
    height: 100vh;
}

.inputs {
    background-color: seagreen;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.cuadros {
    background-color: green;
    width: 60%;
    display: flex;
    flex-direction: column;
}

.personas {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.person {
    width: 180px;
    padding: 5px;
}
</style>