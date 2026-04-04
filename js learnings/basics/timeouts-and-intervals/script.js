let downloadStartBtn = document.querySelector("#startBtn");
let progressCount = 0;
let seconds = 5;
downloadStartBtn.addEventListener("click", () => {
//   console.log("cliked");
  let downloadProgressInterval = setInterval(
    () => {
      if (progressCount <= 99) {
        progressCount++;
        // console.log({ progressCount });
        //update download progressbar width
        document.querySelector(".progressBar").style.width =
          `${progressCount}%`;
        //update progress percentage
        document.querySelector("#progressText").textContent =
          `${progressCount}%`;
      } else {
        downloadStartBtn.textContent = "Downloaded successfully";
        clearInterval(downloadProgressInterval);
      }
    },
    (seconds * 1000) / 100,
  );
});
