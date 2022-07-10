<template>
    <p class="clearfix mb-0">
        <span class="float-md-left d-block d-md-inline-block mt-25">
            COPYRIGHT © {{ new Date().getFullYear() }}
            <b-link
                class="ml-25"
                href="https://www.groundforcetrucking.com/"
                target="_blank"
                >Purpletrac</b-link
            >
        </span>

        <span class="float-md-right d-none d-md-block"
            >Hand-crafted with
            <feather-icon
                icon="HeartIcon"
                size="21"
                class="text-danger stroke-current"
            />
            by Velazquez Fabricio
        </span>
    </p>
</template>

<script>
import { BLink } from "bootstrap-vue";

export default {
    components: {
        BLink,
    },
};
</script>
