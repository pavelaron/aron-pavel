<template>
  <div class="container-menu" :class="{ 'active': menuOpen }">
    <div class="container-hamburger" @click="menuOpen = !menuOpen">
      <div v-for="index in 3" :key="index" class="line" :class="`line-${index}`" />
    </div>
    <div class="container-list">
      <github-ribbon user="pavelaron" />
      <a rel="noopener" class="menu-item" href="" target="_blank" @click.prevent="reset">Reset position</a>
      <a
        rel="noopener"
        class="menu-item"
        href="/cv/aron-pavel-cv.pdf"
        target="_blank"
        @click="downloadCV"
      >
        Download CV
      </a>
      <a rel="noopener" class="menu-item" href="" target="_blank" @click.prevent="works">Other works</a>
      <a rel="noopener" class="menu-item" href="" target="_blank" @click.prevent="contact">Contact</a>
    </div>

    <div v-show="false">
      <div ref="form">
        <form>
          <input type="text" name="name" class="swal2-input name" placeholder="Name" required>
          <input type="email" name="email" class="swal2-input email" placeholder="Email" required>
          <input type="text" name="subject" class="swal2-input subject" placeholder="Subject">
          <textarea name="message" class="swal2-input message" placeholder="Message" required />
        </form>
      </div>

      <div ref="works">
        <h3>Websites Developed</h3>
        <p class="website-item">
          <a href="https://dos-shelf.web.app" rel="noopener" target="_blank">dos-shelf.web.app</a>
          <span>Basic DOS game emulator web application</span>
        </p>
        <p class="website-item">
          <a href="https://olivakaracsony.hu" rel="noopener" target="_blank">olivakaracsony.hu</a>
          <span>Pasta &amp; olive oil wholesale business page</span>
        </p>
        <p class="website-item">
          <a href="https://prohair.hu" rel="noopener" target="_blank">prohair.hu</a>
          <span>Hair implant clinic homepage</span>
        </p>
        <p class="website-item">
          <a href="https://dori-marci.web.app" rel="noopener" target="_blank">dori-marci.web.app</a>
          <span>Wedding page</span>
        </p>
        <p class="website-item">
          <a href="https://dumod.hu" rel="noopener" target="_blank">dumod.hu</a>
          <span>Mechanical engineering firm landing page</span>
        </p>
        <h3>BlueSpeed</h3>
        <a class="link-video-bluespeed" href="https://www.youtube.com/watch?v=_1kk1unkMIE" rel="noopener" target="_blank" />
      </div>
    </div>
  </div>
</template>

<script>
import GithubRibbon from '@/components/GithubRibbon'
import MailHandler from '@/handlers/mail-handler'

export default {
  name: 'Hamburger',
  components: {
    GithubRibbon
  },
  props: {
    onreset: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      menuOpen: false
    }
  },
  methods: {
    reset () {
      this.onreset()
      this.menuOpen = false
    },
    downloadCV () {
      this.menuOpen = false
    },
    works () {
      this.$swal({
        html: this.$refs.works.innerHTML
      })

      this.menuOpen = false
    },
    contact () {
      this.$swal({
        title: 'Contact Form',
        showCancelButton: true,
        html: this.$refs.form.innerHTML,
        confirmButtonText: 'Send',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !this.$swal.isLoading(),
        preConfirm: async () => {
          const form = Object.values(document.forms).find(item => (
            item.parentElement.id === 'swal2-content'
          ))

          const { name, email, message } = form

          if (!name.value || !email.value || !message.value) {
            this.$swal.showValidationMessage('Please fill in all fields!')
            return false
          }

          try {
            const result = await MailHandler.sendMail(form, this.$config.gasId)
            this.$swal.fire('Thank you!', result.data.message, 'success')
          } catch (error) {
            this.$swal.showValidationMessage('Failed to send message. Please try again!')
            return false
          }
        }
      })

      this.menuOpen = false
    }
  }
}
</script>

<style scoped>
.container-hamburger {
  position: fixed;
  width: 30px;
  top: 15px;
  left: 15px;
  cursor: pointer;
  z-index: 2;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.line {
  transition: all 0.2s ease-in;
}

.container-list {
  position: fixed;
  width: 260px;
  width: calc(260px + constant(safe-area-inset-left));
  width: calc(260px + env(safe-area-inset-left));
  height: 100%;
  top: 0;
  left: calc(-260px - constant(safe-area-inset-left) * 2);
  left: calc(-260px - env(safe-area-inset-left) * 2);
  padding-top: 90px;
  padding-left: constant(safe-area-inset-left);
  padding-left: env(safe-area-inset-left);
  background-color: #333333;
  z-index: 1;
  transition: all 0.2s ease-in;
}

.container-list a.fork {
  width: 100px;
  height: 100px;
  top: 0;
  right: 0;
  position: absolute;
}

.container-list a.fork .ribbon {
  background-color: #aa0000;
  color: white;
}

.container-list a.menu-item,
.container-list a.menu-item:visited,
.container-list a.menu-item:active {
  color: white;
  margin: 15px 20px;
  display: block;
  padding: 5px 15px;
  border-style: solid;
  border-radius: 30px;
  border-width: 2px;
  text-decoration: none;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
}

.active .container-list {
  left: 0;
}

.active .line-1 {
  transform: translateY(10px) rotateZ(45deg);
}

.active .line-2 {
  transform: rotateY(90deg);
}

.active .line-3 {
  transform: translateY(-10px) rotateZ(-45deg);
}

.line {
  position: relative;
  height: 5px;
  margin: 5px auto;
  background-color: white;
  border-radius: 3px;
}
</style>

<style>
.swal2-container {
  font-family: sans-serif;
}

.swal2-container.swal2-backdrop-show {
  background-color: rgba(0, 0, 0, 0.5);
}

.swal2-title,
.swal2-html-container {
  text-align: center;
}

.swal2-popup {
  flex-direction: column;
}

.swal2-input {
  display: block;
  width: 100%;
  min-height: 40px;
  margin: 20px auto;
}

.swal2-input.subject {
  display: none;
}

.swal2-styled.swal2-confirm,
.swal2-styled.swal2-cancel {
  min-width: 200px;
}

textarea.swal2-input {
  font-family: sans-serif;
  min-height: 100px;
  padding: 8px;
  resize: vertical;
}

.swal2-actions {
  justify-content: center;
}

.website-item a,
.website-item a:visited,
.website-item a:active {
  color: white;
}

.website-item span {
  display: block;
  margin-top: 5px;
  font-size: 14px;
}

.link-video-bluespeed {
  position: relative;
  display: block;
  width: 100%;
  height: 150px;
  background-color: black;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('~@/assets/images/other/bg-video.jpg');
}

.link-video-bluespeed:after {
  content: '';
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url('~@/assets/images/icon-play.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

@media screen and (min-width: 768px) {
  .link-video-bluespeed {
    height: 200px;
  }

  .swal2-styled.swal2-confirm,
  .swal2-styled.swal2-cancel {
    width: auto;
  }
}

@media screen and (orientation: landscape) {
  .ios.pwa .container-menu .container-hamburger {
    left: constant(safe-area-inset-left);
    left: env(safe-area-inset-left);
  }
}
</style>
