<template>
  <!-- transition 提供过渡动画 -->
  <transition name="slide-fade" mode="out-in">
    <!-- v-show 控制显示与否 -->
    <!-- v-show 适用于经常切换的内容 -->
    <!-- v-if 适用于不经常切换的内容 惰性加载 -->
    <div v-show="show" class="mini-pi mini-pi_backup">
      <!-- <XInput placeholder="test st"></XInput> -->
      <!-- PatientCard 为自定义组件，需要引入并添加到 components 对象中 -->
      <!-- 遍历 this.list 列表，把列表中的单项命名成 patitent；v-for必须提供 key -->
      <!-- 向 PatientCard 中传入 info，即每个病人的数据 -->
      <FilterPlate></FilterPlate>
      <div class="mini-pi--list">
        <PatientCard v-for="patitent in list" :key="patitent.id" :info="patitent" :current.sync="currentId" @select="id=>handleSelect(id, currentId)" />
      </div>
      <UserBar></UserBar>
    </div>
  </transition>
</template>

<script>
import uniqueId from 'lodash/uniqueId';

import PatientCard from './PatientCard';
import UserBar from './UserBar';
import FilterPlate from './FilterPlate';

export default {
  name: 'MiniPI',
  components: { PatientCard, UserBar, FilterPlate },
  // sockets 对象中监听 socket事件
  sockets: {
    connect() {
      console.log('socket connected');
    },
    /**
     * 监听test事件
     * 获取数据后与 this.list 合并
     * @param {Array} data PI数据，默认为空数组
     * @return void
     */
    test(data = []) {
      this.list = [...this.list, ...data];
    }
  },
  // 父组件入参
  props: {
    // 控制 miniPI 是否显示
    show: {
      type: Boolean, // Boolean 类型
      required: false, // 不是必备参数
      default: true // 默认为 true
    }
  },
  data() {
    return {
      // 当前PI
      currentId: null,
      // list 为PI列表
      list: [
        {
          id: uniqueId(),
          name: '王大力',
          gender: 1,
          date: '2018.01.01',
          bd: 'BD 2018.01.01',
          examples: [
            {
              id: 78,
              name: 'example 1',
              date: '2018.02.12'
            },
            {
              id: 75,
              name: 'example 2',
              date: '2018.02.15'
            }
          ]
        },
        {
          id: uniqueId(),
          name: '刘长春',
          gender: 0,
          date: '2018.05.04',
          bd: 'BD 2018.04.03',
          examples: [
            {
              id: 55,
              name: 'example 1',
              date: '2018.02.15'
            }
          ]
        },
        {
          id: uniqueId(),
          name: '王大力',
          gender: 1,
          date: '2018.01.01',
          bd: 'BD 2018.01.01',
          examples: [
            {
              id: 78,
              name: 'example 1',
              date: '2018.02.12'
            },
            {
              id: 75,
              name: 'example 2',
              date: '2018.02.15'
            }
          ]
        },
        {
          id: uniqueId(),
          name: '刘长春',
          gender: 0,
          date: '2018.05.04',
          bd: 'BD 2018.04.03',
          examples: [
            {
              id: 55,
              name: 'example 1',
              date: '2018.02.15'
            }
          ]
        },
        {
          id: uniqueId(),
          name: '王大力',
          gender: 1,
          date: '2018.01.01',
          bd: 'BD 2018.01.01',
          examples: [
            {
              id: 78,
              name: 'example 1',
              date: '2018.02.12'
            },
            {
              id: 75,
              name: 'example 2',
              date: '2018.02.15'
            }
          ]
        },
        {
          id: uniqueId(),
          name: '刘长春',
          gender: 0,
          date: '2018.05.04',
          bd: 'BD 2018.04.03',
          examples: [
            {
              id: 55,
              name: 'example 1',
              date: '2018.02.15'
            }
          ]
        },
        {
          id: uniqueId(),
          name: '王大力',
          gender: 1,
          date: '2018.01.01',
          bd: 'BD 2018.01.01',
          examples: [
            {
              id: 78,
              name: 'example 1',
              date: '2018.02.12'
            },
            {
              id: 75,
              name: 'example 2',
              date: '2018.02.15'
            }
          ]
        },
        {
          id: uniqueId(),
          name: '刘长春',
          gender: 0,
          date: '2018.05.04',
          bd: 'BD 2018.04.03',
          examples: [
            {
              id: 55,
              name: 'example 1',
              date: '2018.02.15'
            }
          ]
        },
        {
          id: uniqueId(),
          name: '王大力',
          gender: 1,
          date: '2018.01.01',
          bd: 'BD 2018.01.01',
          examples: [
            {
              id: 78,
              name: 'example 1',
              date: '2018.02.12'
            },
            {
              id: 75,
              name: 'example 2',
              date: '2018.02.15'
            }
          ]
        },
        {
          id: uniqueId(),
          name: '刘长春',
          gender: 0,
          date: '2018.05.04',
          bd: 'BD 2018.04.03',
          examples: [
            {
              id: 55,
              name: 'example 1',
              date: '2018.02.15'
            }
          ]
        },
        {
          id: uniqueId(),
          name: '王大力',
          gender: 1,
          date: '2018.01.01',
          bd: 'BD 2018.01.01',
          examples: [
            {
              id: 78,
              name: 'example 1',
              date: '2018.02.12'
            },
            {
              id: 75,
              name: 'example 2',
              date: '2018.02.15'
            }
          ]
        },
        {
          id: uniqueId(),
          name: '刘长春',
          gender: 0,
          date: '2018.05.04',
          bd: 'BD 2018.04.03',
          examples: [
            {
              id: 55,
              name: 'example 1',
              date: '2018.02.15'
            }
          ]
        },
        {
          id: uniqueId(),
          name: '王大力',
          gender: 1,
          date: '2018.01.01',
          bd: 'BD 2018.01.01',
          examples: [
            {
              id: 78,
              name: 'example 1',
              date: '2018.02.12'
            },
            {
              id: 75,
              name: 'example 2',
              date: '2018.02.15'
            }
          ]
        },
        {
          id: uniqueId(),
          name: '刘长春',
          gender: 0,
          date: '2018.05.04',
          bd: 'BD 2018.04.03',
          examples: [
            {
              id: 55,
              name: 'example 1',
              date: '2018.02.15'
            }
          ]
        },
        {
          id: uniqueId(),
          name: '王大力',
          gender: 1,
          date: '2018.01.01',
          bd: 'BD 2018.01.01',
          examples: [
            {
              id: 78,
              name: 'example 1',
              date: '2018.02.12'
            },
            {
              id: 75,
              name: 'example 2',
              date: '2018.02.15'
            }
          ]
        },
        {
          id: uniqueId(),
          name: '刘长春',
          gender: 0,
          date: '2018.05.04',
          bd: 'BD 2018.04.03',
          examples: [
            {
              id: 55,
              name: 'example 1',
              date: '2018.02.15'
            }
          ]
        },
        {
          id: uniqueId(),
          name: '王大力',
          gender: 1,
          date: '2018.01.01',
          bd: 'BD 2018.01.01',
          examples: [
            {
              id: 78,
              name: 'example 1',
              date: '2018.02.12'
            },
            {
              id: 75,
              name: 'example 2',
              date: '2018.02.15'
            }
          ]
        },
        {
          id: uniqueId(),
          name: '刘长春',
          gender: 0,
          date: '2018.05.04',
          bd: 'BD 2018.04.03',
          examples: [
            {
              id: 55,
              name: 'example 1',
              date: '2018.02.15'
            }
          ]
        },
        {
          id: uniqueId(),
          name: '王大力',
          gender: 1,
          date: '2018.01.01',
          bd: 'BD 2018.01.01',
          examples: [
            {
              id: 78,
              name: 'example 1',
              date: '2018.02.12'
            },
            {
              id: 75,
              name: 'example 2',
              date: '2018.02.15'
            }
          ]
        },
        {
          id: uniqueId(),
          name: '刘长春',
          gender: 0,
          date: '2018.05.04',
          bd: 'BD 2018.04.03',
          examples: [
            {
              id: 55,
              name: 'example 1',
              date: '2018.02.15'
            }
          ]
        }
      ]
    };
  },
  methods: {
    // TODO: 滚动列表时更新
    handleScorll() {
      // ! this is a example method
      this.$socket.emit('onScorll', { currentPage: 2, pageSize: 10 });
    },
    handleSelect(example, patient) {
      const currentPI = this.list.find(({ id }) => id === patient) || {};
      const currentExamples = currentPI.examples.filter(
        ({ id }) => id === example
      );
      this.$emit('update:currentPatient', {
        ...currentPI,
        examples: currentExamples
      });
    }
  }
};
</script>

<style lang="less" scoped>
.mini-pi {
  box-sizing: border-box;
  flex: 29;
  background: linear-gradient(top, #dadcee, #fff);

  display: flex;
  flex-direction: column;
  &--list {
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }
}

.mini-pi_backup {
  min-width: 289px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-15vw);
  opacity: 0;
}

@media screen and (orientation: portrait) {
  .mini-pi {
    order: 1;
    display: flex;
    flex-direction: row;
  }
}
</style>

