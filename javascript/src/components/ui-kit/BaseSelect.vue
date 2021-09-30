<template>
  <div class="select-block">
    <label class="select-block-label" v-if="label">
      {{ label }}
    </label>

    <input
      :value="modelValue"
      v-bind="$attrs"
      @focus="onClickInput"
      @keydown="listenToInput"
      @keypress="(event) => event.preventDefault()"
      class="base-select block"
      @blur="onSelectBlur"
      :placeholder="placeholder"
    />

    <div
      v-if="opened && dropdownValuesOpened"
      class="select-dropdown-values"
      id="container"
    >
      <div class="dropdown-overlay" @click="toggle" />

      <div
        v-for="(item, i) in options"
        :key="item"
        class="value"
        :class="{ selected: i === computedSelectedItemIndex }"
        @mousedown.stop="onSelect(item)"
        @mouseover="onHoverItem(i)"
      >
        <span class="dropdown-value">
          {{ item }}
        </span>
      </div>
    </div>

    <span class="base-select-arrow-icon" @mousedown.stop="onClickInput">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.7345 6.28737C10.8386 6.18429 10.9792 6.12646 11.1257 6.12646C11.2722 6.12646 11.4128 6.18429 11.5169 6.28737C11.5683 6.33799 11.6091 6.39833 11.637 6.46487C11.6648 6.53141 11.6792 6.60283 11.6792 6.67497C11.6792 6.74711 11.6648 6.81853 11.637 6.88507C11.6091 6.95162 11.5683 7.01195 11.5169 7.06257L8.39049 10.1266C8.28615 10.2295 8.14547 10.2872 7.99889 10.2872C7.85232 10.2872 7.71164 10.2295 7.60729 10.1266L4.48089 7.06257C4.42949 7.01195 4.38868 6.95162 4.36081 6.88507C4.33295 6.81853 4.3186 6.74711 4.3186 6.67497C4.3186 6.60283 4.33295 6.53141 4.36081 6.46487C4.38868 6.39833 4.42949 6.33799 4.48089 6.28737C4.585 6.18429 4.72559 6.12646 4.87209 6.12646C5.0186 6.12646 5.15919 6.18429 5.26329 6.28737L8.00009 8.80017L10.7345 6.28737Z"
          fill="#4C5B7A"
        />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',

  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    options: {
      type: Array,
      required: false,
    },
    changed: {
      type: Function,
      required: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      selectedOption: '',
      dropdownValuesOpened: false,
      opened: false,
      selectedItemIndex: 0,
    }
  },

  methods: {
    toggle() {
      this.dropdownValuesOpened = !this.dropdownValuesOpened
    },

    onClickInput() {
      this.dropdownValuesOpened = true
      this.onFocus()
    },

    onSelectBlur() {
      this.dropdownValuesOpened = false
    },

    listenToInput(e) {
      if (
        e.key === 'ArrowDown' &&
        this.selectedItemIndex !== this.options.length - 1
      ) {
        this.selectedItemIndex++
        if (this.selectedItemIndex > 7) this.scrollToNext()
      }

      if (e.key === 'ArrowUp' && this.selectedItemIndex !== 0) {
        this.selectedItemIndex--
        this.scrollToPrev()
      }

      if (e.code === 'Enter') {
        this.onSelect(this.options[this.computedSelectedItemIndex])
      }
    },

    scrollToNext() {
      const container = this.$el.querySelector('#container')
      container.scrollTop = container.scrollTop + 41
    },

    scrollToPrev() {
      const container = this.$el.querySelector('#container')
      container.scrollTop = container.scrollTop - 41
    },

    onHoverItem(i) {
      this.selectedItemIndex = i
    },

    onSelect(item) {
      this.$emit('update:modelValue', item)
      if (this.changed) {
        this.changed({
          target: {
            value: item,
          },
        })
      }
      this.opened = false
    },

    onFocus() {
      this.opened = true
    },
  },

  computed: {
    computedSelectedItemIndex() {
      if (this.selectedItemIndex > this.options.length - 1) {
        return 0
      } else {
        return this.selectedItemIndex
      }
    },
  },
}
</script>

<style scoped>
.select-block {
  position: relative;
}

.block {
  display: block;
  width: 100%;
}

input::placeholder {
  color: var(--nav-link-icon);
}

.base-select {
  height: 35px;
  background-color: var(--light-gray);
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: 14px;
  color: var(--dark-gray);
  padding: 9px 12px 8px;
  outline: none;
  font-family: 'Mont';
}

.base-select.disabled {
  pointer-events: none;
  color: rgba(0, 0, 0, 0.2);
}

.select-block-label {
  line-height: 24px;
  transition: all 0.35s;
  outline: none;
  font-size: 12px;
}

.base-select:focus {
  border-color: var(--secondary);
}

.select-dropdown-values {
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: white;
  box-shadow: rgb(121 133 200 / 23%) 4px 4px 8px;
  border-radius: 0 0 14px 0;
  z-index: 2;
  max-height: 210px;
  min-height: 45px;
  overflow: auto;
  padding: 3px 3px;
}

.selected .dropdown-value {
  background-color: var(--light-gray);
  color: black;
}

.dropdown-value {
  position: relative;
  display: block;
  padding: 6px 10px;
  color: #7d89a4;
  z-index: 12;
  font-size: 14px;
  width: 100%;
  text-align: left;
}

.value:last-child > .dropdown-value {
  border-radius: 0 0 12px 0;
}

.dropdown-value:hover {
  cursor: pointer;
  color: black;
  background-color: var(--light-gray);
}

.base-select-arrow-icon {
  display: inline-block;
  position: absolute;
  bottom: 5px;
  right: 7px;
  z-index: 1;
}

.select-block .dropdown-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.3s;
  background-color: transparent;
  z-index: 1;
}

.category-form .text-inputs-part > .select-block > .base-select-arrow-icon {
  bottom: 0px;
}
</style>
