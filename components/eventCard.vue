<template>
    <div class="event-card">
        <h2>{{ title }}</h2>
        <article>
            {{ description }}
        </article>
        <aside v-if="openingHours != null">
            <h3>Opening hours:</h3>
            <ul>
                <li v-for="row in openingHours">{{ row }}</li>
            </ul>
        </aside>
        <aside v-else>
            <h3>Missing Opening Hours</h3>
        </aside>
        <button>Join</button>
    </div>
</template>

<style scoped>

    .event-card {
        display: grid;
        grid-template-columns: auto 20%;
        grid-template-rows: 1fr auto 1fr;
    }

    h2 {
        grid-row: 1 / 1;
        grid-column: 1 / span 2;
    }

    article {
        grid-column: 1 / 1;
        grid-row: 2 / span 2;
    }

    aside {
        grid-row: 2 / span 1;
        grid-column: 2 / 2;
        justify-self: end;
    }

    button {
        grid-row: 3 / span 1;
        grid-column: 2 / 2;
        justify-self: end;
        height: 50%;
        width: 50%;
    }
</style>

<script setup lang="ts">
    interface Props {
        title: string,
        description: string,
        openingHours?: string[],
        participants?: number
    }
    const props = defineProps<Props>();

</script>