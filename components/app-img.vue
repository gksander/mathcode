<template>
    <div style="text-align:center">
      <img :src="src || ''" :alt="alt || 'no alt text'" :width="(width || 300)+'px'">
    </div>
</template>

<script>
  export default {
    props: ['width', 'src', 'alt']
  }
</script>
