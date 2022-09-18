<template>
  <div class="menu_wrapper">
    <InitialIcon
      icon="initialPage/newAi.svg"
      title="Criar nova IA"
      @click="$emit('click-new', $event)"
    />
    <InitialIcon
      icon="initialPage/mngProj.svg"
      title="Gerenciar projetos"
      @click="$emit('click-mng', $event)"
    />
    <InitialIcon
      icon="initialPage/connection.svg"
      title="Cloud e serviços externos"
      @click="$emit('click-cloud', $event)"
    />
    <InitialIcon
      icon="initialPage/painter.svg"
      title="Contribua conosco!"
      @click="$emit('click-contrib', $event)"
    />
    <InitialIcon
      icon="initialPage/recommendations.svg"
      title="Dados e Dashboards"
      @click="$emit('click-data', $event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InitialIcon from "@/components/atoms/InitialIcon/InitialIcon.vue";

export default defineComponent({
  name: "InitalMenu",
  components: {
    InitialIcon,
  },
});
</script>

<style lang="scss" scoped>
.menu_wrapper {
  margin-top: 5em;
  display: flex;
  justify-content: space-evenly;
}
</style>
