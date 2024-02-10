console.log("connected");

let post_btn = document.querySelector("#post-btn")

post_btn.addEventListener('click', (e) => {
    let posts_box = document.querySelector(".posts") 
    let main_post = document.createElement('div');
    main_post.id = 'post-' + new Date().getTime();
    main_post.innerHTML = `<div class="main-post">
    <div class="post-main">
        <div class="prof-img">
            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="#">
        </div>
        <div class="post-right">    
            <div class="post-det">
                <h4>Name</h4>
                <h5>@user</h5>
                <div class="post-right-btns">
                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="#" id="edit-btn">
                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/030/original/delete-color-filled.png?1706888714" alt="#" id="delete-btn">
                </div>
            </div>
            
            <div class="post-txt-area">
                <textarea name="post" id="post-area-text" cols="30" rows="10" disabled="disabled"></textarea>
            </div>
            
            <div class="like-cmnt-btns">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="#" id="comment-btn">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="#" id="like-btn">
            </div>
        </div>
    </div>`
    posts_box.appendChild(main_post);

    let post_area_text = main_post.querySelector('#post-area-text');
    post_area_text.value = document.querySelector('#post-area').value;

    let edit_btn = main_post.querySelector('#edit-btn');
    edit_btn.addEventListener('click', () => {
        editPost(main_post.id);
    });

    let delete_btn = main_post.querySelector('#delete-btn');
    delete_btn.addEventListener('click', () => {
        deletePost(main_post.id);
    });

    let like_btn = main_post.querySelector('#like-btn');
    like_btn.addEventListener('click', () => {
        likePost(main_post.id);
    });

    let comment = main_post.querySelector('#comment-btn');
    comment.addEventListener('click', () => {
        let comment_box = document.createElement('div');
        comment_box.innerHTML = `<div class="comment-box">
        <div class="comment-main">
            <div class="prof-img">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="#">
            </div>
            <div class="post-right">    
                <div class="post-det">
                    <h4>Name</h4>
                    <h5>@user</h5>
                </div>
                <div class="post-txt-area">
                    <textarea name="post" id="post-area-text" cols="15" rows="2"></textarea>
                </div>
            </div>
        </div>
    </div>`
        main_post.appendChild(comment_box);
    }),

    
        
        parent.appendChild(comment_box);

});

function editPost(postId) {
    const post = document.getElementById(postId);

    const postText = post.querySelector('.post-txt-area textarea').value;

    const textarea = document.createElement('textarea');
    textarea.value = postText;

    post.querySelector('.post-txt-area').replaceWith(textarea);

    textarea.focus();

    textarea.addEventListener('blur', () => {

        const updatedText = textarea.value;


        const updatedPostTextarea = document.createElement('div');
        updatedPostTextarea.classList.add('post-txt-area');
        updatedPostTextarea.innerHTML = <textarea name="post" id="post-area-text" cols="30" rows="10" disabled="disabled">${updatedText}</textarea>;


        textarea.replaceWith(updatedPostTextarea);
    });
}

function deletePost(postId) {

    const post = document.getElementById(postId);


    post.remove();
}

function likePost(postId) {
    const post = document.getElementById(postId);
    const likeBtn = post.querySelector('#like-btn');
    
    post.classList.toggle('liked');
    likeBtn.classList.toggle('liked');
}

document.querySelector('#post-area').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.querySelector('#post-btn').click();
    }
});
