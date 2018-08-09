<template>
  <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->
    <title>Group</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <rect id="path-1" x="7" y="7" width="22" height="22" rx="2"></rect>
      <filter x="-31.8%" y="-22.7%" width="163.6%" height="163.6%" filterUnits="objectBoundingBox" id="filter-2">
        <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowInner"></feMorphology>
        <feOffset dx="0" dy="2" in="shadowInner" result="shadowInner"></feOffset>
        <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"></feComposite>
        <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.596608922 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
      </filter>
    </defs>
    <g id="UI" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Artboard" transform="translate(-96.000000, -291.000000)">
        <g id="Group" transform="translate(93.000000, 286.000000)">
          <g id="Rectangle-6-Copy" fill="#000000" opacity="0">
            <rect x="0" y="0" width="35" height="35"></rect>
          </g>
          <g id="Rectangle-7">
            <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlink:href="#path-1"></use>
            <rect stroke="#FFFFFF" stroke-width="1" x="7.5" y="7.5" width="21" height="21" rx="2"></rect>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {};
</script>
