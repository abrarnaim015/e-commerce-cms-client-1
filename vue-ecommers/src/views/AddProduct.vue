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
                    <img class="card-img-top" src="https://eigeradventure.com/media/catalog/product/cache/4fcc276cc458f0c20c7cb141f7d9fdf7/W/1/W159_1.jpg" alt="S.BOOT POLLOCK">
                    <div class="card-body">
                        <h6 class="card-title">S.BOOT POLLOCK</h6>
                        <p style="font-size: small;" class="card-text mb-1  text-monospace">Rp. 1.068.000,00</p>
                        <p style="font-size: small;" class="card-text mb-1  text-monospace">Stock: 100</p>
                    </div>
                </div>
            </div>
            <div class=" col-9">
                <div >
                    <form class=" form-row" action="">
                        <input class=" form-control my-2" placeholder="Title" type="text" name="" id="">
                        <input class=" form-control my-2" placeholder="Image Url" type="text" name="" id="">
                        <input class=" form-control my-2" placeholder="Price" type="number" name="" id="">
                        <input class=" form-control my-2" placeholder="Stock" type="number" name="" id="">
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
  components: {
    NavBar
  }
}
</script>

<style>

</style>
