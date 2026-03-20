gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const numbers = document.querySelector('.counters');
  if (!numbers) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: numbers,
      start: 'top center',
      markers: false,
      toggleActions: 'restart pause resume pause',
    },
  });

  gsap.utils.toArray('.counterOne').forEach(function (el) {
    const target = { val: 0 };
    tl.to(target, {
      val: Number(el.getAttribute('data-number')),
      duration: 2,
      onUpdate: function () {
        el.innerText = target.val.toFixed(1);
      },
    }, 0); // 동시에 시작
  });

  gsap.utils.toArray('.counterTwo').forEach(function (el) {
    const target = { val: 0 };
    tl.to(target, {
      val: Number(el.getAttribute('data-number')),
      duration: 2,
      onUpdate: function () {
        el.innerText = target.val.toFixed(0);
      },
    }, 0); // 동시에 시작
  });

  gsap.utils.toArray('.counterThree').forEach(function (el) {
    const target = { val: 0 };
    tl.to(target, {
      val: Number(el.getAttribute('data-number')),
      duration: 2,
      onUpdate: function () {
        el.innerText = target.val.toFixed(0);
      },
    }, 0); // 동시에 시작
  });
});