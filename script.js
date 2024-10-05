document.addEventListener('DOMContentLoaded', () => {  
    const scrollContainer = document.querySelector('.scroll-container');  
    let scrollLeft = 0;  
    const itemWidth = document.querySelector('.scroll-item').offsetWidth; // 假设所有滚动项宽度相同  
    const containerWidth = scrollContainer.clientWidth;  
    const totalScroll = itemWidth * document.querySelectorAll('.scroll-item').length - containerWidth; // 计算总滚动距离  
    let scrollSpeed = 1; // 滚动速度（每秒滚动的像素数）  
  
    function scrollImages() {  
        scrollLeft += scrollSpeed;  
        if (scrollLeft >= totalScroll) {  
            scrollLeft = 0; // 滚动到末尾后重新开始  
        }  
        scrollContainer.scrollLeft = scrollLeft;  
        requestAnimationFrame(scrollImages); // 使用requestAnimationFrame进行平滑滚动  
    }  
  
    scrollImages(); // 开始滚动  
});