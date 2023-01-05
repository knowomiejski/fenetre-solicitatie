<template>
    <div
        :ref="object[generatedId]"
        class="dropdown-position"
        :style="`left: ${xPosition}px;`"
        >
        <div class="d-flex">
            <ul class="dropdown-list list-unstyled" v-for="(list, i) in dropDownData.listItems" :key="i">
                <li
                    v-for="listItem of list"
                    :key="listItem.itemName"
                    :class="`d-flex dropdown-list-${listItem.title ? 'title' : 'item'} px-3 ${listItem.title ? 'fw-bold text-primary' : ''}`"
                    @mouseover="updateDescription(listItem.itemDescription)"
                    >
                        <div v-if="!listItem.title" :class="`${ listItem.subItem ? 'px-3' : 'pe-3'} item-marker`">
                            {{listItem.title ? '': '&#x2022;'}}
                        </div>
                        <div>
                            {{listItem.itemName}}
                        </div>
                </li>
            </ul>
        </div>
        <div class="dropdown-list-description text-white p-2">
            {{hoveredDescription}}
        </div>
    </div>
</template>
<script setup lang="ts">
import type NavigationDropdown from '@/models/NavigationDropdown';
import { onBeforeMount, onMounted, ref } from 'vue';

const props = defineProps<{
    pageMargin: number,
    dropDownData: NavigationDropdown
}>()

const generatedId = ref(Date.now())
let object = {}
const hoveredDescription = ref<string>('Beweeg uw muis over een menu optie voor meer informatie...')
const xPosition = ref<number>(0)

onBeforeMount(() => {
    object = {
        [generatedId.value]: ref<HTMLElement | null>(null)
    }
})

onMounted(() => {
    if ((window.innerWidth - object[generatedId.value].value.getBoundingClientRect().right - props.pageMargin) < 0) {
        xPosition.value = window.innerWidth - object[generatedId.value].value.getBoundingClientRect().right - props.pageMargin
    } else {
        xPosition.value = 0
    }
})

const updateDescription = (newDescription: string) => {
    if (hoveredDescription.value !== newDescription) {
        hoveredDescription.value = newDescription
    }
}
</script>
<style lang="scss" scoped>
        @import '@/assets/custom.scss';
        .dropdown-list {
            padding: 1rem 0;
            min-width: 275px;
            cursor: pointer;
            .dropdown-list-item {
                &:hover {
                    background-color: $nav-selection;
                    .item-marker {
                        color: $white;
                    }
                }
                .item-marker {
                    color: $primary;
                }
            }
    }
    .dropdown-list-description {
        background-color: $nav-description-background;
    }
    .dropdown-position {
        position: absolute;
        top: 100%;
        background-color: $nav-background;
    }
</style>