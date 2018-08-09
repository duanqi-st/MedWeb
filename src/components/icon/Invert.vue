<template>
  <svg width="34px" height="34px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->
    <title>Group 5</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <filter x="-33.3%" y="-25.0%" width="166.7%" height="166.7%" filterUnits="objectBoundingBox" id="filter-1">
        <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowInner"></feMorphology>
        <feOffset dx="0" dy="2" in="shadowInner" result="shadowInner"></feOffset>
        <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"></feComposite>
        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.596608922 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
    </defs>
    <g id="UI" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Artboard" transform="translate(-322.000000, -235.000000)">
        <g id="Group-5" transform="translate(321.000000, 232.000000)">
          <g id="Group-Copy-3" fill="#000000" opacity="0">
            <g id="Rectangle-6-Copy">
              <rect x="0" y="0" width="35" height="35"></rect>
            </g>
          </g>
          <g id="Group-14" filter="url(#filter-1)" transform="translate(6.000000, 6.000000)" stroke="#FFFFFF">
            <circle id="Oval-4" cx="12" cy="12" r="12"></circle>
            <path d="M12.5,0.5 L12.5,23.5217289" id="Line-7" stroke-linecap="square"></path>
            <path d="M17.5,1.5 L12.5,6.5" id="Line-8" stroke-linejoin="round"></path>
            <path d="M20.5,3.5 L12.5,11.5" id="Line-8-Copy" stroke-linejoin="round"></path>
            <path d="M22.5,6.5 L12.5,16.5" id="Line-8-Copy-2" stroke-linejoin="round"></path>
            <path d="M23.5,10.5 L12.5,21.5" id="Line-8-Copy-3" stroke-linejoin="round"></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {};
</script>
