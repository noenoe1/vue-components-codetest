<template>
  <div
    class="rounded py-3 px-3 items-center w-full "
    :class="[borderTheme, bgTheme]"
    >
    <div class="ms-4">
      <div  v-if="titleVisible" class="flex flex-auto justify-between">
          <text-label class="flex">
              <icon :name="iconName" width="28" height="28" viewBox="0 0 28 28" class="mr-2" textColor="#fff" :fillColor="iconTheme"  />
              A short descriptive header 
          </text-label>
          <icon name="close" width="14" height="14" viewBox="0 0 14 14" textColor="#566271"  />
      </div>
      
      <slot name="content" />

      <div v-if="footerVisible" class="w-1/2 grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        <slot name="footer" />
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Icon from "@/components/core/icon/Icon.vue";
export default {
  components: {
    Icon
  },
  props: {
    titleVisible: {
      type: Boolean,
      default: true,
    },
    footerVisible: {
      type: Boolean,
      default: true,
    },
    borderTheme: {
      type: String,
      default: "border border-blue-60",
    },
    iconName: {
      type: String,
      default: "info",
    },
    iconTheme: {
      type: String,
      default: "#2C75DD",
    },
    bgTheme: {
      type: String,
      default: "bg-blue-00"
    }
  },

};
</script>
