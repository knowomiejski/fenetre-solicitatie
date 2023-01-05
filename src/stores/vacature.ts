import { defineStore } from "pinia";
import { vacaturePage } from "@/data/vacaturePageData";
import type FenetrePage from "@/models/FenetrePage";
import type TextSectionModel from "@/models/TextSectionModel";

export const useVacatureStore = defineStore({
    id: 'vacaturePage',
    state: () =>({
        loading: false,
        vacaturePage: {} as FenetrePage,
        vacatureFormData: {}
    }),
    actions: {
        async fetchVacaturePage() {
            this.loading = true
            await setTimeout(() => {
                this.vacaturePage = vacaturePage
                this.loading = false
            }, 1300)
        }
    },
    getters: {
        vacaturePageSections(): Array<TextSectionModel> {
            return this.vacaturePage.sections
        }
    }
});
