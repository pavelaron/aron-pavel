<template>
  <div id="error">
    <div id="message">
      <h1>Error 404</h1>
      <div id="ship"></div>
      <h2>Page not found</h2>
    </div>
  </div>
</template>

<style>
#error {
  position: fixed;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  width: 100%;
  height: 100%;
  background-image: url('~/static/img/bg-space.jpg');
  background-repeat: repeat;
}

#ship {
  width: 128px;
  height: 128px;
  background-image: url('~@/assets/images/ship.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: auto;
}

#message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
