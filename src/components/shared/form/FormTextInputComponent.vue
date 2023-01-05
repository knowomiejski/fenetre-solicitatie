<template>
    <div>
        <label :for="inputName" :hidden="label ? false : true">{{label}}</label>
        <input :class="`form-control ${error ? 'is-invalid' : ''}`" type="text" :required="required" :id="inputName" :placeholder="placeholder" @input="$emit('update:modelValue', $event.target.value)"/>
        <div class="invalid-feedback">
            {{error}}
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    modelValue: string,
    inputName: string,
    label?: string,
    required: boolean,
    placeholder: string,
    error?: string
}>()
defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
</script>