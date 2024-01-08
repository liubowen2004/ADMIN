<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
<script>
const debounce = (fn, delay) => {

  let timer = null;

  return function () {

    let context = this;

    let args = arguments;

    clearTimeout(timer);

    timer = setTimeout(function () {

      fn.apply(context, args);

    }, delay);

  }

}
const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver {

  constructor(callback) {

    callback = debounce(callback, 16);

    super(callback);

  }

}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
