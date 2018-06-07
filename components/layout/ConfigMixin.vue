<script>
  export default {
    props: {
      color: {
        type: String,
        default: 'black',
        validator(value) {
          return ['white', 'black'].indexOf(value) !== -1;
        }
      }
    }
  }
</script>
