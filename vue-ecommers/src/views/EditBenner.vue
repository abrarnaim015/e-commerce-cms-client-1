<template>
  <div id="editBenner">
      <NavBar class=" mb-3"/>
        <div class=" container">
            <div class=" d-flex justify-content-center">
                <img style="height: 250px;" :src="dataEdit.banner_url" alt="">
            </div>
            <div class=" d-flex justify-content-center mt-2" style="margin-bottom: 10px;">
                <h4 class=" mx-2 text-light">Category: {{ dataEdit.category }}</h4>
                <h4 class=" mx-2 text-light">Status: {{ dataEdit.status }}</h4>
            </div>
            <div class=" d-flex justify-content-center">
                <div class=" col-7">
                    <div >
                        <form @submit.prevent="saveDataEdit" class=" form-row mb-5" action="">
                            <input v-model="dataEdit.banner_url"  class=" form-control my-2" placeholder="Benner_url" type="text" name="" id="">
                            <div class="input-group my-2">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Category</label>
                                </div>
                                <select v-model="dataEdit.category" class="custom-select" id="inputGroupSelect01">
                                    <option ></option>
                                    <option value="pria">Pria</option>
                                    <option value="wanita">Wanita</option>
                                </select>
                                </div>
                            <div class="input-group my-2">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Status</label>
                                </div>
                                <select v-model="dataEdit.status" class="custom-select" id="inputGroupSelect01">
                                    <option value="aktiv">Aktiv</option>
                                    <option value="not aktiv">Not Aktiv</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-success btn-block my-2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      <div class="">
        <Footer/>
      </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Swal from 'sweetalert2'
import Footer from '@/components/Footer'

export default {
  mane: 'EditBenner',
  data () {
    return {
      dataEdit: this.$store.state.getDataBennerById
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
              banner_url: this.dataEdit.banner_url,
              category: this.dataEdit.category,
              status: this.dataEdit.status
            }
            this.$store.dispatch('editDataBenner', paylod)
              .then(({ data }) => {
                this.$store.dispatch('getAllBenner')
                this.$router.push({ name: 'AllBenner' })
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your Benner has ben Updated',
                  showConfirmButton: false,
                  timer: 1500
                })
              })
              .catch(err => {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops, Sorry...',
                  text: 'Something went wrong witf Your Data Benner!',
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
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>

</style>
