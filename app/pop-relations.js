'use strict';
// Inclusion branches are a project reading of the sources, not a single historical family tree.
const popRelations=[
{from:'pop',to:'dance pop',type:'branch',evidence:'Pop의 탐색 갈래로 배치. 댄스 지향 비트와 팝의 노래 구조를 결합한 스타일이며 단일 조상에서의 분화라는 뜻은 아님.',url:'https://en.wikipedia.org/wiki/Dance-pop'},
{from:'pop',to:'synthpop',type:'branch',evidence:'신시사이저를 중심 악기로 사용하는 Pop 갈래로 배치. 역사적 New Wave 맥락은 별도 영향 관계로 표시.',url:'https://en.wikipedia.org/wiki/Synth-pop'},
{from:'pop',to:'bubblegum pop',type:'branch',evidence:'쉽게 기억되는 경쾌한 팝의 스타일을 탐색 갈래로 배치. Bubblegum music과 EN bubblegum pop 명칭을 대응.',url:'https://en.wikipedia.org/wiki/Bubblegum_music'},
{from:'pop',to:'pop rock',type:'fusion',evidence:'팝의 선율·노래 구성과 록의 요소가 결합하는 스타일. pop rock을 Pop 전체와 동일시하지 않음.',url:'https://en.wikipedia.org/wiki/Pop_rock'},
{from:'rock',to:'pop rock',type:'fusion',evidence:'Pop Rock의 록 요소를 별도 원천 노드로 표시. 두 선은 같은 혼합 관계를 구성.',url:'https://en.wikipedia.org/wiki/Pop_rock'},
{from:'disco',to:'dance pop',type:'origin',evidence:'Dance-pop 형성에 대한 Disco의 영향. Disco가 유일한 원천이라는 의미는 아님.',url:'https://en.wikipedia.org/wiki/Dance-pop'},
{from:'synthpop',to:'dance pop',type:'origin',evidence:'Dance-pop이 받은 Synth-pop 영향. 두 장르를 포함 관계로 합치지 않음.',url:'https://en.wikipedia.org/wiki/Dance-pop'},
{from:'new wave',to:'synthpop',type:'origin',evidence:'Synth-pop의 형성·확산과 New Wave 맥락을 연결. 두 이름의 완전한 포함 관계로 간주하지 않음.',url:'https://en.wikipedia.org/wiki/Synth-pop'}
];
