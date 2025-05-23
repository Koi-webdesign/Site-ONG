//animação botão

const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);

$$('.botao').forEach(el => el.addEventListener('mousemove', function (e) {
  const pos = this.getBoundingClientRect();
  const mx = e.clientX - pos.left - pos.width / 2;
  const my = e.clientY - pos.top - pos.height / 2;

  this.style.transform = 'translate(' + mx * 0.15 + 'px, ' + my * 0.3 + 'px)';
  this.style.transform += 'rotate3d(' + mx * -0.1 + ', ' + my * -0.3 + ', 0, 10deg)';
  this.children[0].style.transform = 'translate(' + mx * 0.025 + 'px, ' + my * 0.075 + 'px)';
}));

$$('.botao').forEach(el => el.addEventListener('mouseleave', function () {
  this.style.transform = 'translate3d(0px, 0px, 0px)';
  this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
  this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
}));