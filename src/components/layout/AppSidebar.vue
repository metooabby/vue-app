<script lang="ts"></script>
<template>
  <aside class="w-64 bg-gray-100 border-r min-h-screen p-4">
    <nav>
      <ul class="space-y-2 text-gray-700">
        <li class="px-3 py-2 rounded hover:bg-emerald-100 cursor-pointer">
          <router-link to="/">Vue Basics</router-link>
        </li>
        <li class="px-3 py-2 rounded hover:bg-emerald-100 cursor-pointer">
          <router-link to="/reactivity">Reactivity</router-link>
        </li>
        <li class="px-3 py-2 rounded hover:bg-emerald-100 cursor-pointer">
          <router-link to="/forms">Forms</router-link>
        </li>
        <li class="px-3 py-2 rounded hover:bg-emerald-100 cursor-pointer">
          <router-link to="/watch">Watch</router-link>
        </li>
        <li class="px-3 py-2 rounded hover:bg-emerald-100 cursor-pointer">
          <router-link to="/slots">Slots</router-link>
        </li>
        <li class="px-3 py-2 rounded hover:bg-emerald-100 cursor-pointer">
          <router-link to="/props-emits">PropsEmits</router-link>
        </li>
        <li class="px-3 py-2 rounded hover:bg-emerald-100 cursor-pointer">
          <router-link to="/fetch">Fetch</router-link>
        </li>
        <li class="px-3 py-2 rounded hover:bg-emerald-100 cursor-pointer">
          <router-link to="/composables">Composables</router-link>
        </li>
        <li class="px-3 py-2 rounded hover:bg-emerald-100 cursor-pointer">
          <router-link to="/axios">Axios</router-link>
        </li>
        <li class="px-3 py-2 rounded hover:bg-emerald-100 cursor-pointer">
          <router-link to="/dynamic-forms">Dynamic Forms</router-link>
        </li>
        <li class="px-3 py-2 rounded hover:bg-emerald-100 cursor-pointer">
          <router-link to="/directives">DirectivesLab</router-link>
        </li>
        <li>
          <router-link to="/teleport" class="block px-3 py-2 rounded hover:bg-emerald-100">
            Teleport
          </router-link>
        </li>
        <li>
          <router-link to="/suspense" class="block px-3 py-2 rounded hover:bg-emerald-100">
            Suspense
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>