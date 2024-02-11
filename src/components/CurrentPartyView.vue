<script>
    import Tasks from './Tasks.vue'

    export default {
        props: ['selectedParty'],
        components: {
        Tasks,
        //Shopping,
        //Invitations
        },
        data() {
        return {
            activeTab: 'tasks'
        }
        }
    }
</script>

<template>
<Tasks></Tasks>
</template>

