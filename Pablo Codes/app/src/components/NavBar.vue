<script setup lang="ts">

const menus = [
    { id: 1, nome: 'Home', path: '/' },
    { id: 2, nome: 'Equipe', path: '/equipe' },
    // { id: 3, nome: 'Login' },
];

</script>

<template>
    <nav>
        <span>Tutorial Vue</span>
        <ul>
            <!-- v-for: serve para renderizar uma lista de itens em uma Array -->
            <!-- :key="": pode receber tanto o id, quanto o index -->
            <!-- v-for: utilizando o id do elemento -->
            <li v-for="menu in menus" :key="menu.id">
                <router-link :to="menu.path">{{ menu.nome }}</router-link>
            </li>
            <!-- v-for: utilizando o index do elemento -->
            <!-- <li v-for="(menu, i) in menus" :key="i" href="#">
                <a>{{ menu.nome }}</a>
            </li> -->
        </ul>
    </nav>
</template>

<style scoped>
nav {
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #cac7eb;
}

ul {
    display: flex;
    list-style-type: none;
}

ul li {
    padding: 0 5px;
}

ul li a {
    text-decoration: none;
    color: #117177;
}
</style>