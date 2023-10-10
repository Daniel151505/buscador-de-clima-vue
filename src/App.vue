<script setup>
import FormularioVue from "./components/Formulario.vue";
import ClimaVue from "./components/Clima.vue";
import useClima from "./composables/useClima";

const { obtenerClima, clima, mostrarClima } = useClima;
</script>

<template>
  <h1 class="titulo">Buscador de Clima</h1>
  <div class="contenedor buscador-clima">
    <FormularioVue @obtener-clima="obtenerClima" />
    <ClimaVue v-if="mostrarClima" />
  </div>
</template>
