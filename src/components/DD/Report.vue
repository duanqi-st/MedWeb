<template>
  <div class="report report_backup">
    <div class="header">
      <div class="name">上海长征医院</div>
      <div class="subname">放射科诊断报告</div>
    </div>
    <table class="info">
      <tbody>
        <tr>
          <td>姓名：{{currentPatient.name}}</td>
          <td>性别：{{currentPatient.gender ? '男':'女'}}</td>
          <td>年龄：37</td>
        </tr>
        <tr>
          <td>医院编号：13432</td>
          <td>电话：12345678912</td>
          <td>病号：{{currentPatient.id}}</td>
        </tr>
      </tbody>
    </table>
    <div class="area">
      <label for="behavier" class="label">医学影像</label>
      <el-upload drag action="xxxx">
        <div class="upload">
          <img :src="uploadImg" class="upload--img">
          <div class="upload--text">
            可将图像拖拽到此处
          </div>
        </div>
      </el-upload>
    </div>
    <div class="area">
      <label for="behavier" class="label">放射学表现</label>
      <textarea :value="current.behavier" name="behavier" class="input" placeholder="选择模板或者输入内容…">
      </textarea>
    </div>
    <div class="area">
      <label for="diagnosis" class="label">放射学诊断</label>
      <textarea :value="current.diagnosis" name="diagnosis" class="input" placeholder="选择模板或者输入内容…">
      </textarea>
    </div>
    <div class="submit submit_backup" @click="submit">
      <span>
        提交
      </span>
    </div>
  </div>
</template>

<script>
import uploadImg from '@/assets/upload.png';

export default {
  name: 'Report',
  props: {
    current: {
      type: Object,
      required: false,
      default: () => ({})
    },
    currentPatient: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      uploadImg
    };
  },
  methods: {
    submit() {
      this.$emit('submit');
    }
  }
};
</script>

<style lang="less" scoped>
.report {
  width: 550px;
  height: 100vh;
  background: #f2f4fa;
  color: #1a212d;
  box-shadow: -4px 0 18px 0 rgba(0, 0, 0, 0.37);
  &_backup {
    min-width: 550px;
    font-size: 12px;
  }

  .header {
    background: #253561;
    color: #fff;
    text-align: center;
    line-height: 1.5;
    .name {
      font-size: 20px;
    }
    .subname {
      font-size: 14px;
    }
  }

  .info {
    width: 100%;
    padding: 0 18px;
  }

  .area {
    width: 100%;
    padding: 0 8px;
    box-sizing: border-box;
    margin-top: 16px;
    .label,
    .input {
      display: block;
    }
    .input {
      width: 100%;
      height: 200px;
    }
    .upload {
      margin-top: 20px;
      &--text {
        font-size: 12px;
        color: #5a92ff;
        opacity: 0.4;
      }
    }
  }

  .submit {
    float: right;
    margin: 16px 8px;
    color: #fff;
    background-image: linear-gradient(
      -34deg,
      #5e34a9 0%,
      #1a209e 44%,
      #427bf7 100%
    );
    box-shadow: 0 2px 12px 0 rgba(0, 29, 255, 0.35),
      inset 0 0 1px 0 rgba(255, 255, 255, 0.5);
    border-radius: 100px;
    width: 60px;
    height: 20px;
    display: flex;
    box-sizing: border-box;
    &_backup {
      min-width: 60px;
      min-height: 20px;
    }
    span {
      margin: auto;
    }
  }
}
</style>

<style lang="less">
.el-upload.el-upload--text {
  width: 100%;
  .el-upload-dragger {
    width: 100%;
    background: #ffffff;
    border: 1px solid rgba(97, 110, 140, 0.15);
    border-radius: 2px;
    height: 96px;
  }
}
</style>
