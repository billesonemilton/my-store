import "./style.scss";
import gsap from "gsap";

const items = document.querySelectorAll(".item");

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    gsap.to(".right", {
      duration: 2,
      y: `-${index * 100}%`,
      ease: "elastic.out(1,0.75)",
    });
    gsap.to(".left", {
      duration: 2,
      x: `${index * 345}px`,
      ease: "elastic.out(1,0.75)",
    });
    if (index === 1) {
      gsap.to(".item-2", {
        duration: 2,
        scale: 1,
        ease: "elastic.out(1,0.85)",
      });
      gsap.to(".item-2", {
        duration: 0,
        filter: "blur(0)",
      });
      gsap.to(".item-1", {
        duration: 2,
        x: 100,
      });
    }
    if (index === 2) {
      gsap.to(".item-3", {
        duration: 2,
        scale: 1,
        ease: "elastic.out(1,0.85)",
      });
      gsap.to(".item-3", {
        duration: 0,
        filter: "blur(0)",
      });
      gsap.to(".item-2", {
        duration: 2,
        x: 100,
      });
    }
    if (index === 3) {
      gsap.to(".item-4", {
        duration: 2,
        scale: 1,
        ease: "elastic.out(1,0.85)",
      });
      gsap.to(".item-4", {
        duration: 0,
        filter: "blur(0)",
      });
      gsap.to(".item-3", {
        duration: 2,
        x: 100,
      });
    }
  });
});

document.querySelector(".restart").addEventListener("click", () => {
  gsap.to(".right", {
    duration: 2,
    y: 0,
    ease: "elastic.out(1,0.75)",
  });
  gsap.to(".left", {
    duration: 2,
    x: 0,
    ease: "elastic.out(1,0.75)",
  });
  gsap.to(".item-2", {
    duration: 2,
    scale: 0.8,
    ease: "elastic.out(1,0.85)",
  });
  gsap.to(".item-2", {
    duration: 0,
    filter: "blur(12px)",
  });
  gsap.to(".item-1", {
    duration: 2,
    x: 0,
  });
  gsap.to(".item-3", {
    duration: 2,
    scale: 0.6,
    ease: "elastic.out(1,0.85)",
  });
  gsap.to(".item-3", {
    duration: 0,
    filter: "blur(12px)",
  });
  gsap.to(".item-2", {
    duration: 2,
    x: 0,
  });
  gsap.to(".item-4", {
    duration: 2,
    scale: 0.4,
    ease: "elastic.out(1,0.85)",
  });
  gsap.to(".item-4", {
    duration: 0,
    filter: "blur(12px)",
  });
  gsap.to(".item-3", {
    duration: 2,
    x: 0,
  });
});
