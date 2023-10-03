import axios from "axios";
export default {
    name: 'myAxios',
    data() {
        return {
            list: [],
        }
    },
    methods: {
        detail(id) {
            this.$router.push({
                name: "axDetail",
                params: {
                    Id: id,
                }
            })

        }
    },

    mounted() {
        axios.get("https://rickandmortyapi.com/api/character").then((response) => {
            this.list = response.data.results;
        })
    }
};

