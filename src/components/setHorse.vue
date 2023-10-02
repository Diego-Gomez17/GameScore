<template>
    <div class="cont-addUser ">
        <form @submit.prevent="addUser" class="flex flex-col text-black">
            <label class="text-white">Nombre</label>
            <input type="text" v-model="name"  class="px-2" required>
            <label class="text-white">Correo</label>
            <input type="text" v-model="email" class="px-2" required>
            <input type="submit" value="Enviar" class="my-4 p-2 bg-teal-700 text-white font-semibold rounded-lg shadow-md hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75" >
          </form>
    </div>
</template>
<script setup>
import { ref as refVue } from 'vue'
import db  from '../firebase/init'
import { collection, addDoc } from 'firebase/firestore'

const name = refVue('')
const email = refVue('')

function addUser(){
  const usersCollection = collection(db, 'users')
  addDoc(usersCollection, {
    name: name.value,
    email: email.value,
    score: 0
  })
  alert('agregado')
}

</script>
<style scoped>

</style>