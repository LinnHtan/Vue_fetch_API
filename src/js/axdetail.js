import axios from "axios";
export default {
    name: 'axDetail',
    data() {
        return {
            alien: null,
        }
    },
    methods: {
        back() {
            this.$router.push({ name: 'myAxios' })

        }
    },

    mounted() {
        const alienId = this.$route.params.Id;
        axios.get(`https://rickandmortyapi.com/api/character/${alienId}`)
            .then((response) => {
                this.alien = response.data;
            })
    }

};
