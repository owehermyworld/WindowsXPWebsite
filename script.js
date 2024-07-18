// Your existing script
$("head").ready(function(){
    $("a").click(function(){
        $("*").css("cursor","wait");
        $("#click")[0].play();
    }); 
});

$(window).bind("pageshow", function(event) {
    if (event.originalEvent.persisted) {
        //$("*").css("cursor","auto");
        $("*").css("cursor","default");
    }
});

// Media Player Modal
var modal = document.getElementById("mediaPlayerModal");
var btn = document.getElementById("mediaPlayerBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Picture Viewer Modal
var pictureViewerModal = document.getElementById("pictureViewerModal");
var pictureViewerBtn = document.getElementById("pictureViewerBtn");
var closePictureViewer = document.getElementById("closePictureViewer");

pictureViewerBtn.onclick = function() {
    pictureViewerModal.style.display = "block";
}

closePictureViewer.onclick = function() {
    pictureViewerModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == pictureViewerModal) {
        pictureViewerModal.style.display = "none";
    }
}

// Make the Picture Viewer Modal draggable
var header = document.getElementById("pictureViewerHeader");
var isDragging = false;
var offsetX, offsetY;

header.onmousedown = function(e) {
    isDragging = true;
    offsetX = e.clientX - pictureViewerModal.offsetLeft;
    offsetY = e.clientY - pictureViewerModal.offsetTop;
    document.onmousemove = function(e) {
        if (isDragging) {
            pictureViewerModal.style.left = (e.clientX - offsetX) + 'px';
            pictureViewerModal.style.top = (e.clientY - offsetY) + 'px';
        }
    }
    document.onmouseup = function() {
        isDragging = false;
        document.onmousemove = null;
        document.onmouseup = null;
    }
}
