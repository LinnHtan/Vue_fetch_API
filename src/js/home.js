export default {
  name: 'HomeView',
  data() {
    return {
      loadingStatus: false,
      posts: [],
    };
  },
  methods: {
    getData() {
      this.loadingStatus = true;
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.posts = json;
          this.loadingStatus = false;
        });

    }
  },
};
