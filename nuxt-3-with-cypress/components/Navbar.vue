<template>
  <header>
    <nav class="container">
      <ul class="flex items-center justify-center gap-4">
        <li>
          <NuxtLink to="/" class="text-xl p-1 bg-slate-400 rounded-md"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/about" class="text-xl p-1 bg-slate-400 rounded-md"
            >About</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/1" class="text-xl p-1 bg-slate-400 rounded-md"
            >Post 1</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/2" class="text-xl p-1 bg-slate-400 rounded-md"
            >Post 2</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
