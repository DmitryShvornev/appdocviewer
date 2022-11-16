<template>
    <div class="dashboard__wrapper">
        <div class="dashboard__container">
            <h3 class="dashboard__title">Поиск документа</h3>
            <input type="text" id="document-search" name="document-search" class="dashboard__document-search"
                placeholder="Введите ID документа">
        </div>

        <div class="dashboard__container">
            <h3 class="dashboard__title">Результаты</h3>
            <p class="dashboard__results-text">Ничего не найдено</p>
            <ul class="dashboard__results-list">
                <li class="list-item">
                    <img class="list-item__image" src="" width="70" height="70" alt="">
                    <div class="list-item__wrapper">
                        <p class="list-item__title">Документ 1</p>
                        <p class="list-item__size">12 МВ</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
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
    color: #6C757D;
}

.dashboard__results-list {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.list-item {
    width: 240px;
    height: 70px;
    display: flex;
    flex-direction: row;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.list-item__wrapper {
    padding-left: 15px;
    padding-top: 25px;
}

.list-item__image {
    border-right: 1px solid #E0E0E0;
}

.list-item__title {
    font-weight: 600;
    font-size: 14px;
    line-height: 0;
    margin: 0;
    color: #212529;
}

.list-item__size {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #DEE2E6;
    margin-top: 12px;
}

.dashboard__document-search {
    padding: 16px 24px;
    width: 240px;
    border: 1.5px solid #E9ECEF;
    border-radius: 8px;
}

.dashboard__document-search::placeholder {
    color: #6C757D;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
}
</style>