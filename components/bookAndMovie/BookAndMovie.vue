<script setup lang="ts">


import {default as defaultJson} from '../../.vitepress/bookAndMovie'

const BookAndMovieList = defaultJson.BookAndMovieList;
// productType music、book、movie

</script>


<template>
  <div class="VPContent">
    <div class="VPPage">
      <div style="position: relative;">
        <div>
          <div class="posts max-w-6xl mx-2 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 mt-6">
            <div v-for="(item, index) in BookAndMovieList" :key="index" class="p-4 dark:bg-gray-700 rounded-md transition-shadow shadow-gray-200 dark:shadow-gray-600
                shadow-0-0-5-0-gray
                shadow-[0px_0px_5px_0px_var(tw-shadow-color)] dark:shadow-none hover:shadow-0-0-10-2-gray hover:shadow-[0px_0px_20px_2px_var(tw-shadow-color)] dark:hover:shadow-0-0-5-5-gray  dark:hover:shadow-[0px_0px_5px_5px_var(tw-shadow-color)] relative">
              <h2 class="text-lg">
                <a :href="item.localHref"
                   style="color: black; text-decoration: none"
                >{{ item.title }}
                </a>
              </h2>
              <p class="text-sm text-gray-500 dark:text-gray-300" v-html="item.date" ></p>
              <div class="border border-gray-100 dark:border-gray-500 p-2 mt-2 relative shadow-0-0-5-0-gray">
                <a
                    class="inline-flex absolute right-4 bottom-2 items-center my-2 text-sm px-4 py-1 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-500 opacity-80"
                    style="color: white"
                    target="_blank"
                    :href="item.outHref">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                       role="img"
                       class="bg-green-600 iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24">
                    <path
                        d="M20 6H4V4h16v2m0 12v2H4v-2h3.33l-1.07-4H5V8h14v6h-1.26l-1.07 4H20M7 12h10v-2H7v2m2.4 6h5.2l1.07-4H8.33l1.07 4z"
                        fill="currentColor"></path>
                  </svg>
                  <span class="ml-2">{{ item.span1 }}</span><span class="ml-2">{{ item.span2 }}</span>
                </a>
                <div class="absolute flex flex-col items-end right-4 bottom-2"><!----></div>
                <img class="w-full h-40 object-cover"
                     :src="item.backgroundCover" alt="cover">
              </div>


              <div class="absolute flex items-center top-0 right-0 text-white text-sm font-semibold px-2 bg-red-600"
                   v-if="item.productType === 'music'">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                     role="img" class="mr-1 iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="currentColor"
                        d="M21 3v12.5a3.5 3.5 0 0 1-3.5 3.5a3.5 3.5 0 0 1-3.5-3.5a3.5 3.5 0 0 1 3.5-3.5c.54 0 1.05.12 1.5.34V6.47L9 8.6v8.9A3.5 3.5 0 0 1 5.5 21A3.5 3.5 0 0 1 2 17.5A3.5 3.5 0 0 1 5.5 14c.54 0 1.05.12 1.5.34V6l14-3Z"></path>
                </svg>
                <span>{{ item.productTypeText }}</span>
              </div>

              <div class="absolute flex items-center top-0 right-0 text-white text-sm font-semibold px-2 bg-green-600"
                   v-if="item.productType === 'book'">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                     role="img"
                     class="mr-1 iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="currentColor"
                        d="m19 2l-5 4.5v11l5-4.5V2M6.5 5C4.55 5 2.45 5.4 1 6.5v14.66c0 .25.25.5.5.5c.1 0 .15-.07.25-.07c1.35-.65 3.3-1.09 4.75-1.09c1.95 0 4.05.4 5.5 1.5c1.35-.85 3.8-1.5 5.5-1.5c1.65 0 3.35.31 4.75 1.06c.1.05.15.03.25.03c.25 0 .5-.25.5-.5V6.5c-.6-.45-1.25-.75-2-1V19c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5V6.5C10.55 5.4 8.45 5 6.5 5Z"></path>
                </svg>
                <span>{{ item.productTypeText }}</span>
              </div>

              <div class="absolute flex items-center top-0 right-0 text-white text-sm font-semibold px-2 bg-blue-600"
                   v-if="item.productType === 'movie'">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                     role="img"
                     class="mr-1 iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24">
                  <path fill="currentColor"
                        d="M18 9h-2V7h2m0 6h-2v-2h2m0 6h-2v-2h2M8 9H6V7h2m0 6H6v-2h2m0 6H6v-2h2M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2Z"></path>
                </svg>
                <span>{{ item.productTypeText }}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<style>

.max-w-6xl {
  max-width: 72rem;
}

.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.grid {
  display: grid;
}

.grid-cols-1 {
  //grid-template-columns: repeat(1, minmax(0, 1fr));

  /** 自适应 拆分大小 */

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.gap-4 {
  gap: 1rem;
}

.mt-6 {
  margin-top: 1.5rem;
}


.p-4 {
  padding: 1rem;
}

.rounded-md {
  border-radius: 0.375rem;
}

.transition-shadow {
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: .15s;
}

.shadow-gray-200 {
  --tw-shadow-color: #e5e7eb;
  --tw-shadow: var(--tw-shadow-colored);
}

.relative {
  position: relative;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-sm {
  font-size: .875rem;
  line-height: 1.25rem;
}

.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.border {
  border-width: 1px;
}

.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}

.p-2 {
  padding: 0.5rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.relative {
  position: relative;
}

.inline-flex {
  display: inline-flex;
}

.absolute {
  position: absolute;
}

.right-4 {
  right: 1rem;
}

.bottom-2 {
  bottom: 0.5rem;
}

.items-center {
  align-items: center;
}

.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.text-sm {
  font-size: .875rem;
  line-height: 1.25rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.rounded-2xl {
  border-radius: 1rem;
}

.bg-slate-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity));
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.font-bold {
  font-weight: 700;
}

.opacity-80 {
  opacity: .8;
}

.bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(22 163 74 / var(--tw-bg-opacity));
}

.ml-2 {
  margin-left: 0.5rem;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-end {
  align-items: flex-end;
}

.right-4 {
  right: 1rem;
}

.bottom-2 {
  bottom: 0.5rem;
}

.w-full {
  width: 100%;
}

.h-40 {
  height: 10rem;
}

.object-cover {
  -o-object-fit: cover;
  object-fit: cover;
}

.top-0 {
  top: 0;
}

.right-0 {
  right: 0;
}

.font-semibold {
  font-weight: 600;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}

.mr-1 {
  margin-right: 0.25rem;
}


.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
}

.shadow-0-0-5-0-gray {
  box-shadow: 0px 0px 5px rgb(169, 169, 169)
}

.shadow-0-0-10-2-gray {
  box-shadow: 0px 0px 20px 2px rgb(169, 169, 169)
}

.shadow-0-0-5-5-gray {
  box-shadow: 0px 0px 5px 5px rgb(169, 169, 169)
}


/*
这里是为了兼容
*/
h2.text-lg {
  margin: 0;
  padding: 0;
  font-size: 1.125rem;
  line-height: 1.75rem;
  border-top: 0;
}

.vp-doc p {
  //line-height: 0px; margin: 0;
}


/*





iconify
iconify--mdi


done-----------------------------------------

md:mx-auto
md:grid-cols-3
md:gap-12
dark:border-gray-500

shadow-[0px_0px_5px_0px_var(tw-shadow-color)]
hover:shadow-[0px_0px_20px_2px_var(tw-shadow-color)]
dark:hover:shadow-[0px_0px_5px_5px_var(tw-shadow-color)]

dark:text-gray-300
shadow-gray-600
dark:shadow-none
hover:bg-slate-500
*/

.shadow-gray-600 {
  --tw-shadow-color: #4b5563;
}

.shadow-none {
  box-shadow: 0 0 #0000;
}

.mx-auto {
  margin-right: auto;
  margin-left: auto;
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.gap-12 {
  gap: 3rem;
}

.text-gray-300 {
  color: #e2e8f0;
}

.border-gray-500 {
  border-color: #a0aec0;
}

.bg-slate-500 {
  background-color: rgb(100 116 139);
}


/*
这里 限制一下 大小
*/
.VPContent {
  .VPDoc:not(.has-sidebar) {
    .content {
      max-width: 960px;
    }
    padding-bottom: 0;
  }
}

.color-white {
  color: white;
}

</style>