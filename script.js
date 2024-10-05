document.addEventListener('DOMContentLoaded', () => {  
    const scrollContainer = document.querySelector('.scroll-container');  
    let scrollLeft = 0;  
    const itemWidth = document.querySelector('.scroll-item').offsetWidth; // �������й���������ͬ  
    const containerWidth = scrollContainer.clientWidth;  
    const totalScroll = itemWidth * document.querySelectorAll('.scroll-item').length - containerWidth; // �����ܹ�������  
    let scrollSpeed = 1; // �����ٶȣ�ÿ���������������  
  
    function scrollImages() {  
        scrollLeft += scrollSpeed;  
        if (scrollLeft >= totalScroll) {  
            scrollLeft = 0; // ������ĩβ�����¿�ʼ  
        }  
        scrollContainer.scrollLeft = scrollLeft;  
        requestAnimationFrame(scrollImages); // ʹ��requestAnimationFrame����ƽ������  
    }  
  
    scrollImages(); // ��ʼ����  
});