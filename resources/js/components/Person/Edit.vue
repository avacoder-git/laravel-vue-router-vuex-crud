<template>
    <div>
        <div class="w-25" v-if="person">
            <div class="mb-3">
                <input type="text" v-model="person.name" placeholder="Name" class="form-control">
            </div>

            <div class="mb-3">
                <input type="number" v-model="person.age" placeholder="Age" class="form-control">
            </div>
            <div class="mb-3">
                <input type="text" v-model="person.job" placeholder="Job" class="form-control">
            </div>


            <div class="mb-3">
                <input :disabled="isDisabled" @click.prevent="$store.dispatch('update', {id:person.id, name:person.name, age:person.age, job: person.job})"
                       type="submit" value="Update" placeholder="Name" class="btn btn-success">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Edit",


    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)
    },

    computed: {
        isDisabled() {
            return this.$store.getters.isDisabled
        },
        person() {
            return  this.$store.getters.person
        }
    }


}
</script>

<style scoped>

</style>
