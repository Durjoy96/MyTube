async function getVideos() {
    const response = await fetch("https://openapi.programming-hero.com/api/phero-tube/videos");
    const data = await response.json();
    console.log(data.videos)
    const container = document.getElementById("videosContainer");

    data.videos.forEach(item => {
        container.innerHTML += `<div class="w-full">
                <div class="w-full h-[200px] rounded-lg bg-cover bg-center relative" style="background-image: url('${item.thumbnail}')">
                ${getPostedTime(item.others.posted_date)} 
                </div>
                <div class="mt-5 flex gap-3">
                    <div>
                        <img class="rounded-full w-10 h-10 object-cover" src="${item.authors[0]["profile_picture"]}" alt="">
                    </div>
                    <div class="space-y-2">
                        <h2 class="text-lg font-bold text-gray-900">${item.title}</h2>
                        <div class="flex items-center gap-3">
                            <p class="text-base text-gray-500">${item.authors[0]["profile_name"]}</p>
                            ${isVerified(item.authors[0].verified)}
                        </div>
                        <span class="text-base text-gray-500">${item.others.views} Views</span>
                    </div>
                </div>
            </div>`;
    });

};

function isVerified(boolean) {
    if (boolean) {
        return `<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"
        fill="#5985E1">
        <path
            d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
    </svg>`
    } else {
        return "";
    };
};

function getPostedTime(sec) {
    if (sec) {
        const hours = parseInt(sec / 3600);
        const minutes = parseInt(((sec / 3600) - hours) * 60);
        return `<span class="px-4 py-1 bg-black rounded-lg text-xs text-white font-medium absolute right-3 bottom-3 bg-opacity-80">${hours}hrs ${minutes} min ago</span>`;
    } else {
        return "";
    }
};

getVideos();