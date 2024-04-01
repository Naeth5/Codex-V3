document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    const previewModal = document.getElementById('previewModal');

    // Simplify dynamic radio buttons with a loop directly appending to innerHTML
    const ratingContainer = document.querySelector('.radio-group');
    let radioButtonsHtml = '';
    for (let i = 0; i <= 10; i++) {
        radioButtonsHtml += `<label>${i}<input type="radio" name="rating" value="${i}" ${i === 0 ? 'required' : ''}></label>`;
    }
    ratingContainer.innerHTML = radioButtonsHtml;
    
    // Combine preview and close modal functionality
    document.getElementById('previewBtn').onclick = () => {
        const formData = new FormData(form);
        let previewContent = '<div class="modal-content"><p><strong>Preview:</strong></p>';
        formData.forEach((value, key) => previewContent += `<p><strong>${key}:</strong> ${value}</p>`);
        previewContent += '<button onclick="document.getElementById(\'previewModal\').style.display = \'none\'">Close</button></div>';
        previewModal.innerHTML = previewContent;
        previewModal.style.display = 'block';
    };

    // Handle form submit
    form.onsubmit = (event) => {
        event.preventDefault(); // Prevent actual submit
        // Here you would typically handle form data, e.g., AJAX call
        alert('Form submitted!'); // Placeholder action
        form.style.display = 'none';

        // Create and display the submission message
        const submissionMessage = document.createElement('div');
        submissionMessage.setAttribute('id', 'submissionMessage');
        submissionMessage.innerHTML = "<h2>Form submitted, thank you!</h2>";
        document.body.appendChild(submissionMessage);
    };
});
