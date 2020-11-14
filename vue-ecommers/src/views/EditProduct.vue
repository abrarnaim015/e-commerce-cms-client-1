<template>
  <div id="edit-page">
    <div>
        <NavBar/>
    </div>
    <div class=" container my-2 p-0">
        <div id="nameOLS_title_edit" class=" header text-center">
            <h1>Edit Product From</h1>
        </div>
        <div class=" row">
            <div class=" col-3">
                <div class="card bg-secondary text-light">
                    <img class="card-img-top" :src="dataEdit.image_url" alt="S.BOOT POLLOCK">
                    <div class="card-body">
                        <h6 class="card-title">{{ dataEdit.name }}</h6>
                        <p style="font-size: small;" class="card-text mb-1  text-monospace">Rp. {{ dataEdit.price }},00</p>
                        <p style="font-size: small;" class="card-text mb-1  text-monospace">Stock: {{ dataEdit.stock }}</p>
                    </div>
                </div>
            </div>
            <div class=" col-9">
                <div >
                    <form @submit.prevent="saveDataEdit" class=" form-row" action="">
                        <input v-model="dataEdit.name" class=" form-control my-2" placeholder="Name" type="text" name="" id="">
                        <input v-model="dataEdit.image_url" class=" form-control my-2" placeholder="Image Url" type="text" name="" id="">
                        <input v-model="dataEdit.price" class=" form-control my-2" placeholder="Price" type="number" name="" id="">
                        <input v-model="dataEdit.stock" class=" form-control my-2" placeholder="Stock" type="number" name="" id="">
                        <button type="submit" class="btn btn-success btn-block my-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="footer fixed-bottom">
      <Footer/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Swal from 'sweetalert2'
import Footer from '@/components/Footer'

export default {
  name: 'EditProduct',
  data () {
    return {
      dataEdit: this.$store.state.getDataProductById
    }
  },
  methods: {
    saveDataEdit () {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: 'Dont save'
      })
        .then((result) => {
          if (result.isConfirmed) {
            const paylod = {
              id: +this.dataEdit.id,
              name: this.dataEdit.name,
              image_url: this.dataEdit.image_url,
              price: this.dataEdit.price,
              stock: this.dataEdit.stock
            }
            this.$store.dispatch('editDataProduct', paylod)
              .then(({ data }) => {
                this.$store.dispatch('getAllDataProduct')
                this.$router.push({ name: 'HomePage' })
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your Product has ben Updated',
                  showConfirmButton: false,
                  timer: 1500
                })
              })
              .catch(err => {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops, Sorry...',
                  text: 'Something went wrong witf Your Data Product!',
                  showConfirmButton: false,
                  timer: 1500
                })
                console.log(err)
              })
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
    }
  },
  computed: {
  },
  components: {
    NavBar,
    Footer
  },
  created () {
  }
}
</script>

<style scoped>

</style>
