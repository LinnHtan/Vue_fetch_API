export default {
  name: 'myDetail',
  data() {
    return {
      po: null
    };
  },
  methods: {
    back() {
      this.$router.push({ name: 'about' })
    }
  },
  mounted() {

    const detailId = this.$route.params.meId;

    fetch(`https://fakestoreapi.com/products/${detailId}`)
      .then((res) => res.json())
      .then(data => this.po = data)
      .catch(error => console.log(error.message));

  }
};
