function enlargeImage(imgElement) {
    // 获取模态框和放大的图片元素
    var modal = document.getElementById('enlargedImageModal');
    var enlargedImage = document.getElementById('enlargedImage');
    
    // 设置放大后的图片源为点击的图片源
    enlargedImage.src = imgElement.src;
    
    // 显示模态框
    modal.style.visibility = 'visible';
}

function closeImage() {
    var modal = document.getElementById('enlargedImageModal');
    
    // 隐藏模态框
    modal.style.visibility = 'hidden';
}
