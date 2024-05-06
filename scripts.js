document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var rating = document.getElementById('rating').value;
    var comment = document.getElementById('comment').value;

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('rating').value = '';
    document.getElementById('comment').value = '';

    // Create review element
    var reviewItem = document.createElement('div');
    reviewItem.classList.add('review');
    reviewItem.innerHTML = `
        <div class="review-info">
            <h4>${name}</h4>
            <div class="rating">${'★'.repeat(rating)}</div>
            <p>${comment}</p>
        </div>
    `;

    // Add review to the list
    document.querySelector('.reviews-list').appendChild(reviewItem);
});
