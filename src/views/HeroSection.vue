<template>
  <div class="bg-white">
    <div class="relative px-6 isolate pt-14 lg:px-8">
      <div
        class="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div class="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div
            class="relative px-3 py-1 text-sm leading-6 text-gray-600 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          ></div>
        </div>
        <div class="text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Tiempo de cuidar nuestro planeta desde la escuela
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Esta página explorará varias maneras que podemos utilizar como
            estudiantes para reciclar todos nuestros residuos, darles una
            segunda vida o al menos para no generar tanta contaminación como lo
            haría dejarlo solo.
          </p>
          <div class="flex items-center justify-center mt-10 gap-x-6">
            <!-- <a
              href="#"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Get started</a
            > -->
            <RouterLink
              to="/conoce-mas"
              class="text-sm font-semibold leading-6 text-gray-900"
              >Conoce más <span aria-hidden="true">→</span></RouterLink
            >
          </div>
          <p class="mt-6 text-xl leading-8 text-gray-700"></p>
        </div>
        <div class="px-6 py-32 bg-white lg:px-8">
          <div class="max-w-3xl mx-auto text-base leading-7 text-gray-700">
            <p class="text-base font-semibold leading-7 text-indigo-600"></p>
            <h1
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            ></h1>
            <p class="mt-6 text-xl leading-8">
              Al ser nosotrxs personas que estudiamos, tenemos la mente en
              tantas cosas que ¿realmente nos fijamos en los residuos que
              generamos? esta pregunta es muy interesante, porque si pensamos un
              poco y volteamos a ver el pasado, nos daremos cuenta que es muy
              probable que desde la escuela primaria no hemos intentado reciclar
              aunque sea un poco.

              <br />
            </p>
            <div class="max-w-2xl mt-10">
              <p>
                Es normal que desde esa etapa de nuestras vidas nos hayan
                querido enseñar cosas que podemos realizar para poder reutilizar
                nuestros materiales escolares y que no sean solo un bulto de
                basura más, sino para poder darle una segunda vida a todo
                aquello que utilizamos y quizá para nosotrxs ya no tiene ningún
                uso más.
              </p>

              <p class="mt-8">
                Hoy más que nada en nuestra vida universitaria tenemos todas las
                formas para poder aplicar las 3R en nuestra vida y no contribuir
                de gran manera en nuestra huella ecológica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>
