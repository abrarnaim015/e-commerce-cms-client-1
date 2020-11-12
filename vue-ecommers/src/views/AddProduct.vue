<template>
  <div id="add-page">
    <div>
        <NavBar/>
    </div>
    <div class=" container my-2 p-0 ">
        <div id="nameOLS_title_edit" class=" header text-center">
            <h1>Add Product From</h1>
        </div>
        <div class=" row">
            <div class=" col-3">
                <div class="card bg-secondary text-light">
                    <img class="card-img-top" :src="image_url" alt="Imputan Image Url Anda Salah">
                    <div class="card-body">
                        <h6 class="card-title">{{ title }}</h6>
                        <p style="font-size: small;" class="card-text mb-1  text-monospace">Rp. {{ price }},00</p>
                        <p style="font-size: small;" class="card-text mb-1  text-monospace">Stock: {{ stock }} pcs</p>
                    </div>
                </div>
            </div>
            <div class=" col-9">
                <div >
                    <form @submit.prevent="addDataProduct" class=" form-row" action="">
                        <input v-model="title" class=" form-control my-2" placeholder="Title" type="text" name="" id="">
                        <input v-model="image_url" class=" form-control my-2" placeholder="Image Url" type="text" name="" id="">
                        <input v-model="price" class=" form-control my-2" placeholder="Price" type="number" name="" id="">
                        <input v-model="stock" class=" form-control my-2" placeholder="Stock" type="number" name="" id="">
                        <button type="submit" class="btn btn-success btn-block my-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'AddProduct',
  data () {
    return {
      title: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    addDataProduct () {
      const payload = {
        name: this.title,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('createProduct', payload)
        .then(({ data }) => {
          this.$router.push({ name: 'HomePage' })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Product has ben saved',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => console.log(err))
    }
  },
  components: {
    NavBar
  }
}
</script>

<style>

</style>
