<template>
    <div class="distance-wrapper">
        <form action="submit">
            <div class="input-wrapper">
                <input type="text" placeholder="Пункт А" v-model="origin">
                <input type="text" placeholder="Пункт Б" v-model="destination">
            </div>
            <div class="button-wrapper">
                <button @click.prevent="submit">Рассчитать</button>
                <button @click.prevent="clearRequestList">Очистить</button>
            </div>
        </form>
        <span class="warn-span" v-if="origin == '' || destination == ''">Заполните оба пункта</span>
    </div>
</template>

<script>
    import { mapActions, mapMutations } from 'vuex' 

    export default {
        data() {
            return {
                origin: '',
                destination: ''
            }
        },
        methods: {
            ...mapActions(['fetchCities']),
            ...mapMutations(['clearRequestList']),
            submit() {
                const data = [{"t": this.origin}, {"t": this.destination}]
                const correctData = JSON.stringify(data)
                this.origin != '' && this.destination != '' ? this.fetchCities(correctData) : null
            },
            clear() {
                this.clearRequestList()
            }
        }
    }
</script>

<style>
    .distance-wrapper {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        margin-bottom: 20px;
    }
    .distance-wrapper input {
        border: solid 1px #8888ce;
        border-radius: 12px;
        outline: none;
        height: 30px;
        width: 49%;
        font-family: "Source Sans Pro", sans-serif;
        font-size: 20px;
        box-sizing: border-box;
    }
    .distance-wrapper input:hover {
        box-shadow: 0 0 3px #666 inset;
        text-indent: 5px;
    }
    form {
        width: 100%;
        display: flex;
    }
    .input-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70%;
    }
    .button-wrapper {
        display: flex;
        justify-content: space-around;
        width: 20%;
        align-items: center;
    }
    .button-wrapper button {
        background: #ffffff;
        border: 1px solid #8888ce;
        border-radius: 12px;
        cursor: pointer;
        width: 40%;
        height: 30px;
        font-family: "Source Sans Pro", sans-serif;
        margin-bottom: 0;
    }
    .warn-span {
        color: red;
    }

    @media screen and (max-width: 768px) {
        .distance-wrapper {
            justify-content: center;
        }
        form {
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 110px;
        }
        .input-wrapper {
            height: 70px;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
        .button-wrapper {
            width: 40%;
            margin-bottom: 5px;
        }
    }
</style>