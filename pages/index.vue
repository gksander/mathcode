<template>
  <div>
    <div class="full-background">
      <div id="particles-js"></div>
    </div>
    <div style="position: fixed; left:0; right:0; top: 0; bottom: 0; display:flex; align-items:center; justify-content:center; z-index:-2">
      <div class="container">
        <editor height="200px">//COSma Learning, INC.
print("Math and programming?!");
print("You're in the right place!");

var x = 8;
print(`Example: ${x}! is equal to ${factorial(x)}.`);

print("Use the top nav-bar to learn more!");</editor>
      </div>
    </div>
  </div>
</template>

<script>
import editor from '../components/editor.vue';

export default {
  components: {
    editor: editor
  }, 

  mounted() {
    particleBackground();
  }
}
</script>
