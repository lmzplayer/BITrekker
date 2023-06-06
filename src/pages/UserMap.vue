<template>
    <div class="vue-leaflet">
        <l-map style="width: 100%; height: 600px;" :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="marker">
            <l-popup :content="text"></l-popup>
        </l-marker>
        </l-map>
    </div>
</template>

<script>
    import L from 'leaflet';
    import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';

    export default {
        name: 'UserMap',
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LPopup
        },
        data () {
            return {
            zoom: 19,
            center: L.latLng(39.731, 116.166),
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
            marker: L.latLng(39.731, 116.166),
            text: 'this is a marker',
            worldCopyJump: true
            }
        }
    }
</script>

<style>
    html,
    body {
        height: 100%;
        width: 100%;
        margin: 0;
    }

    #map {
        height: 80%;
    }

    .vue_leaflet {
        z-index: 2;
    }
</style>
