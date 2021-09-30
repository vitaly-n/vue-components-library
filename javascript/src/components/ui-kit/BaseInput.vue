<template>
  <label class="input-label" v-if="withLabel" :class="{ block: vertical }">
    {{ label }}
  </label>

  <input
    v-bind="$attrs"
    :value="modelValue"
    :class="{ block: fullWidth, 'has-error': errorMessage }"
    @input="onInput"
    @change="changed"
    @keypress="validateOnInput"
    @blur="onBlur"
    class="base-input"
    ref="element"
  />

  <div v-if="errorMessage" class="form-errors under-field-error">
    {{ errorMessage }}
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  emits: ['update:modelValue'],
  props: {
    label: {
      type: String,
      default: '',
    },

    withLabel: {
      type: Boolean,
      default: false,
    },

    modelValue: {
      type: [String, Number],
      default: '',
    },

    vertical: {
      type: Boolean,
      default: false,
    },

    fullWidth: {
      type: Boolean,
      default: false,
    },

    changed: {
      type: Function,
      required: false,
    },

    onTypingValue: {
      type: Function,
      required: false,
    },

    validationOnTyping: {
      type: Function,
      required: false,
    },

    validateOnBlur: {
      type: Function,
      required: false,
    },

    preventInputValidation: {
      type: Function,
      required: false,
    },

    focused: {
      type: Boolean,
      required: false,
    },

    index: {
      type: Number,
      required: false,
    },

    errorMessage: {
      type: String,
      required: false,
    },
    validate: {
      type: String,
      required: false,
    },
    locationId: {
      type: Number,
      required: false,
    },
  },

  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event.target.value)
      if (this.onTypingValue) {
        this.onTypingValue(event)
      }
    },

    validateOnInput(e) {
      if (e.key == 'Enter') {
        e.preventDefault()
      }

      if (this.validate === 'integer') {
        if (
          !e.code.includes('Digit') &&
          !e.code.includes('Arrow') &&
          e.key !== 'Backspace'
        ) {
          e.preventDefault()
        }
      } else if (this.validate === 'double') {
        if (
          !e.code.includes('Digit') &&
          !e.code.includes('Arrow') &&
          e.key !== 'Backspace' &&
          e.key !== '.'
        ) {
          e.preventDefault()
        }
      }

      if (this.preventInputValidation) this.preventInputValidation(e)
      if (this.validationOnTyping) this.validationOnTyping(e)
    },

    onBlur() {
      if (this.changed) this.changed()
      if (this.validateOnBlur)
        this.validateOnBlur(this.modelValue, this.locationId)
    },
  },

  mounted() {
    if (this.focused && (this.index === 0 || this.index === undefined)) {
      this.$refs.element.focus()
    }
  },
}
</script>

<style>
.block {
  display: block;
  width: 100%;
}

input::placeholder {
  color: var(--nav-link-icon);
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}

.base-input {
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

.base-input.disabled {
  pointer-events: none;
  color: rgba(0, 0, 0, 0.2);
}

.input-label {
  line-height: 24px;
  transition: all 0.35s;
  outline: none;
  font-size: 12px;
}

.base-input:focus {
  border-color: var(--secondary);
}

.base-input.has-error {
  border-color: var(--border-error) !important;
}
</style>
