<template>
  <div class="flex">
    <div class="logo">
      <img src="/static/images/logo.png" mode="widthFix" />
    </div>
    <van-button
      size="large"
      color="#101010"
      class="btn"
      open-type="getUserInfo"
      @getuserinfo="_wxLogin"
    >
      <div class="row">
        <div class="icon">
          <van-icon name="idcard" size="22"/>
        </div>
        <div>微信登录</div>
      </div>
    </van-button>
  </div>
</template>

<script>
import { StoreUser, StoreToken } from '@/utils/wxstore'
import { wxLogin } from '@/api/login'
export default {
  name: 'auth',
  data () {
    return {
      code: ''
    }
  },
  onLoad () {
    this.getWxCode()
  },
  methods: {
    async getWxCode () {
      const result = await wx.login()
      if (result.code) {
        this.code = result.code
      }
    },
    async _wxLogin (e) {
      const user = e.mp.detail
      // await StoreUser.set(e.mp.detail)
      const res = await wxLogin({ code: this.code, user: user })

      if (res.code === 200) {
        await StoreToken.set(res.token)
        await StoreUser.set(res.data)
        wx.navigateBack()
      }
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 120px;
  left: 0;
}
.flex .logo {
  width: 240px;
  height: 240px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 100px;
}
.flex .logo img {
  width: 100%;
}
.flex .row {
  flex-flow: row nowrap;
  display: flex;
}
.flex .icon {
  margin-right: 20px;
}
.flex .btn {
  width: 90%;
  overflow: hidden;
  border-radius: 12px;
}
</style>