<template>
  <div style="height:90vh; width:95vw">
    <LMap
      ref="map"
      :zoom="12"
      :center="[48.41322, -4.459482]"
      :use-global-leaflet="false"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base"
        name="OpenStreetMap"
      />
      <LCircleMarker v-for="element in result" :key="element.id" :lat-lng="[element.lat,element.lon]">
        <LPopup>
          <EventCard :title="element.tags.name ?? ''" :opening-hours="parseOpeningHours(element.tags.opening_hours)" :description="$t('id') + ':' + String(element.id)">

          </EventCard>
        </LPopup>
      </LCircleMarker>/>

      </LMap>
      <!-- <EventCard v-for="element in result" :key="element.id" :title="element.tags.name ?? ''" :opening-hours="parseOpeningHours(element.tags.opening_hours)" :description="'ID:' + String(element.id)"></EventCard> -->
    <!-- <ul class="debug-event-list">
<li v-for="element in result" :key="element.id">{{ element }}</li>
    </ul> -->
  </div>
</template>

<script setup lang="ts">

const { setLocale } = useI18n();
const result = ref<{id: number, tags:{name: string, opening_hours: string}, lat: number, lon: number}[]>([]);
const parseOpeningHours = (openingHour: string | undefined) => openingHour?.split(";");
onMounted(async () => {
        const overpassResult = await fetch(
          "https://overpass-api.de/api/interpreter",
          {
              method: "POST",
              // The body contains the query
              // to understand the query language see "The Programmatic Query Language" on
              // https://wiki.openstreetmap.org/wiki/Overpass_API#The_Programmatic_Query_Language_(OverpassQL)
              body: "data="+ encodeURIComponent(`
                  [bbox:48.18322, -4.759482,
                        48.61322, -4.059482]
                  [out:json]
                  [timeout:90]
                  ;
                  (
                      node
                      ["amenity"="bar"]
                          (
                              48.18322, -4.559482,
                              48.41322, -4.359482
                          );
                          node
                      ["amenity"="pub"]
                          (
                              48.18322, -4.559482,
                              48.41322, -4.359482
                          );
                  );
                  out geom;
              `)
          },
      ).then(
          (data)=>data.json()
      );
      result.value = overpassResult.elements;
})
</script>

<style scoped>
.debug-event-list {
  width: 100%;
}
</style>