import {
    defineStore
} from "pinia";
import axios from "axios";

export const useDocumentsStore = defineStore('documents', {
    state: () => {
        return {
            documentItems: [],
            selectedItem: {},
            loading: false,
            error: false,
            panelText: ""
        }
    },

    actions: {
        async fetchDocumentItemsByParam(param) {
            if (param !== '') {
                this.loading = true;
                await axios.get(`/user/docs?search=${param}`).then((response) => {
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