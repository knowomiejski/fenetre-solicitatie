<template>
    <div>
        <input :class="`mx-1 form-check-input ${error ? 'is-invalid' : ''}`" type="checkbox" :id="inputName" :placeholder="placeholder" @input="handleCheck($event.target.checked)"/>
        <label class="form-check-label" :for="inputName" :hidden="label ? false : true">{{label}}</label>
        <div class="invalid-feedback">
            {{error}}
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    modelValue: boolean,
    inputName: string,
    label?: string,
    placeholder: string,
    error?: string | null
}>()
const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

const handleCheck = (value: string) => {
    if(value) {
        emit('update:modelValue', true)
    } else {
        emit('update:modelValue', false)
    }
}
</script>