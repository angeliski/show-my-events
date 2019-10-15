<template>
  <b-card
    :header="event.title"
    header-tag="h1"
    :footer="`Localização: ${event.local}`"
    :sub-title="event.tipoDoEvento"
    :img-src="event.imagem"
    class="mt-1 text-center"
    border-variant="primary"
    header-bg-variant="primary"
    header-text-variant="white"
  >
    <b-card-text>Data: {{event.data}}</b-card-text>
    <b-card-text>Horário: {{event.horarioInicio}} <span v-if="event.horarioFim">– {{event.horarioFim}}</span></b-card-text>
    <b-card-text></b-card-text>
    <b-card-text><span v-html="event.descricao"></span></b-card-text>
    <a :href="event.link" target="_blank" class="card-link">Acesse Aqui</a>
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
