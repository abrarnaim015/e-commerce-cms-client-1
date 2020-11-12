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
                    <img class=" my-1" src="../assets/img/detail.png" alt="">
                </a>
                <a href="#">
                    <img class=" my-1" src="../assets/img/edit.png" alt="">
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
export default {
  name: 'TableProduct',
  props: ['allDataProduct'],
  methods: {
    deleteDataProduct (id) {
      this.$store.dispatch('deleteDataProduct', id)
        .then(({ data }) => {
          this.$router.push({ name: 'HomePage' })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Kanban has been Delete',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>
