<script>
</script>
<template>
  <button id="item"><h3><slot></slot></h3></button>
</template>

<style scoped>
#item {
  justify-content: center;
  display: flex;
  background-color: #FF7979;
  border-radius: 10px;
  border-style: solid;
  border-color: #FF7979;
  margin: 3rem;
  display: flex;
  position: relative;
  text-align: center;
  width: 20rem;
  height: 2.5rem;
}


h3 {
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
}
#item:hover{
    background-color: #FAC9C9;
    border-color: #FAC9C9;
}
@media (min-width: 1024px) {
  #item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  #item:before {
    content: ' ';
    border-left: 1px solid black;
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  #item:after {
    content: ' ';
    border-left: 1px solid black;
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  #item:first-of-type:before {
    display: none;
  }

  #item:last-of-type:after {
    display: none;
  }
}
</style>
../stores/PartiesStore