<template>
  <button :class="{ 'button--hollow': isHollow, disabled: isDisabled }">
    <slot> </slot>
  </button>
</template>
<script setup lang="ts">
const props = defineProps({
  isHollow: {
    type: Boolean,
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss">
button {
  cursor: pointer;
  padding: 16px 20px;
  background: $color-primary;
  border: none;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-align: center;
  letter-spacing: 0.15px;
  border-radius: 10px;
  color: #ffffff;
  white-space: nowrap;
  transition: 0.2s;
}
button:hover {
  opacity: 0.9;
}
.button--hollow {
  background: transparent;
  border: 1px solid $color-primary;
  color: $color-primary;
  transition: 0.2s;
}
.button--hollow:hover {
  background: $color-primary;
  color: #fff;
}
.disabled {
  background: transparent;
  color: grey;
  border: 1px solid grey;
  transition: 0.4s;
}
.disabled:hover {
  opacity: 0.5;
}
</style>
