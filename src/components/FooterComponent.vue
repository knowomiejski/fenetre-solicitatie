<template>
    <div class="footer">
        <div class="footer-content col-10 m-auto row py-5">
            <div class="col-md-4 p-md-0 py-3">
                <h4 class="text-primary">CONTACT</h4>
                <div class="my-3">
                    <div>
                        Saturnusstraat 60 U62
                    </div>
                    <div>
                        2516 AH Den Haag
                    </div>
                </div>
                <div class="my-3">
                    <div>
                        Weg der Verenigde Naties 1
                    </div>
                    <div>
                        3527 KT Utrecht
                    </div>
                </div>
                <div class="my-3">
                    <div>
                        T <a class="text-decoration-underline text-primary">0645576445</a>
                    </div>
                    <div>
                        E <a class="text-decoration-underline text-primary">j.nowomiejski1998@gmail.com</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 p-md-0 py-3">
                <h4 class="text-primary">PARTNERS</h4>
                <div class="my-3">
                    <div>
                        <span style="color: purple;">&#x2022;</span> Microsoft: <a class="text-decoration-underline text-primary">Silver partner</a>
                    </div>
                    <div>
                        <span style="color: purple;">&#x2022;</span> Progress: <a class="text-decoration-underline text-primary">Sitefintinity partner</a>
                    </div>
                    <div>
                        <span style="color: purple;">&#x2022;</span> Umbraco: <a class="text-decoration-underline text-primary">Registered partner</a>
                    </div>
                </div>
                <div class="my-3">
                    Lees onze <a class="text-decoration-underline text-primary">privacyverklaring ></a>
                </div>
                <div class="my-3">
                    <a class="text-decoration-underline text-primary">Visit our English page</a>
                </div>
            </div>
            <div class="col-md-4 p-md-0 py-3">
                <h4 class="text-primary">NIEUWSBRIEF</h4>
                <FormTextInputComponent class="my-1" v-model="newsName" input-name="newsName" placeholder="Kuba Nowomiejski" required :error="errorNewsName"/>
                <FormTextInputComponent class="my-1" v-model="newsEmail" input-name="newsEmail" placeholder="example@email.com" required :error="errorNewsEmail"/>
                <FormCheckInputComponent class="my-1" v-model="privacyPolicy" input-name="privacyPolicy" placeholder="privacyPolicy" label="Ik ga akkoord met de privacy policy" :error="errorPrivacyPolicy"/>
                <button :disabled="footerStore.loading" @click="sendForm()" class="btn btn-primary rounded-0 text-white my-2">{{footerStore.loading ? 'Bezig met verzenden...' : 'Aanmelden >'}}</button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import FormTextInputComponent from './shared/form/FormTextInputComponent.vue';
import FormCheckInputComponent from './shared/form/FormCheckInputComponent.vue';
import { useFooterStore } from '@/stores/footer';

const footerStore = useFooterStore()

const newsName = ref('')
const errorNewsName = ref('')
const newsEmail = ref('')
const errorNewsEmail = ref('')
const privacyPolicy = ref(false)
const errorPrivacyPolicy = ref('')
let errorCount = 0

const validateName = (): number => {
    if (newsName.value.length <= 0) {
        errorNewsName.value = 'De naam mag niet leeg zijn'
        return 1
    } else {
        return 0
    }
}

const validateEmail = (): number => {
    if (newsEmail.value.length <= 0) {
        errorNewsEmail.value = 'De email mag niet leeg zijn'
        return 1
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newsEmail.value) === false) {
        errorNewsEmail.value = 'Vul een geldig emailadres in'
        return 1
    } else {
        return 0
    }
}

const validatePrivacy = (): number => {
    if (!privacyPolicy.value) {
        errorPrivacyPolicy.value = 'Ga aub akkoord met de privacyverklaring'
        return 1
    } else {
        return 0
    }
}

const validateForm = () => {
    errorCount = validateName() + validateEmail() + validatePrivacy()
}

const resetValidation = () => {
    errorCount = 0
    errorNewsName.value = ''
    errorNewsEmail.value = ''
    errorPrivacyPolicy.value = ''
}

const sendForm = async () => {
    resetValidation()
    validateForm()
    if(errorCount <= 0) {
        footerStore.newsletterForm.name = newsName.value
        footerStore.newsletterForm.email = newsEmail.value
        await footerStore.signUpToTheNewsletter()
    }
}
</script>