<template>
  <button
    type="submit"
    :disabled="disabled"
    @click="$emit('click')"
    class="
        inline-flex
        justify-center
        py-2
        px-4
        border border-transparent
        shadow-sm
        text-sm
        font-medium
        rounded-md
        text-white
        bg-teal-600
        hover:bg-teal-700
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-teal-500
        disabled:opacity-50 disabled:cursor-not-allowed
    "
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
    props: {
        disabled: {
            default: false,
        },
    },
    emits: ['click'],
}
</script>
