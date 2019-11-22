import BackTop from '@/components/content/backtop/BackTop'
export const backtopmixin = {
  components:{
    BackTop
  },
  data(){
    return {
       backtop:false,
    }
  },
  methods:{
    backclick(){
      // this.$refs.scroll选中scroll组件来使用里面的scrollTo方法
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
  }
}
