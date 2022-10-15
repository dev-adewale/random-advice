<template>
    <section class="bodyStyle">
        <main class="boxStyle">

            <p class="text-diceBackground text-xs uppercase font-bold"> {{ adviceId }} </p>
            <h2 class="text-cyan md:text-xl text-lg px-7"> {{ advice }} </h2>
            <img class="px-5" src="../assets/images/pattern-divider-desktop.svg" alt="">

            <div @click="getAdvice()" class="diceStyle">
                <img src="../assets/images/icon-dice.svg" alt="">
            </div>
        </main>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
    name: 'Index',

    setup() {

        /* Variables */
        const apiUrl = "https://api.adviceslip.com/advice";
        const advice = ref<string>("");
        const adviceId = ref<string | number>("");

        /* Methods */
        const getAdvice = async () => {

            try {
                const res = await axios.get(apiUrl)
                advice.value = `"${res.data.slip.advice}"`;
                adviceId.value = `advice #${res.data.slip.id}`;
            } catch (err) {
                alert(err)
            }
            
        }

        /* Run function on page load */
        window.onload = () => {
            getAdvice()
        }

        /* Returning datas */
        return {
            getAdvice,
            advice,
            adviceId,
        }
    }
})
</script>