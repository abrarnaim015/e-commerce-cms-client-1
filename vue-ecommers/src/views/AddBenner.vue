<template>
  <div id="addBenner">
    <NavBar class=" mb-3"/>
        <div class=" container">
            <div class=" d-flex justify-content-center">
                <img style="height: 250px;" :src="benner_url" alt="">
            </div>
            <div class=" d-flex justify-content-center mt-2" style="margin-bottom: 10px;">
                <h3 class=" mx-2">Category: {{ category }}</h3>
                <!-- <h3 class=" mx-2">Status: - </h3> -->
            </div>
            <div class=" d-flex justify-content-center">
                <div class=" col-7">
                    <div >
                        <form @submit.prevent="addDataBenner" class=" form-row mb-5" action="">
                            <input v-model="benner_url"  class=" form-control my-2" placeholder="Benner_url" type="text" name="" id="">
                            <div class="input-group my-2">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Category</label>
                                </div>
                                <select v-model="category" class="custom-select" id="inputGroupSelect01">
                                    <option selected></option>
                                    <option value="pria">Pria</option>
                                    <option value="wanita">Wanita</option>
                                </select>
                                </div>
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
  name: 'AddBenner',
  data () {
    return {
      benner_url: '',
      category: ''
    }
  },
  methods: {
    addDataBenner () {
      const payload = {
        banner_url: this.benner_url,
        category: this.category
      }
      this.$store.dispatch('createBenner', payload)
        .then(({ data }) => {
          this.$store.dispatch('getAllBenner')
          this.$router.push({ name: 'AllBenner' })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Banner has ben saved',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops, Sorry...',
            text: 'Something went wrong witf Your Data Banner!',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(err)
        })
    }
  },
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>

</style>
