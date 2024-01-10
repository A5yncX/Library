<script setup lang="ts">
import { Icon } from '@iconify/vue'

//prettier-ignore
const messages = [
  {
    // title: '📮',
    // items: [
    //   { message: 'contact@asyncx.top', link: 'mailto:contact@asyncx.top', icon: 'tabler:mail' },
    // ],
  },
]
</script>

<template>
  <section v-for="message of messages" :key="message.title" class="mt-3 pl-4 text-[13px]/7">
    <div class="font-bold capitalize" role="heading" aria-level="2">{{ message.title }}</div>
    <address class="flex flex-col text-[--vp-c-text-2]">
      <a
        v-for="item of message.items"
        :key="item.link"
        class="flex items-center gap-1.5 hover:text-[--vp-c-text-1]"
        :href="item.link"
        target="_blank"
      >
        <!-- <Icon :icon="item.icon" width="1.25em" height="1.25em" aria-hidden="true" /> -->
        {{ item.message }}
      </a>
    </address>
  </section>
</template>
