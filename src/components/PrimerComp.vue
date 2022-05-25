<template>
  <nav class="sisisi">
   <div class="hola">
        <div class="whatsapp">
           <a href="https://api.whatsapp.com/send?phone=+573143647074">  
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png" width="50" height="50"  > </a> 

   </div>

    
    <router-link to="/Inicio">Inicio</router-link>
    
    <div class="dropdown">
  <button class="dropbtn">Dias especiales </button>
  <div class="dropdown-content">
    <router-link to="/CualquierDetalle"> Dia del padre</router-link>
    <router-link to="/CualquierDetalle"> Dia de la madre</router-link>
     <router-link to="/CualquierDetalle"> Dia del hombre</router-link>
    <router-link to="/CualquierDetalle"> Dia de la mujer</router-link>
    <router-link to="/CualquierDetalle"> Cumpleaños</router-link>
    
  </div>
</div>
 </div>
  </nav>
  
  <router-view/>
</template>

<style scoped>

nav {
    background-color: rgb(31, 101, 134);
    padding: 4%;
    margin:0px 0px;
    font-size: 1.5rem;
    text-decoration: none;
    font-family: 'Courier New', Courier, monospace;
}
nav a {
  font-weight: bold;
  text-decoration: none;
  background-color:rgb(31, 101, 134);
}
nav a.router-link-exact-active {
  font-size: 1.5rem;
  padding: 10px ;
  margin: 0px 0px;
  color: aqua;
}
/* Style The Dropdown Button */
.dropbtn {
  font-family: 'Courier New', Courier, monospace;
  justify-content: flex-start;
  padding: 10px;
  margin: 0px 0px;
  text-decoration: none;
  border-color: transparent;
  font-size: 1.5rem;
   background-color:rgb(31, 101, 134);
   color: aqua;
}


/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  font-size:1.5rem ;
  color: aqua;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px; 
  z-index: 1;
  background-color: rgb(43, 2, 2);
  font-size: 1.5rem;
  color: brown;
}

/* Links inside the dropdown */
.dropdown-content a {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
    color:aqua;
}
dropbtn a.router-link-exact-active {
  color: rgb(7, 7, 8);
  background-color: azure;
}
.whatsapp{
  float: right;
}
.hola{
    float: left;
    font-size: 1.5rem;
}




</style>