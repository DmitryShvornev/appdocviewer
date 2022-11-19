<template>
    <div class="dashboard__panel" v-if="store.selectedItem.id">
        <img class="dashboard__panel-image" :src="store.selectedItem.image" alt="" width="424" height="286">
        <div class="dashboard__panel-wrapper">
            <h2 class="dashboard__panel-title">{{ store.selectedItem.name }}</h2>
            <div class="dashboard__button-wrapper">
                <button class="dashboard__panel-button download-button">Скачать</button>
                <button class="dashboard__panel-button delete-button">Удалить</button>
            </div>

            <h2 class="dashboard__panel-title">Описание</h2>
            <div class="dashboard__panel-text-wrapper">
                <p class="dashboard__panel-text">{{ store.selectedItem.description }}</p>
            </div>
        </div>
    </div>
    <div class="dashboard__panel" v-else>
        <p class="dashboard__panel-text--empty">Выберите документ, чтобы посмотреть его содержиое</p>
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
}
</script>
<style>
.dashboard__panel {
    border-left: 1px solid var(--border-color);
    padding: 30px;
    display: flex;
    flex-direction: row;
    gap: 61px;
}

.dashboard__panel-wrapper {
    display: flex;
    flex-direction: column;
}


.dashboard__panel-button {
    border-radius: 8px;
    background-color: white;
    padding: 7px 28px;
    font-weight: 400;
    font-size: 14px;
    width: 114px;
}

.download-button:hover {
    color: white;
    background-color: var(--blue);
}

.delete-button:hover {
    color: white;
    background-color: var(--red);
}

.dashboard__panel-title {
    font-weight: 600;
    font-size: 16px;
    color: black;
    margin: 0;
    margin-bottom: 14px;
}

.dashboard__button-wrapper {
    display: flex;
    flex-direction: row;
    gap: 17px;
    margin-bottom: 47px;
}

.dashboard__panel-text-wrapper {
    overflow-y: scroll;
    height: 320px;
}

.dashboard__panel-text {
    font-weight: 400;
    font-size: 14px;
    color: var(--text-color);
}

.dashboard__panel-text--empty {
    font-weight: 400;
    font-size: 14px;
    color: var(--text-color);
    margin-top: 250px;
    margin-left: 290px;
}

.download-button {
    border: 1px solid var(--blue);
    color: var(--blue);
}

.delete-button {
    border: 1px solid var(--red);
    color: var(--red);
}
</style>