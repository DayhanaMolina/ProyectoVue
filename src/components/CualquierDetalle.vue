<template>
 <div class="chooseProfileCard" >     
        <div class="chooseProfile" v-for="(p, index) in perfiles" :key="index">
          <a href="#">
            <img :src="p.src" alt="Foto de perfil " />
            <p> {{ p.name }} {{ p.lastname }} </p> 
            <p class="titleJob"> {{ p.profesion }} </p> 
            <p class="pricejob">Servicio promedio ${{ p.tarifa }} </p>
          </a>
        </div>
    </div>
</template>