<template>
<div id="kiko-slider">
  
  <ul class="slider">
    <li id="slide1">
      <img src="../assets/inicio/tornasol.png"/>
    </li>
    <li id="slide2">
      <img src="../assets/inicio/negocio.jpg"/>
    </li>
    <li id="slide3">
      <img src="../assets/inicio/globos.jpg" alt="">
    </li>
  </ul>
  
  <ul class="menu">
    <li>
      <a href="#slide1">1</a>
    </li>
    <li>
      <a href="#slide2">2</a>
    </li>
     <li>
      <a href="#slide3">3</a>
    </li>
  </ul>
  
</div>
</template> 

<style scoped>

#kiko-slider{
  font-family: sans-serif;
  margin: 0px;
  background-color: white;
  max-width: 800px;
  width: 500%;
  padding: 40px;
  box-sizing: border-box;
}

#kiko-slider > ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
}

#kiko-slider > ul.slider{
  position: relative;
  max-width: 700px;
  width: 100%;
  height: 450px;
}

#kiko-slider > ul.slider h1{
  position: absolute;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 10px;
  left: 50%;
  top: 100px;
  transform: translate(-50%, -50%);
}

#kiko-slider > ul.slider li {
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0;
    width: inherit;
    height: inherit;
    transition: opacity .5s;
    background:#fff;
}

#kiko-slider > ul.slider li img{
  width: 150%;
  height: 450px;
  object-fit: cover;
  padding: 0%;
  margin: 0%;
}

#kiko-slider > ul.slider li:first-child {
    opacity: 1; /*Mostramos el primer <li>*/
}

#kiko-slider > ul.slider li:target {
    opacity: 1; /*Mostramos el <li> del enlace que pulsemos*/
}

#kiko-slider > .menu{
  margin: 5%;
  padding: 0% ;
  text-align: 700%;
}

#kiko-slider > .menu li{
  display: inline-block;
}

#kiko-slider > .menu li a{
  display: inline-block;
  color: white;
  text-decoration: none;
  background-color: grey;
  padding: 10px;
  width: 20px;
  height: 20px;
  font-size: 20px;
  border-radius: 100%;
}
</style>