Webcam.set({
    width: 310,
    height: 300,
    image_format: "png",
    png_quality: 100,
    constraints: {
        facingMode: "environment"
    }
});

Webcam.attach("#camera");

function takeSnapshot() {
    Webcam.snap(
        function (data_uri) {
            document.getElementById("picClicked").innerHTML = '<img id="capturedImg" src="' + data_uri + '">';
        }
    );
}

console.log("ml5 version is ", ml5.version);

Classifier = ml5.imageClassifier("MobileNet", modelLoaded);

function modelLoaded() {
    console.log("Model successfuly loaded! Woohoo!!");
}

function identifyImg() {
    img = document.getElementById("capturedImg");
    Classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}