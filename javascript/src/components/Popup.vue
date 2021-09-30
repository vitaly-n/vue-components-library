<template>
  <transition name="modal">
    <div class="modal-wrapper">
      <div class="modal-container">
        <input type="button" class="icon-close" @click="close" />

        <div class="modal-header">
          <slot name="header"></slot>
        </div>

        <div class="modal-body">
          <slot name="body"></slot>
        </div>

        <div class="modal-form-buttons" v-show="!hiddenButtons">
          <button class="button secondary-btn" @click="close">
            <slot name="cancelButton">Cancel</slot>
          </button>

          <button
            class="button primary-btn"
            @click="onClickAction"
            :disabled="disabledAction"
            :class="{ 'warning-background': redButton }"
          >
            <slot name="actionButton">Save</slot>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    close: {
      type: Function,
      required: true,
    },

    onClickAction: {
      type: Function,
      required: false,
    },

    disabledAction: {
      type: Boolean,
      required: false,
    },

    hiddenButtons: {
      type: Boolean,
      required: false,
    },

    redButton: {
      type: Boolean,
      required: false,
    },
  },
}
</script>

<style scoped src="./sass/Popup.sass" />
