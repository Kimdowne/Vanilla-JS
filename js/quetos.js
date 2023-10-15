const quetes = [
  {
    quete: "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해.",
    author: "-찰리 채플린-",
  },
  {
    quete: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
    author: "-엘버트 하버드-",
  },
  {
    quete: "피할수 없으면 즐겨라.",
    author: "-로버트 엘리엇-",
  },
  {
    quete: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에.",
    author: "-엘사 맥스웰-",
  },
  {
    quete: "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
    author: "-L.론허바드-",
  },
  {
    quete: "모든 인생은 실험이다. 더 많이 실험할수록 더 나아진다.",
    author: "-랄프 왈도 에머슨-",
  },
  {
    quete: "평생 살 것처럼 꿈을 꾸어라. 그리고 내일 죽을 것처럼 오늘을 살아라.",
    author: "-제임스 딘-",
  },
  {
    quete: "시간의 중요성을 이해하고 매순간을 즐겁게 보내고 유용하게 활용하라.",
    author: "-루이사 메이올콧-",
  },
  {
    quete: "스스로가 형편없다고 생각하지 말라. 그래봐야 아무 것도 얻을 것이 없다.",
    author: "-마이크 맥라렌-",
  },
  {
    quete:
      "삶은 소유물이 아니라 순간 순간의 있음이다. 그러나 그 한 때를 최선을 다해 최대한으로 살수 있어야 한다.",
    author: "-법정스님-",
  },
];

const quete = document.querySelector("#quete");

const phrase = document.querySelector("#quete span:first-child");
const author = document.querySelector("#quete span:last-child");

const todaysQuote = quetes[Math.floor(Math.random() * quetes.length)];

phrase.innerText = todaysQuote.quete;
author.innerText = todaysQuote.author;
