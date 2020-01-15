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

let imgCoords: RSP[keyof RSP] = "0"; // RSP의 value 사용법

const score = {
  ROCK: 1,
  SCISSORS: 0,
  PAPER: -1
} as const; // 상수화시키기

function computerChoice(imgCoords: RSP[keyof RSP]) {
  return (Object.keys(rsp) as ["ROCK", "SCISSORS", "PAPER"]).find(
    key => rsp[key] === imgCoords
  );
}

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function() {
    const myChoice = this.textContent;
    const myScore = score[myChoice];
    const computer = score[computerChoice(imgCoords)];
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
