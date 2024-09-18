const images = [
    { src: 'img/月.jpg', title: '月', description: '好看吧，我拍的！' },
    { src: 'img/公园的夫妇.jpg', title: '公园的夫妇', description: '拍摄于衡阳平湖公园，感觉这一幕很暖心。' },
    { src: 'img/衡山.jpg', title: '敢问路在何方', description: '拍摄于衡山山顶' }
  ];

  let currentIndex = 0;

  function updateContent(index) {
    const imageElement = document.getElementById('image');
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');

    imageElement.src = images[index].src;
    titleElement.textContent = images[index].title;
    descriptionElement.textContent = images[index].description;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateContent(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateContent(currentIndex);
  }

  document.getElementById('brightness-btn').addEventListener('click', function() {
    const imageElement = document.getElementById('image');
    const button = this;

    if (button.textContent === 'Darken') {
        imageElement.style.filter = 'brightness(70%)'; // 设置亮度为 70%
        button.textContent = 'Lighten'; // 按钮变为 "Lighten"
    } else {
        imageElement.style.filter = 'brightness(100%)'; // 恢复亮度为 100%
        button.textContent = 'Darken'; // 按钮变回 "Darken"
    }
});