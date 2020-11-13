<template>
  <div>
    <thead>
      <tr height="50">
        <th width="60" scope="col">Id</th>
        <th width="230" scope="col">Image Url</th>
        <th width="350" scope="col">Title</th>
        <th width="150" scope="col">Price</th>
        <th width="120" scope="col">Stock</th>
        <th width="200" scope="col">Option</th>
      </tr>
    </thead>
    <tbody>
     <tr v-for="el in allDataProduct" :key="el.id" >
      <th scope="row">{{ el.id }}</th>
        <td><img style="height: 100px;" :src="el.image_url" alt=""></td>
        <td>{{ el.name }}</td>
        <td class="card-text text-monospace">Rp. {{ el.price }},00</td>
        <td class="card-text text-monospace">{{ el.stock }} pcs</td>
        <td>
            <div class=" d-flex justify-content-between">
                <a href="">
                    <img @click.prevent="infoGambar(el)" class=" my-1" src="../assets/img/detail.png" alt="">
                </a>
                <a href="#">
                    <img @click.prevent="editDataProduct(el.id)" class=" my-1" src="../assets/img/edit.png" alt="">
                </a>
                <a href="">
                    <img @click.prevent="deleteDataProduct(el.id)" class=" my-1" src="../assets/img/delete.png" alt="">
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
  name: 'TableProduct',
  data () {
    return {
      gambar: []
    }
  },
  props: ['allDataProduct'],
  methods: {
    deleteDataProduct (id) {
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
          this.$store.dispatch('deleteDataProduct', id)
            .then(({ data }) => {
              this.$store.dispatch('getAllDataProduct')
              this.$router.push({ name: 'HomePage' })
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Product has been Delete',
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
    },
    editDataProduct (id) {
      this.$store.dispatch('findDataProductById', id)
        .then(({ data }) => {
          console.log(data)
          this.$store.dispatch('getdataEdit', data)
          this.$router.push({ name: 'EditProduct' })
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
    infoGambar (data) {
      this.gambar = data
      Swal.fire({
        imageUrl: this.gambar.image_url,
        title: this.gambar.name,
        text: `Price: Rp. ${this.gambar.price},00. Stock: ${this.gambar.stock} pcs`,
        imageHeight: 250,
        imageAlt: 'A tall image'
      })
    }
  }
}
</script>

<style>

</style>
