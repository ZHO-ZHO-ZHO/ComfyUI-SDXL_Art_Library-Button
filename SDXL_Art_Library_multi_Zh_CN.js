import { app } from "/scripts/app.js";

const id = "SDXL_Art_Library";

app.registerExtension({
    name: "SDXL_Art_Library",

    async setup() {
        const menu = document.querySelector(".comfy-menu");

        // 创建分隔线元素
        const separator = document.createElement("div");
        separator.style.margin = "20px 0";
        separator.style.width = "100%";
        separator.style.height = "2px"; // 设置分隔线高度
        separator.style.backgroundColor = "white"; // 设置分隔线颜色
        menu.append(separator);

        // 创建SDXL_Art_Library按钮
        const SDXL_Art_Library = document.createElement("button");
        SDXL_Art_Library.textContent = "SDXL1.0艺术库";
        SDXL_Art_Library.onclick = () => {
            window.open("https://rikkar69.github.io/SDXL-artist-study/art-movements/", "SDXL1.0艺术库");
        };
        // 将按钮添加到菜单
        menu.append(SDXL_Art_Library);

        // 创建C站按钮
        const CivitaiButton = document.createElement("button");
        CivitaiButton.textContent = "C站";
        CivitaiButton.onclick = () => {
            window.open("https://civitai.com/", "C站");
        };
        // 将按钮添加到菜单
        menu.append(CivitaiButton);

        // 创建Midlibrary按钮
        const MidlibraryButton = document.createElement("button");
        MidlibraryButton.textContent = "Midlibrary";
        MidlibraryButton.onclick = () => {
            window.open("https://www.midlibrary.io/", "Midlibrary");
        };
        // 将按钮添加到菜单
        menu.append(MidlibraryButton);

        // 创建艺术家库按钮
        const Aesthetic_datasetteButton = document.createElement("button");
        Aesthetic_datasetteButton.textContent = "艺术家库";
        Aesthetic_datasetteButton.onclick = () => {
            window.open("https://laion-aesthetic.datasette.io/laion-aesthetic-6pls/images", "Aesthetic_datasetteButton");
        };
        // 将按钮添加到菜单
        menu.append(Aesthetic_datasetteButton);
    }
});
