<script setup lang="ts">

type feature = {
  title: string;
  icon: string;
}
const menus: string[] = ['Home', 'About', 'Features', 'Collection', 'Contact'];

const features: feature[] = [
  {
    title: 'Data Stored',
    icon: 'mdi-server',
  },
  {
    title: 'Fingerprint lock',
    icon: 'mdi-fingerprint',
  },
  {
    title: 'Innovative Idea',
    icon: 'mdi-lightbulb',
  },
  {
    title: 'Password Protect',
    icon: 'mdi-lock-open-outline',
  },
] 

</script>
<template>
  <main class="open-sans">
    <section class="relative ">
      <div class="bg-primary absolute h-full w-[51%] z-10"/>
      <div class="bg-accent absolute h-full w-full z-0"/>
      <div class="px-[77px] pt-9 relative z-20 pb-48">
        <div class="flex justify-between items-center">
          <svg width="161" height="60" viewBox="0 0 161 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect y="0.703369" width="160.02" height="58.5553" fill="url(#pattern0)"/>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_1_3322" transform="matrix(0.00613497 0 0 0.0167656 0 -0.329899)"/>
            </pattern>
            <image id="image0_1_3322" width="163" height="99" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAABjCAIAAAB45idjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFnmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTExLTI3VDEyOjU4OjEwKzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNC0wOFQxMDowMToxNCswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNC0wOFQxMDowMToxNCswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkYTM0MzY5Mi1lMGEzLTEx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"/>
            </defs>
          </svg>
          <div class="flex gap-10 items-center">
            <div class="flex gap-4 text-primary text-base font-normal">
              <a href="" v-for="menu in menus">{{ menu }}</a>
            </div>
            <button class="px-11 py-3 bg-primary text-white text-base font-semibold">
              Sign Up
            </button>
          </div>
        </div>
        <div class="text-white w-[600px] mt-[170px]">
          <h2 class="text-7xl font-black nunito mb-9">
            Let's Keep Your Data Safe
          </h2>
          <h5 class="text-base font-semibold leading-loose mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Lorem ipsum dolor sit amet.
          </h5>
          <button class="px-11 py-3 bg-accent text-primary text-base font-semibold leading-loose">
            Know More
          </button>
        </div>
        <img class="w-96 h-96 absolute" style="width: 674px; height: 700px; top: 120px; right: 69px;" src="https://s3-alpha-sig.figma.com/img/f760/f2fc/f5aeaf2cd7b163c519fc2b57bd73f4b7?Expires=1696204800&Signature=iPQo42XF~ZMVJ6nltHAfcM1nOBBSIwyIufUtpAepujZkckkzkMYRJPWguLWgM8zpSzw1k9LwAIz7On9u~uW3AuQO5nErSidjd0KMX2Y~S2BdUsSv8YZRxghSdnVz3fsblvQJkoxnMcBBZRsyuavVOGlnW7jXXlKg4yzUYAd0daH6I~1TNrjEKMIHjby8-rUhXyau5QjePbJsn0zMhTJvQnF-oPNjtIUUD4EmFWqs7aIj04hLAKyJoYLXQznfh827JvSoEJAPcexYJoYmos6ArMnmeYNVp7AFI5xYCsQyJVfs-Es7UY6UtVo3Rurt4j0t7aZgT97k7cpWn8KD6sNGHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
      </div>
    </section>

    <section class="relative pt-40 px-24 pb-52">
      <img class="w-96 h-96 absolute" style="width: 614px; height: 590px; top: 120px; right: 0;" src="https://s3-alpha-sig.figma.com/img/f760/f2fc/f5aeaf2cd7b163c519fc2b57bd73f4b7?Expires=1696204800&Signature=iPQo42XF~ZMVJ6nltHAfcM1nOBBSIwyIufUtpAepujZkckkzkMYRJPWguLWgM8zpSzw1k9LwAIz7On9u~uW3AuQO5nErSidjd0KMX2Y~S2BdUsSv8YZRxghSdnVz3fsblvQJkoxnMcBBZRsyuavVOGlnW7jXXlKg4yzUYAd0daH6I~1TNrjEKMIHjby8-rUhXyau5QjePbJsn0zMhTJvQnF-oPNjtIUUD4EmFWqs7aIj04hLAKyJoYLXQznfh827JvSoEJAPcexYJoYmos6ArMnmeYNVp7AFI5xYCsQyJVfs-Es7UY6UtVo3Rurt4j0t7aZgT97k7cpWn8KD6sNGHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="">
      <div class="max-w-xl">
        <h5 class="text-sky-800 text-6xl font-black nunito leading-10">
          About The Protem
        </h5>
        <img src="../assets/line.png" class="py-6" alt="" srcset="">
        <p class="text-neutral-600 text-base font-normal leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed dui mollis, finibus odio eget, cursus nibh. Ut accumsan, ipsum a hendrerit tempor, ex tortor consectetur tortor, at viverra leo enim at tortor. Mauris tristique purus purus, sit amet tempor lacus suscipit at. Quisque tristique orci magna, vitae tincidunt lacus maximus vitae. Lorem ipsum dolor sit amet, consectetur. 
        </p>
        <div class="flex gap-4 items-center pb-4">
          <div class="rounded-full border-primary border-2 p-2">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.29508 14.556L5.29508 14.556C5.40195 14.6993 5.5239 14.75 5.62499 14.75C5.72609 14.75 5.84804 14.6993 5.95492 14.556L5.29508 14.556ZM5.29508 14.556L0.420073 8.01857C0.311212 7.87259 0.25 7.67016 0.25 7.45686C0.25 7.24356 0.31121 7.04112 0.420075 6.89512C0.420076 6.89511 0.420078 6.89511 0.42008 6.89511L1.48071 5.47276L1.48072 5.47276C1.58758 5.32944 1.70953 5.27872 1.81063 5.27872C1.91172 5.27872 2.03368 5.32944 2.14054 5.47276L2.14055 5.47277L5.42459 9.87662L5.625 10.1454L5.82541 9.87662L12.8594 0.444015C12.9663 0.300716 13.0883 0.25 13.1894 0.25C13.2905 0.25 13.4124 0.300716 13.5193 0.444015L14.5799 1.86636L14.7803 1.71692L14.5799 1.86637C14.6888 2.01235 14.75 2.21478 14.75 2.42808C14.75 2.64137 14.6888 2.84381 14.5799 2.98982C14.5799 2.98982 14.5799 2.98983 14.5799 2.98983L5.95493 14.556L5.29508 14.556Z" fill="#024D94" stroke="black" stroke-width="0.5"/>
            </svg>
          </div>
          <div class="text-neutral-600 text-base font-normal leading-7">
            Nunc quis justo sed odio scelerisque.
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <div class="rounded-full border-primary border-2 p-2">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.29508 14.556L5.29508 14.556C5.40195 14.6993 5.5239 14.75 5.62499 14.75C5.72609 14.75 5.84804 14.6993 5.95492 14.556L5.29508 14.556ZM5.29508 14.556L0.420073 8.01857C0.311212 7.87259 0.25 7.67016 0.25 7.45686C0.25 7.24356 0.31121 7.04112 0.420075 6.89512C0.420076 6.89511 0.420078 6.89511 0.42008 6.89511L1.48071 5.47276L1.48072 5.47276C1.58758 5.32944 1.70953 5.27872 1.81063 5.27872C1.91172 5.27872 2.03368 5.32944 2.14054 5.47276L2.14055 5.47277L5.42459 9.87662L5.625 10.1454L5.82541 9.87662L12.8594 0.444015C12.9663 0.300716 13.0883 0.25 13.1894 0.25C13.2905 0.25 13.4124 0.300716 13.5193 0.444015L14.5799 1.86636L14.7803 1.71692L14.5799 1.86637C14.6888 2.01235 14.75 2.21478 14.75 2.42808C14.75 2.64137 14.6888 2.84381 14.5799 2.98982C14.5799 2.98982 14.5799 2.98983 14.5799 2.98983L5.95493 14.556L5.29508 14.556Z" fill="#024D94" stroke="black" stroke-width="0.5"/>
            </svg>
          </div>
          <div class="text-neutral-600 text-base font-normal leading-7">
            Duis tristique lorem non risus dignissim.
          </div>
        </div>
        <button class="px-11 py-3 bg-accent text-primary text-base font-semibold leading-loose mt-9">
          Learn More
        </button>
      </div>
    </section>
    <section class="bg-neutral-50 pt-24">
      <div class="text-center">
        <h2 class="text-7xl font-black nunito mb-9">
          Future of The Protem
        </h2>
        <img src="../assets/line2.png" class="py-6 mx-auto" alt="" srcset="">
        <p class="text-neutral-600 text-base font-normal leading-7 max-w-[800px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-5 pt-[70px] px-24 pb-32">
        <div
          v-for="feature in features"
          class="flex"
        >
          <div class="bg-accent mr-6 pt-3 aspect-square">
            <i :class="'text-5xl text-neutral-600 p-7 mt-7 mdi ' + feature.icon"></i>
          </div>
          <div>
            <div class="text-sky-800 text-2xl font-bold nunito">
              {{ feature.title }}
            </div>
            <div class="text-neutral-600 text-base font-normal leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="bg-sky-900 text-white text-base font-normal nunito text-center py-3">
      © 2021. Protem. All Rights Reserved. 
    </div>

  </main>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,900&display=swap');
.nunito{
  font-family: 'Nunito Sans', sans-serif;
}
.open-sans{
  font-family: 'Open Sans', sans-serif;
}
</style>