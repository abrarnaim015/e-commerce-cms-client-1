<template>
  <div class="home-page">
    <div>
      <NavBar/>
    </div>
    <div id="table-data-produck">
      <div class=" container p-0">
          <div id="nameOLS_title_edit" class=" d-flex justify-content-center my-2">
              <h1>Table Data product</h1>
          </div>
          <table class="table table-sm table-dark text-center">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Image Url</th>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Option</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td><img style="height: 100px;" src="https://eigeradventure.com/media/catalog/product/cache/4fcc276cc458f0c20c7cb141f7d9fdf7/W/1/W159_1.jpg" alt=""></td>
                  <td>S.BOOT POLLOCK</td>
                  <td class="card-text text-monospace">Rp. 1.068.000,00</td>
                  <td class="card-text text-monospace">100 pcs</td>
                  <td>
                      <div class=" d-flex justify-content-between">
                          <a href="">
                              <img class=" my-1" src="../assets/img/detail.png" alt="">
                          </a>
                          <a href="">
                              <img class=" my-1" src="../assets/img/edit.png" alt="">
                          </a>
                          <a href="">
                              <img class=" my-1" src="../assets/img/delete.png" alt="">
                          </a>
                      </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td><img style="height: 100px;" src="https://eigeradventure.com/media/catalog/product/cache/4fcc276cc458f0c20c7cb141f7d9fdf7/c/r/creek_1_2.jpg" alt=""></td>
                  <td>CREEK 5P TENT, ORA, NOS</td>
                  <td class="card-text text-monospace">Rp. 1.735.500,00</td>
                  <td class="card-text text-monospace">10 pcs</td>
                  <td>
                      <div class=" d-flex justify-content-between">
                          <a href="">
                              <img class=" my-1" src="../assets/img/detail.png" alt="">
                          </a>
                          <a href="">
                              <img class=" my-1" src="../assets/img/edit.png" alt="">
                          </a>
                          <a href="">
                              <img class=" my-1" src="../assets/img/delete.png" alt="">
                          </a>
                      </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td><img style="height: 100px;" src="https://eigeradventure.com/media/catalog/product/cache/4fcc276cc458f0c20c7cb141f7d9fdf7/9/1/910005211001-appalachia-45-ia-red.01_1.jpg" alt=""></td>
                  <td>APPALACHIA 45 1A, RED, NOS</td>
                  <td class="card-text text-monospace">Rp. 990.000,00</td>
                  <td class="card-text text-monospace">90 pcs</td>
                  <td>
                      <div class=" d-flex justify-content-between">
                          <a href="">
                              <img class=" my-1" src="../assets/img/detail.png" alt="">
                          </a>
                          <a href="">
                              <img class=" my-1" src="../assets/img/edit.png" alt="">
                          </a>
                          <a href="">
                              <img class=" my-1" src="../assets/img/delete.png" alt="">
                          </a>
                      </div>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomePage',
  components: {
    NavBar
  }
}
</script>

<style>

</style>
