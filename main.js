Webcam.set({
  width:384,
  height:316,
  image_format:'png',
  png_quality:100,

  constraints:{
      facingMode:"environment"
  }
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

console.log("ml5.version", ml5.version)

classifier=ml5.imageClassifier('Azure', modelLoaded);
classifier=ml5.imageClassifier('mobileNet', modelLoaded);

function modelLoaded() {
  console.log("Model Loaded!")
}

function Indentify() {
  img=document.getElementById('capture_img');
  classifier.classify(img, GotResult);
}

function GotResult(error, result) {
  if (error){
      console.error(error);
  }
  else {
      console.log(result);
      document.getElementById("azure_name").innerHTML = result[0].label;
      document.getElementById("mobile_name").innerHTML = result[0].label;
  }
}