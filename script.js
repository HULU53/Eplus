const header = document.querySelector("#site-header");
const navLinks = [...document.querySelectorAll("[data-nav]")];
const sections = [...document.querySelectorAll("main section[id]")];
const modeTabs = [...document.querySelectorAll(".mode-tab")];
const modePanels = [...document.querySelectorAll(".mode-panel")];
const legalCards = [...document.querySelectorAll(".legal-card")];
const copyButton = document.querySelector("[data-copy]");
const toast = document.querySelector(".toast");

function updateHeaderState() {
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navLinks.forEach((link) => {
                link.classList.toggle("is-active", link.dataset.nav === "home" && entry.target.id === "home");
            });
        });
    }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });

    sections.forEach((section) => sectionObserver.observe(section));
} else {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}

modeTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const mode = tab.dataset.mode;

        modeTabs.forEach((item) => {
            const isActive = item === tab;
            item.classList.toggle("is-active", isActive);
            item.setAttribute("aria-selected", String(isActive));
        });

        modePanels.forEach((panel) => {
            const isActive = panel.dataset.panel === mode;
            panel.hidden = !isActive;
            panel.classList.toggle("is-active", isActive);
        });
    });
});

legalCards.forEach((card) => {
    card.addEventListener("toggle", () => {
        if (!card.open) return;
        legalCards.forEach((otherCard) => {
            if (otherCard !== card) otherCard.open = false;
        });
    });
});

copyButton?.addEventListener("click", () => {
    const value = copyButton.dataset.copy;

    copyButton.querySelector("span").textContent = "已复制";
    toast?.classList.add("is-visible");

    const fallbackCopy = () => {
        const input = document.createElement("textarea");
        input.value = value;
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        input.remove();
    };

    if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(value).catch(fallbackCopy);
    } else {
        fallbackCopy();
    }

    window.setTimeout(() => {
        copyButton.querySelector("span").textContent = "复制仓库地址";
        toast?.classList.remove("is-visible");
    }, 1800);
});
