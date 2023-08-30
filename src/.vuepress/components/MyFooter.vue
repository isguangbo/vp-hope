<template>
  <el-row>
    <el-col :span="8">
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <el-image lazy :src="url" :fit="cover" :preview-src-list="srcList" :zoom-rate="1.2" :initial-index="3"></el-image>

        <div style="padding: 14px">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const url = 'https://shao-images.oss-cn-beijing.aliyuncs.com/images/P001.jpg'
const srcList = [
  'https://shao-images.oss-cn-beijing.aliyuncs.com/images/logo.png',
  'https://shao-images.oss-cn-beijing.aliyuncs.com/images/P007.jpg',
  'https://shao-images.oss-cn-beijing.aliyuncs.com/images/P006.jpg',
  'https://shao-images.oss-cn-beijing.aliyuncs.com/images/P005.jpg',
  'https://shao-images.oss-cn-beijing.aliyuncs.com/images/P004.jpg',
  'https://shao-images.oss-cn-beijing.aliyuncs.com/images/P003.jpg',
  'https://shao-images.oss-cn-beijing.aliyuncs.com/images/P002.jpg',
  'https://shao-images.oss-cn-beijing.aliyuncs.com/images/P001.jpg'
]

const currentDate = ref(new Date())
</script>

<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
