<script setup>
import FormularioVue from "./components/Formulario.vue";
import ClimaVue from "./components/Clima.vue";
import SpinnerVue from "./components/Spinner.vue";
import AlertaVue from "./components/Alerta.vue";
import useClima from "./composables/useClima";

const { obtenerClima, clima, mostrarClima, cargando, error } = useClima();
</script>

<template>
  <h1 class="titulo">Buscador de Clima</h1>
  <div class="contenedor buscador-clima">
    <FormularioVue @obtener-clima="obtenerClima" />
    <SpinnerVue v-if="cargando" />
    <AlertaVue v-if="error"> {{ error }} </AlertaVue>
    <ClimaVue v-if="mostrarClima" :clima="clima" />
  </div>
</template>
