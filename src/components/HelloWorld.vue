<script setup>
import { defineProps } from 'vue'
import { useCounterStore } from '@/stores/counter'

defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
})

const counter = useCounterStore()
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen p-4">
    <h1 class="font-bold text-5xl">
      {{ title }}
    </h1>
    <h2 class="text-3xl mt-4">
      {{ subtitle }}
    </h2>

    <NButton
      class="mt-8"
      type="success"
      size="large"
      dashed
      round
      @click="counter.increment"
    >
      count is: {{ counter.count }}
    </NButton>
  </div>
</template>
