<script >
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/disco-ball-svgrepo-com.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Party Party Yeah !" />

    </div>
  </header>

  <RouterView />
</template>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

