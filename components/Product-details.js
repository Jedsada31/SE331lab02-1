app.component("product-details", {
    props: {
        details: {
            type: Array,
            required: true,
        },
    },
    template:
        /*html*/
        `<ul v-for="(detail, index) in details" :key="index" class="product-details">
            <li>{{ detail }}</li>
        </ul>`,
});