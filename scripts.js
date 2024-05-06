// Load existing reviews from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
    var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    renderReviews(reviews);
});

// Event listener for form submission
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var rating = document.getElementById('rating').value;
    var comment = document.getElementById('comment').value;

    // Create new review object
    var newReview = {
        name: name,
        rating: rating,
        comment: comment
    };

    // Load existing reviews from localStorage
    var reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    // Add new review to the array
    reviews.push(newReview);

    // Save updated reviews back to localStorage
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('rating').value = '';
    document.getElementById('comment').value = '';

    // Render reviews
    renderReviews(reviews);
});

// Function to render reviews on the page
function renderReviews(reviews) {
    var reviewsList = document.querySelector('.reviews-list');
    reviewsList.innerHTML = '';
    reviews.forEach(function(review) {
        var reviewItem = document.createElement('div');
        reviewItem.classList.add('review');
        reviewItem.innerHTML = `
            <div class="review-info">
                <h4>${review.name}</h4>
                <div class="rating">${'★'.repeat(review.rating)}</div>
                <p>${review.comment}</p>
            </div>
        `;
        reviewsList.appendChild(reviewItem);
    });
}
