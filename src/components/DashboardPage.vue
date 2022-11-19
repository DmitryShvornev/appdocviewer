<template>
    <main>
        <div class="main__container">
            <h1 class="main__title">MyApp</h1>
            <h4 class="main__username">Username</h4>
        </div>
        <section class="dashboard">
            <slot></slot>
        </section>
    </main>
</template>
<style>
.main__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.main__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    margin-left: 50px;
    margin-top: 41px;
}

.main__username {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin-right: 50px;
    margin-top: 41px;
}

.dashboard {
    box-shadow: 0px 0px 10px var(--box-shadow-color);
    border-radius: 10px;
    margin-left: 50px;
    margin-right: 50px;
    height: 575px;
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
}
</style>