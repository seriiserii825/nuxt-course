<template>
  <div>
    <header>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/events">Events</NuxtLink>
          <NuxtLink to="/events/22">Event 22</NuxtLink>
        </li>
      </ul>
    </header>
    <slot/>
  </div>
</template>
