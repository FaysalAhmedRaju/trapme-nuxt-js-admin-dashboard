<template>
  <div>
    <div>
      {{clayout}}
      <nuxt/>
    </div>
  </div>

</template>

<script>
  export default {

    data() {                                   // <== changed this line
      return {
        clayout: ' This is my new Layout.'

      }
    }
  }
</script>

<style></style>
