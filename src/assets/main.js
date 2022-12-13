const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UC2g74eHcMOgXIhLsg3kO3sA&part=snippet%2Cid&order=date&maxResults=8";
const content = null || document.getElementById("content");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    //7f18821b11mshfe3afcbbe81a8f1p1fd907jsnd6d05f2b9127
    "X-RapidAPI-Key": "c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256",
  },
};
async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}
(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items
      .map(
        (video) => `<a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `
      )
      .slice(0, 8)
      .join("")}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
