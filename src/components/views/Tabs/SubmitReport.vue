<template>
    <div
        class="
            px-4
            py-5
            border-b border-gray-200
            sm:px-6
            rounded-lg
            grid grid-cols-1
            gap-y-6 gap-x-4
            overflow-hidden
        "
    >   You can submit your monthly report, please make sure to review all the information before submitting.
        <submit-button @click="preview">Preview</submit-button>
    </div>
    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 rounded-b-lg">
        <submit-button @click="submit">Submit report</submit-button>
    </div>
</template>

<script>

import SubmitButton from '../../forms/SubmitButton.vue'
export default {
    components: {
        SubmitButton,
    },
    data(){
        return {

        }
    },
    methods: {
        submit(){
            // Submit report..
        },
    },
}
</script>

<style></style>
