document.getElementById("yesButton").addEventListener("click", function() {
    document.querySelector('.content').style.display = 'none';
    showPageTwo();
});

function showPageTwo() {
    document.body.style.background = '#f0f0f0';
    document.body.innerHTML = `
        <div class="page-two">
            <div class="image-container-page-two">
                <img src="together.jpg" alt="Special Image">
            </div>
            <p class="statement">If I hadn't met you at the college, I wouldn't have gotten to know the most beautiful girl in the world.</p>
        </div>
    `;
    document.querySelector('.page-two').style.display = 'block';
}
