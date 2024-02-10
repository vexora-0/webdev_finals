console.log("connected");

        let post_btn = document.querySelector("#post-btn")
        
        post_btn.addEventListener('click',(e)=>{
            let posts_box = document.querySelector(".posts");
            let main_post = document.createElement('div');
            let textarea = document.getElementById('post-area');
            let text = textarea.value;
            main_post.innerHTML = `<div class="main-post">
            <div class="poster">
                <div class="prof-img">
                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="#">
                </div>
                <div class="post-right">    
                    <div class="post-ofright">
                        <h4>Name</h4>
                        <h5>@user</h5>
                        <div class="post-right-btns">
                            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="#">
                            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="#">
                        </div>
                    </div>
                    
                    <div class="post-txt-area">
                        <textarea name="post" id="post-area-text" cols="30" rows="10" style="resize: none;">${text}</textarea>
                    </div>
                    
                    <div class="like-cmnt-btns">
                        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="#">
                        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="#">
                    </div>
                </div>
            </div>
            
            <div class="comment-post">
                <div class="prof-img">
                        <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="#">
                    </div>
                    <div class="post-right">    
                        <div class="post-ofright">
                            <h4>Name</h4>
                            <h5>@user</h5>
                            <div class="post-right-btns">
                                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="#">
                                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="#">
                            </div>
                        </div>
                    
                        <div class="post-txt-area">
                            <textarea name="post" id="post-area-text" cols="30" rows="10" style="resize: none;"></textarea>
                        </div>
                    
                        <div class="like-cmnt-btns">
                            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="#">
                        </div>
                    </div>
                </div>
            </div>`
            posts_box.appendChild(main_post);
        })
        let post_area = document.querySelector("#post-area");
        console.log(post_area.getAttribute['value'])
