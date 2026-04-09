<script setup>
import { ref } from 'vue';

const activeTab = ref('First Tab');
const currentSkin = ref('skin-turquoise');
const isRound = ref(true);

const tabs = ['Third Tab', 'Second Tab', 'First Tab'];

const skins = [
    { id: 'turquoise', hex: '#1ABC9C', },
    { id: 'peter-river', hex: '#3498DB', },
    { id: 'amethyst', hex: '#9B59B6', },
    { id: 'nephritis', hex: '#27AE60', },
];

const setSkin = (skinId) => {
    currentSkin.value = `skin-${skinId}`;
};
</script>

<template>
    <div class="wrapper">
        <h1>Colors to choose between</h1>

        <div class="switcher-box">
            <a v-for="skin in skins" :key="skin.id"
                :class="['skin-' + skin.id, { active: currentSkin === 'skin-' + skin.id }]" @click="setSkin(skin.id)">
                <span :style="{ backgroundColor: skin.hex }"></span>
            </a>
        </div>

        <div :class="['tabbed', currentSkin, { round: isRound }]">
            <ul>
                <li v-for="tab in tabs" :key="tab" :class="{ active: activeTab === tab }" @click="activeTab = tab">
                    {{ tab }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    padding: 50px;
    background: #505050;
    text-align: center;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    border-radius: 20px;
    height: 15rem;
    box-shadow: inset 0 26px 20px rgba(0, 0, 0, 0.1);
}

.wrapper h1{
    color: rgb(153, 153, 153);
}

.switcher-box {
    margin: 10px 0 30px;
}

.switcher-box a {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 5px;
    padding: 3px;
    cursor: pointer;
    background: #FFF;
    border-radius: 50%;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
}

.switcher-box a span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: inset 0 -5px 10px rgba(0, 0, 0, 0.1);
}

.switcher-box a.active {
    background: #000;
    box-shadow: inset 0 3px 8px rgba(0, 0, 0, 0.2);
}

.tabbed {
    width: 100%;
    margin: 0 auto;
    border-bottom: 4px solid #000;
    transition: border-color 250ms ease;
}

.tabbed ul {
    margin: 0;
    padding: 0 0 0 50px;
    list-style: none;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
}

.tabbed ul li {
    position: relative;
    padding: 12px 25px;
    background: #FFF;
    margin-right: 40px;
    cursor: pointer;
    color: #777;
    font-weight: 600;
    text-transform: normal;
    z-index: 1;
    transition: all 250ms ease;
}

.tabbed ul li:before,
.tabbed ul li:after {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 45px;
    background: inherit;
    z-index: -1;
    transition: all 250ms ease;
}

.tabbed ul li:before {
    right: -22px;
    transform: skew(30deg);
    box-shadow: 3px 2px 5px rgba(0, 0, 0, 0.05);
}

.tabbed ul li:after {
    left: -22px;
    transform: skew(-30deg);
    box-shadow: -3px 2px 5px rgba(0, 0, 0, 0.05);
}

.tabbed ul li.active {
    color: #fff;
    z-index: 2;
}

.tabbed ul li.active,
.tabbed ul li.active:before,
.tabbed ul li.active:after {
    background: #000;
}

.tabbed.round ul li {
    border-radius: 10px 10px 0 0;
}

.tabbed.round ul li:before {
    border-radius: 0 8px 0 0;
}

.tabbed.round ul li:after {
    border-radius: 8px 0 0 0;
}

.skin-turquoise {
    --skin-color: #13ad8e;
    --skin-hover: #34D6B6;
}

.skin-peter-river {
    --skin-color: #2686c5;
    --skin-hover: #4EB2F5;
}

.skin-amethyst {
    --skin-color: #8742a2;
    --skin-hover: #B573D0;
}

.skin-nephritis {
    --skin-color: #1c964f;
    --skin-hover: #41C87A;
}

.tabbed[class*="skin-"] {
    border-bottom-color: var(--skin-color);
}

.tabbed[class*="skin-"] ul li {
    background-color: var(--skin-hover);
    color: #fff;
}

.tabbed[class*="skin-"] ul li.active,
.tabbed[class*="skin-"] ul li.active:before,
.tabbed[class*="skin-"] ul li.active:after {
    background-color: var(--skin-color);
}
</style>