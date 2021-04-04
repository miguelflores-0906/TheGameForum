const likeButton = document.querySelector("#like-button");
const dislikeButton = document.querySelector("#dislike-button");
const likes = document.querySelector("#likes");
const replyButton = document.querySelector("#reply-button");
const replyList = document.querySelector("#reply-list");

likeButton.addEventListener("click", addlike);
dislikeButton.addEventListener("click", addDislike);
replyButton.addEventListener("click", addReply);
replyList.addEventListener("click", replyListClick);

function addlike(event)
{
    event.preventDefault();
    likes.innerHTML - likes.innerHTML++;
}

function addDislike(event)
{
    event.preventDefault();
    likes.innerHTML - likes.innerHTML--;
}

function addReply(event)
{
    const replyDiv = document.createElement("div");
    replyDiv.classList.add("reply");

    const newReply = document.createElement("input");
    newReply.classList.add("replyText");
    replyDiv.appendChild(newReply);

    const replyLikeButton = document.createElement("button");
    replyLikeButton.innerHTML = '+';
    replyLikeButton.classList.add("replyLikeButton");
    replyDiv.appendChild(replyLikeButton);

    const replyLikes = document.createElement("p");
    replyLikes.innerHTML = '0';
    replyLikes.classList.add("replyLikes");
    replyDiv.appendChild(replyLikes);

    const replyDislikeButton = document.createElement("button");
    replyDislikeButton.innerHTML = '-';
    replyDislikeButton.classList.add("replyDislikeButton");
    replyDiv.appendChild(replyDislikeButton);

    const deleteReply = document.createElement("button");
    deleteReply.innerHTML = 'delete';
    deleteReply.classList.add("deleteReply");
    replyDiv.appendChild(deleteReply);

    replyList.appendChild(replyDiv);
}

function replyListClick(event)
{
    const item = event.target;
    const parent = item.parentElement;
    var value;
    switch(item.classList[0])
    {
        case "deleteReply":             
            parent.remove();
            break;
        case "replyLikeButton": 
            value = parent.likes.innerHTML;
            value++;
            parent.likes.innerHTML = value;
            break;
        case "replyDislikeButton":
            value = parent.likes.innerHTML;
            value--;
            parent.likes.innerHTML = value;
            break;
    }
}