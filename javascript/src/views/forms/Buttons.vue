<template>
  <h1>Buttons</h1>

  <h3>Testing events delegate from Academy course</h3>
  <ListTestWrapper />

  <div class="list-wrapper">
    <BaseInput
      v-model="newContact"
      placeholder="Name"
      type="text"
      class="first-input"
    />

    <!-- <BaseInput label="label" /> -->
    <br />

    <SubmitButton label="Add contact" :onClick="toAddContact" />
    <SubmitButton label="Sort" :onClick="toSortContacts" />

    <transition-group name="slide-up" tag="ul" appear>
      <li v-for="(contact, index) in contacts" :key="index" class="first-li">
        {{ contact }}
      </li>
    </transition-group>
  </div>

  <div class="card">
    <transition name="fade">
      <div v-if="imgShown" class="img-container">
        <img alt="Uma" src="@/assets/img/uma-turman.png" />
      </div>
    </transition>
  </div>

  <SubmitButton label="SHOW UMA" :onClick="toShowImg" />

  <transition name="fade-button">
    <SubmitButton
      v-if="imgShown"
      label="HIDE UMA"
      :onClick="toShowImg"
      class="btn-right"
    />
  </transition>
</template>

<script>
//import CloseButton from '@/views/forms/buttons/CloseButton.vue';
import SubmitButton from '@/views/forms/buttons/SubmitButton.vue'
import ListTestWrapper from '@/components/testingAcademyThings/listEventDelegate/ListTestWrapper.vue'

export default {
  name: 'Buttons',

  components: {
    //  CloseButton,
    SubmitButton,
    ListTestWrapper,
  },

  data() {
    return {
      imgShown: false,
      newContact: '',
      contacts: ['Petin', 'Maloy', 'Sinoptick', 'Agata'],
    }
  },

  methods: {
    toShowImg() {
      this.imgShown = !this.imgShown
    },

    toAddContact() {
      this.contacts.push(this.newContact)
      this.newContact = ''
    },

    toSortContacts() {
      this.contacts = this.contacts.sort()
    },
  },
}
</script>

<style scoped>
.card {
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-container {
  width: 200px;
  height: 200px;
  border-radius: 20px;
  padding: 0;
  overflow: hidden;
  border: 9px solid transparent;
}

.img-container img {
  height: 210px;
  width: 210px;
}

.btn-right {
  float: right;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(200px) rotate(360deg);
}

.fade-enter-active {
  transition: all 0.9s ease-out;
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(180px);
}

.fade-leave-active {
  transition: all 0.9s ease-in;
}

.fade-button-enter-from {
  opacity: 0;
  transform: scale(0.5);
}

.fade-button-enter-active {
  transition: all 0.9s ease-in-out;
}

.fade-button-leave-to {
  opacity: 0;
  transform: scale(0.3) rotateZ(180deg);
}

.fade-button-leave-active {
  transition: all 0.9s ease-out;
}

.slide-up-item {
  margin-right: 10px;
}
.slide-up-enter {
  transform: translateX(20px);
  opacity: 0;
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.8s ease-in-out;
}
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.slide-up-move {
  transition: transform 0.5s ease-out;
}
/* 
.slide-up-enter {
  transform: translateX(30px);
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.8s ease;
} */

.list-wrapper {
  margin: 40px 0;
  width: 40%;
  display: flex;
  flex-direction: column;
}

.first-input {
  height: 35px;
  margin: 20px 0;
  border-radius: 10px;
}

.first-li {
  margin: 10px 0;
  font-size: 20px;
}

input:focus {
  outline: invert;
}
</style>
