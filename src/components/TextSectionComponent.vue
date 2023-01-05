<template>
    <div class="textsection">
        <div class="textsection-container col-10 m-auto row py-2">
            <div class="col-md-8">
                <h4 class="py-2 content-title" v-if="content.title">{{content.title.toUpperCase()}}</h4>
                <div class="content-description" v-if="content.description">{{content.description}}</div>
                <ul class="content-list list-unstyled" v-if="content.list">
                    <li class="d-flex content-list-item" v-for="(item, i) in content.list" :key="i">
                        <div class="content-list-item-marker mx-2">
                            &#x2022;
                        </div>
                        <div>
                            {{item}}
                        </div>
                    </li>
                </ul>
                <span v-if="content.link"><a :href="content.link">{{content.link}}</a></span>
            </div>
            <div class="col-md-4 d-flex justify-content-end align-items-start">
                <button
                    class="btn rounded-0 btn-secondary text-white my-2 my-md-0 p-2 flex-fill flex-md-grow-0"
                    @click="$emit('handleClick')"
                    v-if="content.callToAction"
                >
                    {{content.callToAction}}
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type TextSectionModel from '@/models/TextSectionModel';
    defineProps<{
        content: TextSectionModel
    }>()

    defineEmits(['handleClick'])
</script>
<style lang="scss">
    @import '@/assets/custom.scss';

    .content-title {
        color: $primary-dark;
    }

    .content-description {
        //
    }

    .content-list {
        .content-list-item-marker {
            color: purple;
        }
    }
</style>