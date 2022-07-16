const app = Vue.createApp({
    data() {
        return {
            cart: [0,0],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            if (id==2234) {
                this.cart[0] += 1;
            } else 
                this.cart[1] += 1;
        },
        removeFromCart() {
            this.cart.splice(0,1,0)
            this.cart.splice(1,1,0)
        }
    }
})