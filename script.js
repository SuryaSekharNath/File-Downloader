const fileInput = document.querySelector("input"),
dowloadBtn = document.querySelector("button");

dowloadBtn.addEventListener("click", e =>
{
    e.preventDefault();
    dowloadBtn.innerText = "Downloading file...";
    fetchFile(fileInput.value);
});

function fetchFile(url)
{
    fetch(url).then(res => res.blob()).then(file =>
    {
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/,'');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
        dowloadBtn.innerText = "Download File";
    }).catch(() =>
    {
        dowloadBtn.innerText = "Download File";
        alert("Failed to download file!");
    })
}