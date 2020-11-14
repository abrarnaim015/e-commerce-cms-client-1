<template>
  <div class="home-page">
    <div>
      <NavBar/>
    </div>
    <div id="table-data-produck">
      <div class=" container p-0">
          <div id="nameOLS_title_edit" class=" d-flex justify-content-center my-2 text-light">
              <h1>Table Data product</h1>
          </div>
          <table class="table table-sm text-center mb-5">
            <TableProduct
              :allDataProduct="allDataProduct"
              >
              </TableProduct>
          </table>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import TableProduct from '@/components/TableProduct'
import Footer from '@/components/Footer'

export default {
  name: 'HomePage',
  data () {
    return {
    }
  },
  components: {
    NavBar,
    TableProduct,
    Footer
  },
  methods: {
    getAllDataProduct () {
      this.$store.dispatch('getAllDataProduct')
    }
  },
  computed: {
    allDataProduct () {
      return this.$store.state.allDataProduct
    }
  },
  created () {
    if (!localStorage.getItem('access_token')) {
      this.$router.push({ name: 'loginPage' })
    } else {
      this.$router.push({ name: 'HomePage' })
      this.getAllDataProduct()
    }
  }
}
</script>

<style>
.table{
  background-color: rgba(0,0,0,0.5);
  color: whitesmoke;
}
</style>
