<template>
  <div class="container-ribbon">
    <a rel="noopener" class="link-ribbon" :href="`https://github.com/${user}`" target="_blank">
      <div class="ribbon">
        <div class="ribbon-inner">Fork me on GitHub</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'github-ribbon',
  props: {
    user: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.container-ribbon {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 0;
  right: 0;
  overflow: hidden;
}

.link-ribbon {
  text-decoration: none;
  display: block;
  height: 100px;
}

.ribbon {
  width: 140px;
  padding: 5px;
  transform: translate(-14px, 28px) rotate(45deg);
  background-color: #aa0000;
}

.ribbon-inner {
  border-style: dashed;
  border-width: 1px;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  color: white;
}
</style>

