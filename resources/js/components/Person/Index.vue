<template>
    <div>
        <table class="table table-hover table-bordered">
            <thead>
            <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Job</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="person in this.people">
                <td>
                    <router-link :to="{name: 'person.show', params: {id: person.id}}">{{ person.name }}</router-link>
                </td>
                <td>{{ person.age }}</td>
                <td>{{ person.job }}</td>
                <td>
                    <router-link :to="{name: 'person.edit', params: {id: person.id}}">Edit</router-link>
                </td>
                <td>
                    <a href="" @click.prevent="$store.dispatch('deletePerson', person.id)"
                       class="btn btn-outline-danger">Delete</a>
                </td>

            </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Index",


    mounted() {
        this.$store.dispatch('getPeople');
    },



    computed: {
        people() {
            return this.$store.getters.people
        }
    }


}

</script>

<style scoped>

</style>
