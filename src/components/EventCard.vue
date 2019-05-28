<template>
  <b-card
    :header="event.title"
    header-tag="h1"
    :footer="`Autor: ${event.autor}`"
    :sub-title="event.tipoDoEvento"
    :img-src="event.imagem"
    class="mt-1 text-center"
    border-variant="primary"
    header-bg-variant="primary"
    header-text-variant="white"
  >
    <b-card-text>Data: {{event.data}}</b-card-text>
    <b-card-text>Horário: {{event.horarioInicio}} – {{event.horarioFim}}</b-card-text>
    <b-card-text>Localização: {{event.local}}</b-card-text>
    <b-card-text><span v-html="event.descricao"></span></b-card-text>
    <a :href="event.link" target="_blank" class="card-link">Site do Evento</a>
  </b-card>
</template>

<script>
export default {
  props: {
    event: {
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
// img {
//   width:100px;
//   height:100px;
// }
</style>
