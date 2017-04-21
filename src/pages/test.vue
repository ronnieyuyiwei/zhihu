<template>
  <div class="test">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div class="six">6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
  </div>
</template>
<style lang="scss" scoped>
  .test {
    width: 360px;
    height: 300px;
    border: 5px solid black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /*align-content: space-around;*/
    flex-grow: 3;
    div{
      width: 40px;
      height: 40px;
      background:cornflowerblue;
      border: 1px solid mediumpurple;
    }
    .six {
      align-self: flex-end;
    }

  }

</style>
<script>
</script>
