<script>
</script>
<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <h4>
        <slot name="date"></slot>
      </h4>
      <h4>
        <slot name="place"></slot>
      </h4>
      <h4>
        <slot name="descr"></slot>
      </h4>
      <h4>
        <slot name="theme"></slot>
      </h4>
    </div>
  </div>
</template>

<style scoped>
.item {
  border: #FF7979 3px solid;
  border-radius: 20px;
  margin: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  margin-top: 1.5rem;
  margin-left: 0.5rem;
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: black;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
}


@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid black;
    background: black;
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid black;
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid black;
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
