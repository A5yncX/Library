<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter, title } = useData()
</script>

<template>
  <!--
    The `class="giscus"` ensures that the comment section is inserted in the right place,
    so that `v-if` can unload the comment section precisely.
  -->
  <div v-if="frontmatter.comments !== false" :key="title" class="giscus">
    <!--
      It doesn't make sense to use `v-if` to unmount `script` here,
      what needs to be uninstalled is the giscus comment section that has been inserted into the DOM.
    -->
    <component
    :is="'script'"
      src="https://giscus.app/client.js"
        data-repo="A5yncX/Library"
        data-repo-id="R_kgDOLCD29g"
        data-category="Q&A"
        data-category-id="DIC_kwDOLCD29s4CcS0n"
        data-mapping="url"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async
    />
  </div>
</template>
