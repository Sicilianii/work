const app = new Vue({
    el: "#app",
    data: {
        searchValue: '',
        hidenMenu: false,
    },
    methods: {
        getJSON(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        },
    },
    //     postJSON(url, data) {
    //         return fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(data)
    //         })
    //             .then(result => result.json())
    //             .catch(error => console.log(error))
    //     },
    //     putJSON(url, data) {
    //         return fetch(url, {
    //             method: 'PUT',
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(data)
    //         })
    //             .then(result => result.json())
    //             .catch(error => console.log(error))
    //     },
    //     deleteJSON(url, data) {
    //         return fetch(url, {
    //             method: 'DELETE',
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         })
    //             .then(result => result.json())
    //             .catch(error => console.log(error))
    //     }
    // },
    mounted() {
        
    }
})