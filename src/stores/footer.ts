import { defineStore } from "pinia";

export const useFooterStore = defineStore({
    id: 'footerStore',
    state: () =>({
        loading: false,
        newsletterForm: {
            name: '',
            email: ''
        }
    }),
    actions: {
        async signUpToTheNewsletter() {
            console.log('sending form:', this.newsletterForm)
            this.loading = true
            await setTimeout(() => {
                this.loading = false
                console.log('send')
            }, 1000)
        }
    }
})