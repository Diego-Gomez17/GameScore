<template>
    <div>
        <h2 class="text-2xl">Caballos</h2>
        <ul role="list" class="divide-y divide-gray-100 max-w-full">
            <li v-for="person in listUsers" :key="person.id" class="flex justify-between gap-x-6 py-5">
                <div class="flex min-w-0 gap-x-4">
                    <img class="h-12 w-12 flex-none rounded-full bg-gray-50" alt="foto" />
                    <div class="min-w-0 flex-auto">
                        <p class="text-sm font-semibold leading-6 text-white">{{ person.name }}</p>
                        <p class="mt-1 truncate text-xs leading-5 text-gray-900">{{ person.email }}</p>
                    </div>
                </div>
                <div class="hidden shrink-0 sm:flex sm:flex-row gap-3 sm:items-end px-5">
                    <p class="text-xl leading-6 text-white font-bold">{{ person.score }}</p>
                    <button @click="updateScore(person)" class="pb-1 px-1 text-center bg-teal-700 rounded-md">+</button>
                </div>
            </li>
        </ul>
    </div>
</template>
  
<script setup>
import success from '../components/Alerts/success.vue'
import { ref as refVue, onMounted } from 'vue'
import db from '../firebase/init'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'

const listUsers = refVue([])
const docRef = collection(db, 'users')

const updateScore = async (person) => {
    const newScore = person.score + 1
    const data = { score: newScore }
    const userRef = doc(docRef, person.id)

    try {
        await updateDoc(userRef, data)
        person.score = newScore
        alert('Caballo actualizado correctamente. Nuevo puntaje: ' + newScore)
        console.log('Caballo actualizado correctamente. Nuevo puntaje: ' + newScore)
    } catch (error) {
        console.error('Error al actualizar el caballo: ' + error)
    }
}

onMounted(async () => {
    try {
        const querySnapshot = await getDocs(docRef)
        listUsers.value = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        console.log('Datos cargados exitosamente.')
    } catch (error) {
        console.error('Error al cargar datos: ' + error)
    }
})
</script>
  
<style></style>