  console.log('BÀI 1')
    var inputArray = [
        'hung',
        'thanhhoi',
        'dat',
        'thinh'
      ];
      
      var lgth = 0;
      var longest;
      
      for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > lgth) {
          var lgth = inputArray[i].length;
          longest = inputArray[i];
        }
      }


console.log(longest);


console.log('BÀI 2')
function alternatingSums(arr) {
    return arr.reduce((acc, n, i) => {
      acc[i % 2] += n;
      return acc;
    }, [0, 0]);
  }
  
  const nums = [50, 60, 60, 45, 70];
  const result = alternatingSums(nums);
  console.log("result: ", result)



  // BÀI 3

// Phần 1
  const button = document.querySelector('.btn-random');

button.addEventListener('click',changeColor);

function changeColor(){
    const background = document.querySelector('.background');
    const arrayColor = ['red','yellow','pink','gray','black','orange','blue'];
    let random = arrayColor[randomColor(arrayColor)];
    background.style.backgroundColor = random;
    // console.log(random);
}
function randomColor(array){
    return Math.floor(Math.random()*array.length);
}
// Phần 2