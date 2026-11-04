// script.js : 내 영화 평점 통계(콘솔판) 
// 작성자 : 박현빈(2651028) 
const titles = ["너의 이름은", "어벤져스 엔드게임", "인터스텔라", "매트릭스", "파파로트"]; 
const ratings = [8.492, 8.2, 8.492, 8.261, 7.0]; 
const years = [2016, 2019, 2014, 1999, 2013]; 
let sum = 0; 
for (let i = 0; i < ratings.length; i++) { 
sum = sum + ratings[i]; 
} 
console.log("합계:", sum); 

// 평균
const average = sum/ratings.length;
console.log("평균 :", average)

// 최고 평점
let max = ratings[0];
let maxidx = 0;

for(let i = 1; i<ratings.length; i++){
    if(max < ratings[i]){
        max = ratings[i];
        maxidx = i;
    }
}

console.log(`최고: ${titles[maxidx]} ${max}`);

// 8점 이상 개수

let cnt = 0;

for(let i = 0; i<ratings.length; i++){
    if(ratings[i] >= 8){
        cnt++;
    }   
}

console.log(`8점 이상: ${cnt}편`);

// 등급 라벨

for(let i = 0; i<ratings.length; i++){
    let label;
    if(ratings[i] >= 8.5){
        label = "명작";
    }else if(8.5 > ratings[i] && ratings[i] >= 7){
        label = "추천";
    }else{
        label = "보통";
    }

    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}

const avgText = average.toFixed(1); 
const best = titles[maxidx]; 
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);