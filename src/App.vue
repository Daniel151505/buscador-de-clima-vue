<script setup>
import FormularioVue from "./components/Formulario.vue";
import useClima from "./composables/useClima";

const { obtenerClima } = useClima;
</script>

<template>
  <h1 class="titulo">Buscador de Clima</h1>
  <div class="contenedor buscador-clima">
    <FormularioVue @obtener-clima="obtenerClima" />
  </div>
</template>
