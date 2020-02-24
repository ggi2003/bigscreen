<template>
  <div class="wrapper"   >
    <div class="data-card-header">
      <div class="meta">
        <span class="data-card-title">{{ title }}</span>
        <span class="data-card-action">
          <slot name="action"></slot>
        </span>
      </div>
    <div class="data-card-content">
        <span>{{ content }}</span>
    </div>

      <div class="total">
        <span>{{ total }}</span>  
      </div>
    </div>

    <div class="data-card-footer">
        <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DataCard",
    props: {
      title: {
        type: String,
        default: ''
      },
      total: {
        type: String,
        default: '6800'
      },
      content: {
        type: String,
        default: 'ç°å­ç¡®è¯'
      },
      loading: {
        type: Boolean,
        default: false
      },
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper{
    background: rgba(0, 0, 0, 0);
    // border: 1px solid #e8e8e8;
    text-align: center;
  }

</style>