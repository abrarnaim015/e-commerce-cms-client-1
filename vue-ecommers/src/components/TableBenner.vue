<template>
  <div>
    <thead>
      <tr height="50">
          <th width="80">Id</th>
          <th>Benner_url</th>
          <th width="150">Category</th>
          <th width="150">Status</th>
          <th width="150">Option</th>
      </tr>
  </thead>
  <tbody>
      <tr v-for="el in allDataBenner" :key="el.id">
          <td>{{ el.id }}</td>
          <td><img style="height: 250px;" :src="el.banner_url" alt=""></td>
          <td>{{ el.category }}</td>
          <td>{{ el.status }}</td>
          <td>
              <div class=" d-flex justify-content-between">
                  <a href="">
                      <img @click.prevent="editBenner(el.id)" class=" my-1" src="../assets/img/edit.png" alt="">
                  </a>
                  <a href="">
                      <img @click.prevent="deleteBenner(el.id)" class=" my-1" src="../assets/img/delete.png" alt="">
                  </a>
              </div>
          </td>
      </tr>
  </tbody>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'TableBenner',
  data () {
    return {
    }
  },
  props: ['allDataBenner'],
  methods: {
    editBenner (id) {
      this.$store.dispatch('findDataBenner', id)
        .then(({ data }) => {
          console.log(data)
          this.$store.dispatch('getDataEditBenner', data)
          this.$router.push({ name: 'EditBenner' })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops, Sorry...',
            text: 'Something went wrong, Internal Server ERROR',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(err)
        })
    },
    deleteBenner (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('deleteDataBenner', id)
            .then(({ data }) => {
              this.$store.dispatch('getAllBenner')
              this.$router.push({ name: 'AllBenner' })
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Benner has been Delete',
                showConfirmButton: false,
                timer: 1500
              })
            })
            .catch(err => {
              Swal.fire({
                icon: 'error',
                title: 'Oops, Sorry...',
                text: 'Something went wrong, Internal Server ERROR',
                showConfirmButton: false,
                timer: 1500
              })
              console.log(err)
            })
        }
      })
    }
  }
}
</script>

<style>

</style>
