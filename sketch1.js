let inputBox;
let textToDisplay = '🎀🌷🍥 ';
let slider;
let jumpButton;
let isJumping = false;
let dropdown;

function setup() {    //這是一個設定函數，只會執行一次
  // 產生一個畫布，充滿整個視窗，顏色為#ffeedd
  createCanvas(windowWidth, windowHeight);
  background('#f9bec7');
  
  // 創建輸入框
  inputBox = createInput(textToDisplay);
  inputBox.position(10, 10);
  inputBox.size(300, 80);
  inputBox.input(updateText);

  // 創建滑桿
  slider = createSlider(12, 100, 52.5);
  slider.position(420, 10);
  slider.size(100);

  // 創建按鈕
  jumpButton = createButton('跳動');
  jumpButton.position(600, 10);
  jumpButton.size(100, 40);
  jumpButton.style('font-size', '24px');
  jumpButton.style('background-color', '#ff5c8a');
  jumpButton.style('text-align', 'center');
  jumpButton.style('line-height', '40px'); // 確保文字在按鈕的垂直方向居中
  jumpButton.mousePressed(toggleJumping);

  // 創建下拉選單
  dropdown = createSelect();
  dropdown.position(800, 10);
  dropdown.size(100);
  dropdown.option('love me right');
  dropdown.option('stranger');
  dropdown.changed(handleDropdownChange);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function updateText() {
  textToDisplay = this.value();
}

function toggleJumping() {
  isJumping = !isJumping;
}

function handleDropdownChange() {
  let selectedOption = dropdown.value();
  if (selectedOption === 'love me right') {
    window.open('https://youtu.be/cCV2tgCNGoI?si=-vVEhc8RJe2CbBoD', '_blank');
  } else if (selectedOption === 'stranger') {
    window.open('https://youtu.be/WXKRiAHzvi0?si=UKNGRe1-bvYBxRr0', '_blank');
  }
}

function draw() {
  background('#f9bec7'); // 每一次畫圖之前，先把背景填滿成#ffeedd
  
  // 繪製輸入框
  inputBox.position(10, 10);
  
  // 獲取滑桿的值來設定文字大小
  let textSizeValue = slider.value();
  
  textFont('Georgia'); // 設定字型為Georgia
  textSize(20); // 設定標籤字體大小
  textStyle(NORMAL);   // 設定標籤字體樣式
  textAlign(LEFT, TOP);   // 設定標籤文字對齊方式為左上角
  fill('#274c77');  // 設定標籤文字填滿色
  noStroke();  // 不設定標籤文字外框

  // 繪製標籤
  text('文字大小', 320, 10);
  
  // 設定文字樣式
  textFont('Georgia'); // 設定字型為Georgia
  textSize(textSizeValue); // 設定字體大小為滑桿的值
  textStyle(BOLD);   // 設定字體樣式為
  textAlign(LEFT, TOP);   // 設定文字對齊方式為左上角
  fill('#6096ba');  // 設定文字填滿色為#4cc9f0
  stroke('#998fc7');  // 設定文字外框色
  strokeWeight(1);  // 設定文字外框粗細

  let x = 0; // 文字的x座標
  let y = 100;   // 文字的y座標，避開輸入框

  while (y < height) {  // 當文字的y座標小於畫布的高度時
    x = 0;
    while (x < width) {  // 當文字的x座標小於畫布的寬度時
      let yOffset = isJumping ? random(-5, 5) : 0; // 如果跳動，則隨機偏移y座標
      text(textToDisplay, x, y + yOffset); // 在(x, y + yOffset)的位置畫出文字
      x += textWidth(textToDisplay) + 10;  // 更新x座標，並在文字之間加10的間距
    }
    y += textSizeValue + 10;  // 更新y座標，並在行之間加10的間距
  }
}