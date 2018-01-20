<template>
  <div>
    <div class="full-background">
      <div id="particles-js"></div>
    </div>
    <div class="full-background">
      <editor :addedStyle="{'width': '950px', 'max-width': '90%'}">//COSma Learning, INC.
print("Math and programming?!");
print("You're in the right place!");

var x = 8;
print(
  `Example: ${x}! is equal to ${factorial(x)}.`
);

print("Use the top nav-bar to learn more!");</editor>
    </div>
  </div>
</template>

<script>
import editor from '~/components/editor.vue';

export default {
  components: {editor},

  mounted() {
    particleBackground();
  }
}
</script>
