<template>
  <svg width="25px" height="30px" viewBox="0 0 25 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->
    <title>Group 23</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <polygon id="path-1" points="9 7 26.7199993 7 26.7199993 8.0904615 18.4809569 8.0904615 18.4809569 28.6274863 17.2996236 28.6274863 17.2996236 8.0904615 9 8.0904615"></polygon>
      <filter x="-39.5%" y="-23.1%" width="179.0%" height="164.7%" filterUnits="objectBoundingBox" id="filter-2">
        <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowInner"></feMorphology>
        <feOffset dx="0" dy="2" in="shadowInner" result="shadowInner"></feOffset>
        <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"></feComposite>
        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.596608922 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
      </filter>
    </defs>
    <g id="UI" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Artboard" transform="translate(-236.000000, -282.000000)">
        <g id="Group-23" transform="translate(231.000000, 277.000000)">
          <g id="Group-Copy-6" fill="#000000" opacity="0">
            <g id="Rectangle-6-Copy">
              <rect x="0" y="0" width="35" height="35"></rect>
            </g>
          </g>
          <g id="T">
            <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
            <path stroke="#FFFFFF" stroke-width="1" d="M9.5,7.5 L9.5,7.5904615 L17.7996236,7.5904615 L17.7996236,28.1274863 L17.9809569,28.1274863 L17.9809569,7.5904615 L26.2199993,7.5904615 L26.2199993,7.5 L9.5,7.5 Z"></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {};
</script>
