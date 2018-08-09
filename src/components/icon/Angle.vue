<template>
  <svg width="28px" height="24px" viewBox="0 0 28 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->
    <title>Group 18</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <filter x="-38.1%" y="-37.5%" width="171.4%" height="193.8%" filterUnits="objectBoundingBox" id="filter-1">
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
      <g id="Artboard" transform="translate(-324.000000, -285.000000)">
        <g id="Group-18" transform="translate(321.000000, 277.000000)">
          <g id="Group-Copy-8" fill="#000000" opacity="0">
            <g id="Rectangle-6-Copy">
              <rect x="0" y="0" width="35" height="35"></rect>
            </g>
          </g>
          <g id="Group-20" filter="url(#filter-1)" transform="translate(7.000000, 10.000000)" stroke="#FFFFFF">
            <polyline id="Path-3" stroke-linecap="round" stroke-linejoin="round" points="15.0748134 0 5.68434189e-14 15.0748134 20.0793157 15.0748134"></polyline>
            <path d="M13,15 C13,11.4340698 11.5642523,8.20347636 9.23929618,5.85475896" id="Oval-6" opacity="0.600000024"></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {};
</script>
