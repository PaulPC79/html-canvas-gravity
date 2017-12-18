export default function getRandomColor() {
    let colorArray = ['#665743','#80BDA4','#F6F7BE','#E5AC27','#BF4E28'];
    return colorArray[Math.floor(Math.random() * colorArray.length)];
}
