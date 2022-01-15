// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Classifier Variable
var classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/uAJpSHNN1/';

// Video
var video;
var flippedVideo;
// To store the classification
var label = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(320, 260);
  // Create the video
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}

function classiferHandler(error,results) {
  check=check+1;
  result=results[0].label;

  if (result=='car'&&check==20) {
    audio=new Audio('https://papago.naver.com/apis/tts/c_lt_kyuri_2.1.14_318-nvoice_kyuri_2.1.14_a92f60e87bc4acb6558a15b9b37dff7c-1642228207371')
    audio.play();
    check=0;
  }  else if (result=='trash'&&check==20) {
    audio=new Audio('https://papago.naver.com/apis/tts/c_lt_kyuri_2.1.14_388-nvoice_kyuri_2.1.14_6ac61ccd5fb3e0b85d4dc1af916bbc13-1642228350338')
    audio.play();
    check=0;
  }  else if (result=='red'&&check==20) {
    audio=new Audio('https://papago.naver.com/apis/tts/c_lt_kyuri_2.1.14_256-nvoice_kyuri_2.1.14_09f694b58fb8de93d309b439504e7d5d-1642228410695')
    audio.play();
    check=0;
  }  else if (result=='tree'&&check==20) {
    audio=new Audio('https://papago.naver.com/apis/tts/c_lt_kyuri_2.1.14_221-nvoice_kyuri_2.1.14_f79e5487d8eb3c3eda09691e19b76b38-1642228560045')
    audio.play();
    check=0;
  }  else if (result=='building'&&check==20) {
    audio=new Audio('https://papago.naver.com/apis/tts/c_lt_kyuri_2.1.14_69-nvoice_kyuri_2.1.14_53ead4cadc2182e59bf3764c8c8815b0-1642228597190')
    audio.play();
    check=0;
  }  else if (result=='green'&&check==20) {
    audio=new Audio('https://papago.naver.com/apis/tts/c_lt_kyuri_2.1.14_364-nvoice_kyuri_2.1.14_bda8a1de98ddda34985722fb1c8050da-1642228630824')
    audio.play();
    check=0;
  }  else if (result=='human'&&check==20) {
    audio=new Audio('https://papago.naver.com/apis/tts/c_lt_kyuri_2.1.14_304-nvoice_kyuri_2.1.14_53e353d43cc4a114a13940511b725626-1642228658357')
    audio.play();
    check=0;
  }
 
}
