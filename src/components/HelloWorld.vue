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
    <h2 class="text-3xl mt-4 mb-8">
      {{ subtitle }}
    </h2>

    <NButton
      type="success"
      size="large"
      secondary
      strong
      round
      @click="counter.increment"
    >
      count is: {{ counter.count }}
    </NButton>

    <a
      class="mt-8"
      href="https://github.com/naidraikzir/vute"
      aria-label="Check out the repo 🚀"
      title="Check out the repo 🚀"
      target="_blank"
      rel="noopener noreferrer"
    >
      <NIcon size="32">
        <IconGithub />
      </NIcon>
    </a>
  </div>
</template>
