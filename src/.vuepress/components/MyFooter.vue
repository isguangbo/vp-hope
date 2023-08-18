<template>
  <div>
    <!-- <div class="box">test</div> -->
    <div class="page-wrapper">
      <div class="content">
        <!-- 页面内容 -->
        <p>这里是页面内容。</p>
      </div>

      <div class="bottom-box">
        <p>这个盒子位于页面底部。</p>
      </div>
    </div>
  </div>
  <el-button type="warning">test</el-button>
</template>
<script setup>
console.log(1)
</script>
<style lang="scss" scoped>
// .box {
//   height: 20px;
//   background-color: tomato;
//   border: 1px solid deeppink;
// }
/* 将 .page-wrapper 设为 Flex 容器 */
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* 将 .content 设为 Flex 项，使其占据剩余空间 */
.content {
  flex: 1;
}

/* .bottom-box 样式，放在页面底部 */
.bottom-box {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}
</style>
