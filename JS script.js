const likeBtn = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');
const mainImg = document.getElementById('main-img');
const totalLikesText = document.getElementById('total-likes-text');

let likes = 0;
let isLiked = false;

function toggleLike() {
    if (!isLiked) {
        likes++;
        isLiked = true;
        likeBtn.classList.add('liked');
    } else {
        likes--;
        isLiked = false;
        likeBtn.classList.remove('liked');
    }

    likeCount.textContent = likes;

    if (likes === 1) {
        totalLikesText.textContent = '1 pessoa';
    } else {
        totalLikesText.textContent = `${likes} pessoas`;
    }
}

likeBtn.addEventListener('click', toggleLike);
mainImg.addEventListener('click', toggleLike);