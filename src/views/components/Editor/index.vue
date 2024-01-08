<template>
  <div>
	 <quill-editor style="height: 400px;"
    v-model:value="state.content"
    :options="state.editorOption"
    :disabled="state.disabled"
  />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
 const state = reactive({
      content: '<p>2333</p>',
      _content: '',
      editorOption: {
        placeholder: 'core',
        modules: {
          // toolbars: [
            // custom toolbars options
            // will override the default configuration
          // ],
          // other moudle options here
          // otherMoudle: {}
        },
        // more options
      },
      disabled: false
    })

</script>

<style lang="scss" scoped>
</style>