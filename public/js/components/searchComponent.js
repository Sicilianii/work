Vue.component('search', {
    data() {
        return {
            valueSearch: '',
        }
    },   
    methods: {
        search(value) {
            const regexp = new RegExp(value, 'i');
            this.filtred = this.cartProduct.filter(el => regexp.test(el.product_name))
        }
    }
});
