interface RSP {
  ROCK: "0";
  SCISSORS: "-142px";
  PAPER: "-284px";
}

const rsp: RSP = {
  ROCK: "0",
  SCISSORS: "-142px",
  PAPER: "-284px"
};

let imgCoords: RSP[keyof RSP] = "0";

const score = {
  ROCK: 1,
  SCISSORS: 0,
  PAPER: -1
} as const; // 상수화시키기

function computerChoice(imgCoords) {
  return Object.keys(rsp).find(key => rsp[key] === imgCoords);
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
