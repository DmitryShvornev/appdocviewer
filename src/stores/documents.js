import {
    defineStore
} from "pinia";
import axios from "axios";

export const useDocumentsStore = defineStore(process.env.VUE_APP_STORE_NAME, {
    state: () => {
        return {
            documentItems: [],
            selectedItem: {},
            loading: false,
            error: false,
            errorText: ""
        }
    },

    actions: {
        async fetchDocumentItemsByParam(param) {
            if (param !== '') {
                this.loading = true;
                await axios.get(process.env.VUE_APP_ROUTE + param).then((response) => {
                    this.documentItems = response.data;
                    this.loading = false;
                }).catch((err) => {
                    this.loading = false;
                    this.error = true;
                    this.errorText = err.message;
                });
            } else {
                this.documentItems = [];
                this.selectedItem = {};
            }

        },

        setSelectedItem(item) {
            this.selectedItem = JSON.parse(JSON.stringify(item));
        }
    }
})