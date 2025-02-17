// Lấy các phần tử DOM
const addressBtn = document.querySelector("#address-form");
const addressClose = document.querySelector("#close");
const addressForm = document.querySelector(".address-form");

// Mở form địa chỉ
addressBtn.addEventListener("click", () => {
  addressForm.style.display = "flex";
});

// Đóng form địa chỉ
addressClose.addEventListener("click", () => {
  addressForm.style.display = "none";
});

// Slider chính
const rightBtn = document.querySelector(".fa-chevron-right");
const leftBtn = document.querySelector(".fa-chevron-left");
const sliderTop = document.querySelector(".slider-content-left-top");
const imgList = document.querySelectorAll(".slider-content-left-top img");
const imgListLi = document.querySelectorAll(".slider-content-left-bottom li");

let index = 0;

// Hàm cập nhật slider
function updateSlider() {
  sliderTop.style.transition = "0.5s ease-in-out";
  sliderTop.style.transform = `translateX(-${index * 100}%)`;

  imgListLi.forEach((li) => li.classList.remove("active"));
  imgListLi[index].classList.add("active");
}

// Xử lý click nút phải
rightBtn.addEventListener("click", () => {
  index = (index + 1) % imgList.length;
  updateSlider();
});

// Xử lý click nút trái
leftBtn.addEventListener("click", () => {
  index = (index - 1 + imgList.length) % imgList.length;
  updateSlider();
});

// Xử lý click vào thumbnail
imgListLi.forEach((image, i) => {
  image.addEventListener("click", () => {
    index = i;
    updateSlider();
  });
});

// Slider tự động chạy
let autoSlide = setInterval(() => {
  index = (index + 1) % imgList.length;
  updateSlider();
}, 3000);

// Dừng tự động chạy khi người dùng tương tác
[rightBtn, leftBtn, ...imgListLi].forEach((btn) => {
  btn.addEventListener("click", () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
      index = (index + 1) % imgList.length;
      updateSlider();
    }, 3000);
  });
});
