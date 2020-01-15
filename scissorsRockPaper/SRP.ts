interface RSP {
  ROCK: "0";
  SCISSORS: "-142px";
  PAPER: "-284px";
}

// 1. type alias로 작성시
// type RSP = {
//   ROCK: "0";
//   SCISSORS: "-142px";
//   PAPER: "-284px";
// }

// // 2. 인터페이스의 새로올 인자 틀 만들어 놓기(왠만하면 안쓰는게 좋다)
// interface Example {
//   a: 3,
//   b: 4,
//   [key: string] : number // 나중에 들어올 값이 확실치 않아 틀정도만 정해두고 자 할 때
// }
// const example: Example = {
//   a: 3,
//   b: 4,
//   z: 16
// }

const rsp: RSP = {
  ROCK: "0",
  SCISSORS: "-142px",
  PAPER: "-284px"
};

let imgCoords: RSP[keyof RSP] = "0"; // RSP의 value 사용법(JS의 객체 사용법과 비슷)

const score = {
  ROCK: 1,
  SCISSORS: 0,
  PAPER: -1
} as const; // 상수화시키기

let interval: number;
function intervalMaker() {
  interval = setInterval(function() {
    if (imgCoords === rsp.ROCK) {
      imgCoords = rsp.SCISSORS;
    } else if (imgCoords === rsp.SCISSORS) {
      imgCoords = rsp.PAPER;
    } else {
      imgCoords = rsp.ROCK;
    }
    if (document.querySelector("#computer")) {
      (document.querySelector("#computer") as HTMLElement).style.background =
        "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " +
        imgCoords +
        " 0";
    }
  }, 100);
}

intervalMaker();

function computerChoice(imgCoords: RSP[keyof RSP]) {
  //as 를 이용해 Object.keys(rsp)의 값을 좁혀준다.
  return (Object.keys(rsp) as ["ROCK", "SCISSORS", "PAPER"]).find(
    key => rsp[key] === imgCoords
  );
}

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function(this: HTMLButtonElement) {
    //this 값을 명시적으로 넣어 줘야한다.

    clearInterval(interval); // setInterval 중지
    setTimeout(() => {
      intervalMaker();
    }, 1000);

    const myChoice = this.textContent as keyof RSP; //as 활용하여 값의 범위를 좁혀준다.
    const myScore = score[myChoice];
    const computerScore = score[computerChoice(imgCoords)!]; //느낌표 사용: undefined, null이 아님을 개발자가 보장
    const diff = myScore - computerScore;
    if (diff === 0) {
      console.log("비겼습니다");
    } else if ([-1, 2].includes(diff)) {
      console.log("이겼습니다!!");
    } else {
      console.log("졌습니다 ㅠㅠ.");
    }
  });
});

let start = 3;
const interval2 = setInterval(function() {
  if (start === 0) {
    console.log("종료!!!");
    return clearInterval(interval2);
  }
  console.log(start);
  start -= 1;
}, 1000);
