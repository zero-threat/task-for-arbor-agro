<template>
    <div class="request-wrapper">
        <span>Журнал запросов:</span>
        <div v-for="request in getAllRequests" :key="request.id">
            <p :style="request.points[0].error? 'color: red' : 'none'">
                {{ request.date }}
                {{ request.points[0].error ? 'Город не найден' : `${request.points[0].properties.geocode.name} - ${request.points[1].properties.geocode.name} =` }}
                <span v-if="!request.points[0].error">
                    {{ Math.floor(request.steps[0].distance.haversine) + 'км' }}
                </span>
            </p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        computed: mapGetters(['getAllRequests'])
    }
</script>

<style>
    .request-wrapper {
        font-size: 20px
    }
</style>