<template>
    <div class="dashboard__wrapper">
        <div class="dashboard__container">
            <h3 class="dashboard__title">Поиск документа</h3>
            <input type="text" id="document-search" name="document-search" class="dashboard__document-search"
                placeholder="Введите ID документа" ref="search" :autocomplete="false" @input="searchDocuments">
        </div>
        <div class="dashboard__container">
            <h3 class="dashboard__title">Результаты</h3>
            <p class="dashboard__results-text" v-if="store.loading">Загрузка...</p>
            <p class="dashboard__results-text" v-else-if="store.error">{{ store.errorText }}</p>
            <p class="dashboard__results-text" v-else-if="store.documentItems.length === 0">Ничего не найдено</p>
            <ul class="dashboard__results-list" v-else>
                <li class="list-item" :class="{ active: store.selectedItem.id === item.id }"
                    v-for="item of store.documentItems" :key="item.id" @click="store.setSelectedItem(item)">
                    <img class="list-item__image" :src="item.image" width="70" height="70" alt="">
                    <div class="list-item__wrapper">
                        <p class="list-item__title">{{ item.name }}</p>
                        <p class="list-item__size">12 МВ</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { useDocumentsStore } from '@/stores/documents';

export default {
    setup() {
        const store = useDocumentsStore();
        return {
            store
        }
    },

    methods: {
        searchDocuments() {
            let search = this.$refs.search.value;
            console.log(search);
            this.store.fetchDocumentItemsByParam(search);
        }
    }
}
</script>
<style>
.dashboard__wrapper {
    display: flex;
    flex-direction: column;
}

.dashboard__container {
    margin-top: 27px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
}

.dashboard__title {
    font-weight: 600;
    font-size: 16px;
}

.dashboard__results-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: var(--text-color);
}

.dashboard__results-list {
    padding: 5px;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 18px;
    overflow-y: scroll;
    height: 340px;
}

.list-item {
    width: 240px;
    height: 70px;
    display: flex;
    flex-direction: row;
    box-shadow: 0px 0px 10px var(--box-shadow-color);
}

.list-item:hover,
.list-item:focus {
    background: var(--blue);
}

.active {
    background: var(--blue);
}



.list-item__wrapper {
    padding-left: 15px;
    padding-top: 25px;
}

.list-item__image {
    border-right: 1px solid var(--border-color);
}

.list-item__title {
    font-weight: 600;
    font-size: 14px;
    line-height: 0;
    margin: 0;
    color: var(--black-secondary);
}

.list-item__size {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: var(--text-secondary);
    margin-top: 12px;
}

.list-item:hover .list-item__title,
.list-item:focus .list-item__title,
.list-item:hover .list-item__size,
.list-item:focus .list-item__size,
.active .list-item__title,
.active .list-item__size {
    color: white;
}

.list-item:hover .list-item__image,
.list-item:focus .list-item__image {
    border-right: 1px solid var(--blue);
}

.dashboard__document-search {
    padding: 16px 24px;
    width: 240px;
    margin-right: 22px;
    border: 1.5px solid var(--border-secondary);
    border-radius: 8px;
}

.dashboard__document-search::placeholder {
    color: var(--text-color);
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
}
</style>