<template>
    <AdminLayout>
      <div class="flex justify-center items-start ">
        <div class="w-full max-w-md my-8">
          <div class="rounded-lg p-4 bg-gray-300 flex flex-col">
            <label for="opciones" class="text-gray-700 font-bold mb-2 text-center">Selecciona una opción:</label>
            <select v-model="selected" id="opciones" class="border border-gray-300 p-2">
              <option value="">Selecciona una opción</option>
              <option v-for="option in options" :value="option.value" :key="option.value">{{ option.text }}</option>
            </select>
          </div>
          <div class="ml-3 relative">
    <Dropdown align="right" width="64" class="mt-2">
        <template #trigger>
            <span class="inline-flex rounded-md">
                <button
                    type="button"
                    class="inline-flex items-center px-5 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                >
                Area Administrador
                    <svg
                        class="ml-2 -mr-0.5 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
            </span>
        </template>

        <template #content>
            <DropdownLink
                :href="route('users.index')"
                :active="route().current('users.index')"
            >
                Usuarios
            </DropdownLink>
            <DropdownLink
                :href="route('roles.index')"
                :active="route().current('roles.index')"
            >
                Roles
            </DropdownLink>
            <DropdownLink
                :href="route('permissions.index')"
                :active="route().current('permissions.index')"
            >
                Permisos
            </DropdownLink>
        </template>
    </Dropdown>
</div>
        </div>
      </div>
      <!-- Contenedor para los componentes hijos -->
      <div class="relative z-0">
        <Clientes v-if="selected === '1'" :datos="props.clientes"></Clientes>
        <Persons v-else-if="selected === '2'" :datos="props.personas"></Persons>
        <Utilitys v-else-if="selected === '3'" :datos="props.utilidades"></Utilitys>
        <Platform v-else-if="selected === '4'" :datos="props.platform"></Platform>       
        <StoreLocation v-if="selected === '5'" :datos="props.locationlocal"></StoreLocation>
        <Stores v-else-if="selected === '6'" :datos="props.locales"></Stores>
        <TransacitonDetails v-else-if="selected === '7'" :datos="props.transactiondetail"></TransacitonDetails>
        <Transactions v-else-if="selected === '8'" :datos="props.transaction"></Transactions>        
        <Utilitys v-else-if="selected === '9'" :datos="props.utility"></Utilitys>        
      </div>
    </AdminLayout>
  </template>
  
    
    <script setup>
    import {ref} from 'vue'
    import { onMounted, onBeforeMount } from 'vue';
   // import NavLinkAdmin from "@/Components/NavLinkAdmin.vue";
    import DropdownLink from "@/Components/DropdownLink.vue";    
    import Dropdown from "@/Components/Dropdown.vue";
  
  // Agregar este componente relacionado al tabla : ( plataformas_sede ) 
  import AdminLayout from '../../../Layouts/AdminLayout.vue'; // Asegúrate de importar correctamente tu componente de layout

  import Clientes from '../../../Pages/Admin/Clients/Index.vue'; // Importa tus componentes correspondientes
  import Persons from '../../../Pages/Admin/Persons/Index.vue'; // Importa tus componentes correspondientes
  import Platforms from '../../../Pages/Admin/Platforms/Index.vue';
  import Platformstore from '../../../Pages/Admin/Platformstore/Index.vue'; // Importa tus componentes correspondientes
  import StoreLocation from '../../../Pages/Admin/StoreLocation/Index.vue'; // Importa tus componentes correspondientes
  import Stores from '../../../Pages/Admin/Stores/Index.vue'; // Importa tus componentes correspondientes
  import TransacitonDetails from '../../../Pages/Admin/TransacitonDetails/Index.vue';
  import Transactions from '../../../Pages/Admin/Transactions/Index.vue';
  import Utilitys from '../../../Pages/Admin/Utilitys/Index.vue';

const    clientes= ref([]);
const    personas = ref([]);
const    locales = ref([]);
const    locationlocal  = ref([]);//Definir la estructura esperada de los datos recibidos
const    platform = ref([]);
const    platformsede = ref([]);
const    transaction = ref([]);
const    transactiondetail = ref([]); //Definir la estructura esperada de los datos recibidos
const    utility = ref([]);

    const props = defineProps({
      clientes:Array,
      personas:Array,
      locales:Array,
      locationlocal: Array,  //Definir la estructura esperada de los datos recibidos
      platform:Array,
      platformsede:Array,
      transaction:Array,
      transactiondetail: Array,  //Definir la estructura esperada de los datos recibidos
      utility:Array,
    });
    const options = [
      { value: '1', text: 'Tabla Transacciones' },
      { value: '2', text: 'Tabla Detalle Transacciones' },
      { value: '3', text: 'Detalle Utilidades' },
      { value: '4', text: 'Lista Plataformas' },
      { value: '5', text: 'Tabla Transacciones' },
      { value: '6', text: 'Tabla Detalle Transacciones' },
      { value: '7', text: 'Detalle Utilidades' },
      { value: '8', text: 'Lista Plataformas' },
      { value: '9', text: 'Lista Plataformas' },
    ];
    
    let selected = ref('');
  

    onBeforeMount(() => {
      if (  props.transacciones && props.transaccionesdetail && props.utilidades && props.plataformas && props.transacciones && props.transaccionesdetail && props.utilidades && props.plataformas) {

          clientes= props.clientes;
          personas =props.personas ;
          locales =props.locales ;
          locationlocal  =props.locationlocal ; //Definir la estructura esperada de los datos recibidos
          platform = props.platform;
          platformsede = props.platformsede;
          transaction = props.transaction;
          transactiondetail =props.transactiondetail ; //Definir la estructura esperada de los datos recibidos
          utility = props.utility;

      } else {
        
          console.error('No se recibieron datos válidos desde Inertia:');
      }
    });

    onMounted(() => {
          console.log('Datos recibidos desde Inertia transacciones:', props.transacciones  );
          console.log('Datos recibidos desde Inertia transaccionesdetail:',  props.transaccionesdetail  );
          console.log('Datos recibidos desde Inertia utilidades:',  props.utilidades );
          console.log('Datos recibidos desde Inertia plataformas:',props.plataformas );
          console.log('Datos recibidos desde Inertia transacciones:', props.transacciones  );
          console.log('Datos recibidos desde Inertia transaccionesdetail:',  props.transaccionesdetail  );
          console.log('Datos recibidos desde Inertia utilidades:',  props.utilidades );
          console.log('Datos recibidos desde Inertia plataformas:',props.plataformas );
          console.log('Datos recibidos desde Inertia plataformas:',props.plataformas );
    });

    </script>
    
    <style>
    /* Estilos opcionales */
    </style>
    