let left = document.querySelector("div.button#left");
let right = document.querySelector("div.button#right");
let rotation = 0;
let valid = true;

const modulus = (number, dividend) => {
    return ((number % dividend) + dividend) % dividend
}

left.addEventListener("click", (e) => {
    if (valid == true) {
        valid = false;
        setTimeout(() => {
            valid = true;
        }, 500);
        let target = document.querySelector(e.target.dataset.target);
        let dots = Array.from(document.querySelector(e.target.dataset.target + "-dots").children);
        rotation -= 1;
        target.firstElementChild.style.transform = `perspective(1000px) rotateY(${rotation * -45}deg)`;
        dots.forEach((e) => {
            e.classList.remove("active");
        });
        dots[modulus(rotation, 8)].classList.add("active");
    }
});

right.addEventListener("click", (e) => {
    if (valid == true) {
        valid = false;
        setTimeout(() => {
            valid = true;
        }, 500);
        let target = document.querySelector(e.target.dataset.target);
        let dots = Array.from(document.querySelector(e.target.dataset.target + "-dots").children);
        rotation += 1;
        target.firstElementChild.style.transform = `perspective(1000px) rotateY(${rotation * -45}deg)`;
        dots.forEach((e) => {
            e.classList.remove("active");
        });
        dots[modulus(rotation, 8)].classList.add("active");
    }
});
