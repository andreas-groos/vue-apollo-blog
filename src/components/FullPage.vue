<template>
  <v-container fluid
               fill-height
               row>
    <v-layout column>
      <slot></slot>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "FullPage"
};
</script>

<style>
</style>
