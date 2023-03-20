const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCI_osfUfjsdyrq5Tp8lqhQA&part=snippet%2Cid&order=date&maxResults=8";
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
      <div class="video_item">
        <div class="video">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div>
          <h3 class="text-descripcion">
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `
      )
      .slice(0, 4)
      .join("")}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
