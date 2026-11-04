// app.js : 영화 배열을 다루는 함수 6개 / 홍길동(학번) / 10주차

// average : 영화 배열 ⇒ 평균 평점(숫자)
function average(list) {
    let sum = 0;
    for (const m of list) {
    sum += m.rating;
    }
    return sum / list.length;
}
console.log("평균:", average(movies));
    

const best = (list) => {
    let top = list[0]
    for(const i of list){
        if(i.rating > top.rating){
            top = i;
        }
    }
    return top.title;
}
console.log("최고:", best(movies));


const filterByRating = (list, min) => {
    let cnt = 0;
    for(const i of list){
        if(i.rating > min){
            cnt++;
        }
    }
    return cnt;
}
console.log("8점 이상:", filterByRating(movies, 8) + "편");


const sortByRating = (list) => {
    let tmp = 0;
    let arr = [];

    for(let i = 0; i < list.length; i++){
        arr[i] = list[i];
    }
    
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i].rating < arr[j].rating){
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }

    return arr;
}
const sorted = sortByRating(movies)
console.log("정렬 2위:", sorted[1].title, "/ 원본 2번:", movies[1].title); // 원본 1번이 평점 1등이라 2등을 비교함


const yearsSince = (dateStr) => {

    let now_year = 2026;
    let last_year = dateStr.slice(0,4);
    last_year = parseInt(last_year);
    return now_year - last_year
    
}
console.log(yearsSince(movies[0].date) + "년 전 개봉");

const posterUrl = (path, size)=>{
    return `https://image.tmdb.org/t/p/${size}/${path}`;
}

console.log(posterUrl(movies[0].poster, "w342"));


document.title = "내 영화 " + movies.length + "편";
console.table(sortByRating(movies));

document.getElementById("out").textContent = "평균 " + average(movies).toFixed(1) + "점, 최고 " + best(movies)