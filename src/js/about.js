export default {
    name: 'about',
    data () {
      return {
       
        posts:[],
      };
    },
    methods: {
      details(id) {
        this.$router.push({
            name: "myDetail",
            params: {
                meId: id,
            }
        });
    },
    },
    mounted () {
      fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(data => this.posts = data)
      // .then((data) => {
      // this.posts = data;
      // });
    }
    
  };