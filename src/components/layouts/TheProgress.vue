<template>
  <section class="step">
    <ul class="step-list">
      <li class="step-item">
        <span class="progress-count">1</span>
        <span class="progress-label">Personal information</span>
      </li>
      <li class="step-item current-item">
        <span class="progress-count">2</span>
        <span class="progress-label">Chess experience</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style>
section {
  position: absolute;
  width: 361px;
  height: 65px;
  left: 320px;
  top: -220px;
  font-family: 'Nunito';
  font-weight: 400;
  font-size: 10px;
}

.step {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.step-list {
  color: #333;
  list-style-type: none;
  border-radius: 10px;
  display: flex;
  padding: 20px 10px;
  position: relative;
  z-index: 10;
}

.step-item {
  padding: 0 20px;
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 170px;
  position: relative;
}
.step-item + .step-item:after {
  content: '';
  position: absolute;
  left: 0;
  top: 19px;
  background: #21d4fd;
  width: 100%;
  height: 2px;
  transform: translateX(-50%);
  z-index: -10;
}
.progress-count {
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 600;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  color: transparent;
}
.progress-count:after {
  content: '';
  height: 40px;
  width: 40px;
  background: #21d4fd;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: -10;
}
.progress-count:before {
  content: '';
  height: 10px;
  width: 20px;
  border-left: 3px solid #fff;
  border-bottom: 3px solid #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%) rotate(-45deg);
  transform-origin: center center;
}
.progress-label {
  font-size: 14px;
  font-weight: 600;
  margin-top: 10px;
}
.current-item .progress-count:before,
.current-item ~ .step-item .progress-count:before {
  display: none;
}
.current-item ~ .step-item .progress-count:after {
  height: 10px;
  width: 10px;
}
.current-item ~ .step-item .progress-label {
  opacity: 0.5;
}
.current-item .progress-count:after {
  background: #fff;
  border: 2px solid #21d4fd;
}
.current-item .progress-count {
  color: #21d4fd;
}
</style>
