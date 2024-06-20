<template>
  <section class="py-8 lg:py-16 antialiased">
    <div class="max-w-2xl px-4">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg lg:text-2xl font-bold">Discussion (20)</h2>
      </div>
      <form class="mb-6">
        <div class="px-2 mb-1">
            <v-rating half-increments></v-rating>
        </div>
        <div class="px-4 mb-1">
          <v-textarea
            id="comment"
            rows="6"
            label="Your comment"
            variant="outlined"
            clearable
            class="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none"
            placeholder="Write a comment..."
            required
          ></v-textarea>
        </div>
        <v-btn
          type="submit"
          variant="tonal"
          class="inline-flex items-center font-medium text-center"
        >
          Post comment
        </v-btn>
      </form>
      <article class="p-6 text-base">
        <footer class="flex justify-between items-center mb-2">
          <div class="flex items-center">
            <p class="inline-flex items-center mr-3 text-sm font-semibold">
              <img
                class="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Michael Gough"
              />Michael Gough
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              <time pubdate datetime="2022-02-08" title="February 8th, 2022"
                >Feb. 8, 2022</time
              >
            </p>
          </div>
          <button
            id="dropdownComment1Button"
            data-dropdown-toggle="dropdownComment1"
            class="inline-flex items-center p-2 text-sm font-medium text-center"
            type="button"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path
                d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
              />
            </svg>
            <span class="sr-only">Comment settings</span>
          </button>
          <!-- Dropdown menu -->
        </footer>
        <p class="text-gray-500 dark:text-gray-400">
          Very straight-to-point article. Really worth time reading. Thank you!
          But tools are just the instruments for the UX designers. The knowledge
          of the design tools are as important as the creation of the design
          strategy.
        </p>
        <div class="flex items-center mt-4 space-x-4">
          <button
            type="button"
            class="flex items-center text-sm  hover:underline font-medium"
          >
            <svg
              class="mr-1.5 w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
            </svg>
            Reply
          </button>
        </div>
      </article>

      <article
        class="p-6 mb-3 ml-6 lg:ml-12 text-base"
      >
        <footer class="flex justify-between items-center mb-2">
          <div class="flex items-center">
            <p
              class="inline-flex items-center mr-3 text-sm font-semibold"
            >
              <img
                class="mr-2 w-6 h-6 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Jese Leos"
              />Jese Leos
            </p>
            <p class="text-sm">
              <time pubdate datetime="2022-02-12" title="February 12th, 2022"
                >Feb. 12, 2022</time
              >
            </p>
          </div>
          <button
            id="dropdownComment2Button"
            data-dropdown-toggle="dropdownComment2"
            class="inline-flex items-center p-2 text-sm font-medium text-center"
            type="button"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path
                d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
              />
            </svg>
            <span class="sr-only">Comment settings</span>
          </button>
          <!-- Dropdown menu -->
         
        </footer>
        <p class="text-gray-500 dark:text-gray-400">
          Much appreciated! Glad you liked it ☺️
        </p>
        <div class="flex items-center mt-4 space-x-4">
          <button
            type="button"
            class="flex items-center text-smfont-medium"
          >
            <svg
              class="mr-1.5 w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
            </svg>
            Reply
          </button>
        </div>
      </article>

    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
