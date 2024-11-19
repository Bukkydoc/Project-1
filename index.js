const commentForm = document.getElementById('commentForm'); const commentsDiv = document.getElementById('comments'); commentForm.addEventListener('submit', function(event) { event.preventDefault(); const name = document.getElementById('name').value; const comment = document.getElementById('comment').value; if (name && comment) { const commentElement = document.createElement('div'); commentElement.classList.add('comment'); commentElement.innerHTML = <h4>${name}</h4> <p>${comment}</p>; commentsDiv.appendChild(commentElement); // Clear the form commentForm.reset(); } });




window.alert("No plaigarising of any content in this article!");