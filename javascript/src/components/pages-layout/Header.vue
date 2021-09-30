<template>
  <header>
    <Dropdown>
      <template #dropdownTrigger>
        <div class="dropdown-trigger-field">
          <img src="../icons/user-dummy.svg" alt="user icon" />
          Alex Bobby
        </div>
      </template>

      <template #dropdownContent>
        <a
          href="https://github.com/abobykin"
          class="dropdown-item"
          target="_blank"
        >
          Github Profile
        </a>
        <a
          href="https://www.upwork.com/fl/alexanderbobykin"
          class="dropdown-item"
          target="_blank"
        >
          Upwork Profile
        </a>
      </template>
    </Dropdown>

    <Dropdown>
      <template #dropdownTrigger>
        <div class="dropdown-trigger-field">
          <img src="../icons/user-dummy.svg" alt="user icon" />
          Vitaly Username
        </div>
      </template>

      <template #dropdownContent>
        <span class="dropdown-item"> PornHub Profile </span>
        <span class="dropdown-item"> Logout </span>
      </template>
    </Dropdown>
  </header>
</template>

<script>
import Dropdown from '@/components/Dropdown'

export default {
  name: 'Header',
  components: {
    Dropdown,
  },
}
</script>
