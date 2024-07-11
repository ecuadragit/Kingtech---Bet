<template>
    <div class="flex flex-col h-screen">
  
      <!-- Aside y Header dentro del contenedor principal -->
      <Aside></Aside>  
      <Header></Header>
  
      <!-- Main ocupa el espacio restante -->
      <div class=" flex items-center justify-center bg-gray-100 rounded-lg shadow-lg">
            <main >
                <slot />
            </main>
            </div>
      </div>  
    
  </template>
  
  <script setup>

    import Aside from '../components/Asides/AsideAtc.vue';
    import Header from '../components/Header.vue';

    import { usePermission } from "@/composables/permissions";

    const { hasRole } = usePermission();

  </script>
  