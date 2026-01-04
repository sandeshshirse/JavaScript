let marks = [67,77, 87, 5, 43, 78];
const topper = marks.filter((num)=>{
    return num >= 70;
});

console.log("Toppers list :", topper);