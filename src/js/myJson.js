import axios from "axios";
export default {
    name: 'myJson',
    data() {
        return {
            list: [],
            postCount: '',
            title: '',
            author: '',
            validation: {
                title: false,
                author: false,
            }
        };
    },
    methods: {
        saveInfo() {
            this.validation.title = this.title == "" ? true : false;
            this.validation.author = this.author == "" ? true : false;
            if (!this.validation.title && !this.validation.author) {
                let myData = {
                    id: ++this.postCount,
                    title: this.title,
                    author: this.author
                };
                axios.post(" http://localhost:3000/posts", myData);
                this.loadData();
                this.clearForm();
            }


        },
        clearForm() {
            this.title = "";
            this.author = "";
        },
        loadData() {
            axios.get(" http://localhost:3000/posts").then((response) => {
                this.list = response.data;
                this.postCount = response.data.length;
            })
        }
    },

    mounted() {
        this.loadData();
    },

};
