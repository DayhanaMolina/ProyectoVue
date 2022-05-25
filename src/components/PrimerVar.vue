<template>
  <div class="home">
    <div class="header">
      <div class="detalles">
         <div class="productos" :key="index" v-for="(item, index) in 9">
           <div class="productsimg">
             <img src="@/assets/inicio/globos.jpg" alt="">
               </div>
       <div class="productstitulo"> detalles sorpresa</div>
      <div  class="productsprecio"> $</div>
         </div>
          </div>
      </div>
      </div >
</template>

<style>
h2 {
  font-weight: 400;
}
.productos{
  max-width:100px;
  background-color: rgb(138, 151, 160);
  padding: 40px 40px;
  color: white;
  width: 70%;
  height: 40% ;
  margin: 10%;
}
.productstitulo {
  color: black;
  margin-top: 10px;

}
img {
  width: 100px;
  margin: 0px;
  padding: 0px;
}
.productsprecio {
  color: blue;
}
.home {
  padding: 0%;
  margin: 0;
}
.detalles{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
</style>