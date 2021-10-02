<template>
  <!-- <div
    class="modal-backdrop fade"
    :class="{ show: open, 'd-none': !open }"
  ></div> -->

  <div :class="{ 'modal-open': open }">
    <div class="modal d-none" :class="{ show: open, 'd-block': open }">
      <div class="modal-content modal-lg">
        <div class="modal-header">
          <slot name="modalHeader"></slot>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="p-125 border-top flex justify-content-between">
          <slot name="modalFooter"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComp",
  props: ["open"],
};
</script>

<style scoped>
.d-block {
  display: block;
}
.p-125 {
  padding: 0.6rem;
}
</style>
