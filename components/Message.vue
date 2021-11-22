<template>
  <div class="message">
    <template v-for="(item,index) in $store.state.msgPool">
      <div :key="index" class="d-flex justify-center animate__animated animate__backInDown">
        <template v-if="item.light === false">
          <v-alert dense :type="item.type">{{ item.message }}</v-alert>
        </template>
        <template v-if="item.light === true">
          <v-alert dense :type="item.type" outlined>{{ item.message }}</v-alert>
        </template>
      </div>
    </template>
  </div>
</template>
<style>
.message {
  left: 50%;
  top: 20px;
  z-index: 9999;
  display: flex;
  position: fixed;
  min-width: 300px;
  max-width: 460px;
  flex-direction: column;
  transform: translateX(-50%);
}
</style>
