<template>
  <div id="AllBenner">
    <NavBar class=" mb-3"/>
        <div class=" container p-0">
            <div class=" d-flex justify-content-center my-2">
                <div id="nameOLS_title_edit" class=" text-light">
                    <h1>Data Benner</h1>
                </div>
            </div>
            <div class=" container p-0">
                <div class="d-flex justify-content-center my-2">
                    <table class="table table-sm text-center mb-5">
                      <TableBenner
                      :allDataBenner="allDataBenner"
                      >
                      </TableBenner>
                    </table>
                </div>
            </div>
        </div>
      <div>
        <Footer/>
      </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import TableBenner from '@/components/TableBenner'
import Footer from '@/components/Footer'

export default {
  name: 'AllBenner',
  data () {
    return {
    }
  },
  methods: {
    editBenner () {
      this.$router.push({ name: 'EditBenner' })
    }
  },
  computed: {
    allDataBenner () {
      return this.$store.state.allDataBenner
    }
  },
  components: {
    NavBar,
    TableBenner,
    Footer
  },
  created () {
    this.$store.dispatch('getAllBenner')
  }
}
</script>

<style>

</style>
