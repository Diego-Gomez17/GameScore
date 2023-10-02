<template>
  <header>
    <div class="bg-gray-800 py-5 px-3">
      <nav class="text-stone-100">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/registro">Registro</RouterLink>
      </nav>
    </div>
  </header>
  <div>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Transition mode="out-in">
          <KeepAlive>
            <Suspense>
              <!-- main content -->
              <div class="mx-9 my-4 p-3 bg-slate-600/95 rounded-lg	text-white ">
                <component :is="Component"></component>
              </div>
    
              <!-- loading state -->
              <template #fallback>
                Loading...
              </template>
            </Suspense>
          </KeepAlive>
        </Transition>
      </template>
    </RouterView>
  </div>
</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router'



</script>

<style>
nav{
  display: flex;
  gap: 1rem;
}
</style> 

