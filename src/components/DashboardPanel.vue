<template>
    <div class="dashboard__panel">
        <img class="dashboard__panel-image" src="" alt="" width="424" height="286">
        <h2 class="dashboard__panel-title">Документ 1</h2>
        <p class="dashboard__panel-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.</p>
        <button class="dashboard__panel-button download-button">Скачать</button>
        <button class="dashboard__panel-button delete-button">Удалить</button>
    </div>
</template>
<style>
.dashboard__panel-container {
    border-left: 1px solid #E0E0E0;
}

.dashboard__panel-button {
    border-radius: 8px;
    background-color: white;
    padding: 7px 28px;
    font-weight: 400;
    font-size: 14px;
}

.dashboard__panel-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: #000000;
}

.dashboard__panel-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #6C757D;
}

.download-button {
    border: 1px solid #0D6EFD;
    color: #0D6EFD;
}

.delete-button {
    border: 1px solid #DC3545;
    color: #DC3545;
}
</style>