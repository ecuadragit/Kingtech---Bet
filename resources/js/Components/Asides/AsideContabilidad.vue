<template>
    <aside  class="z-[100] fixed bg-white dark:bg-[#182235] ">
        <div id="sidebar" class="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out -translate-x-64">
            <div class="flex justify-between mb-10 pr-3 sm:px-2">
                        <button class="lg:hidden text-slate-500 hover:text-slate-400"
                            aria-controls="sidebar" aria-expanded="false">
                            <span class="sr-only">Close sidebar</span>
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"></path>
                            </svg>
                        </button>
                        <a aria-current="page" class="block active" href="/">
                            <!-- Aquí insertamos el SVG del logo -->
                            <svg width="32" height="32" viewBox="0 0 32 32">
                                <defs>
                                    <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                                        <stop stop-color="#A5B4FC" stop-opacity="0" offset="0%"></stop>
                                        <stop stop-color="#A5B4FC" offset="100%"></stop>
                                    </linearGradient>
                                    <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                                        <stop stop-color="#38BDF8" stop-opacity="0" offset="0%"></stop>
                                        <stop stop-color="#38BDF8" offset="100%"></stop>
                                    </linearGradient>
                                </defs>
                                <rect fill="#6366F1" width="32" height="32" rx="16"></rect>
                                <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                                    fill="#4F46E5"></path>
                                <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                                    fill="url(#logo-a)"></path>
                                <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                                    fill="url(#logo-b)"></path>
                            </svg>
                        </a>
                    </div>

           <div class="space-y-8">
               <div>
                   <h3 class="text-xs uppercase text-slate-500 font-semibold pl-3">
                       <span
                           class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                           aria-hidden="true">•••</span>
                           <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">More</span>
                   </h3>
                   <ul class="mt-3">
                  
                       

 
        
<li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 undefined">
    <a @click="toggleContabilidad"
       class="block text-slate-200 truncate transition duration-150 hover:text-white">
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                    <path class="fill-current text-slate-600" d="M8.07 16H10V8H8.07a8 8 0 110 8z"></path>
                    <path class="fill-current text-slate-400" d="M15 12L8 6v5H0v2h8v5z"></path>
                </svg>
                <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    <NavLink
                                            :href="route('contabilidad.index')"
                                            :active="route().current('contabilidad.index')"
                                        >
                                            CONTABILIDAD
                                        </NavLink>
                </span>
            </div>
            <div class="flex shrink-0 ml-2">
                <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 undefined" viewBox="0 0 12 12">
                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"></path>
                </svg>
            </div>
        </div>
    </a>
    <div v-show="mostrarContabilidad" class="pl-9 mt-1">
        <ul>
            <li class="mb-1 last:mb-0"><a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" href="/signin">
                <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Transacciones</span>
            </a></li>
            <li class="mb-1 last:mb-0"><a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" href="/signup">
                <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Detalle Transacciones</span>
            </a></li>
                    <li class="mb-1 last:mb-0"><a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" href="/reset-password">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Utilidad</span>
                    </a></li>
                    </ul>
                </div>
            </li>    
        </ul>
               </div>
           </div>
           <div class="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
               <div class="px-3 py-2">
                   <button>
                       <span class="sr-only">Expand / collapse sidebar</span>
                       <svg
                           class="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                           <path class="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z">
                           </path>
                           <path class="text-slate-600" d="M3 23H1V1h2z"></path>
                       </svg>
                   </button>
               </div>
           </div>
        </div>           
    </aside>   
</template>

<script setup>

    import { ref } from 'vue';
    import NavLink from "@/Components/NavLink.vue";


    const mostrarAdmin = ref(false);
    const mostrarRoles =ref(false);
    const mostrarPermisos=ref(false);
    const mostrarAtc=ref(false);
    const mostrarSoporte = ref(false);
    const mostrarContabilidad =ref(false);
    const mostrarReportes = ref(false);
    const darkMode = ref(false);

    // const toggleAdmin = () => {
    //     console.log('mensaje');
    //     mostrarAdmin.value = !mostrarAdmin.value;
    // };
    // const toggleRoles = () => {
    //     mostrarRoles.value = !mostrarRoles.value;
    // };
    // const togglePermisos = () => {
    //     mostrarPermisos.value = !mostrarPermisos.value;
    // };
    // const toggleAtc = () => {
    //     mostrarAtc.value = !mostrarAtc.value;
    // };

    // const toggleSoporte= () => {
    //     mostrarSoporte.value = !mostrarSoporte.value;
    // };

    // const toggleContabilidad = () => {
    //     mostrarContabilidad.value = !mostrarContabilidad.value;
    // };

    // const toggleReportes = () => {
    //     mostrarReportes.value = !mostrarReportes.value;
    // };



</script>