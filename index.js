const avatarInput = document.getElementById('FileInput');
const avatarImage = document.getElementById('avatar');     

if (avatarInput && avatarImage) {
    avatarInput.addEventListener('change', function(event) {
        if (event.target.files && event.target.files[0]) {
            const uploadedFile = event.target.files[0];

            const imageUrl = URL.createObjectURL(uploadedFile);
            avatarImage.src = imageUrl;
            console.log("Avatar updated with local URL:", imageUrl);
        }
    });
}
 