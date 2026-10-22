# 장르 대분류와 그래프 참고안

2026-10-06 진행 갱신: Every Noise 원본 전체 목록을 data/every-noise-genres.json에 확보했다. 현재 탐색 범위는 모든 대분류이며 GENRE_REVIEW.md에서 원본과 대조한 후보를 확인한다. 본문 중 원본 미확보·6개 제한과 관련된 설명은 초기 작성 시점의 기록이다. 개별 장르의 전체 계열 매핑과 그래프 UI는 아직 미완료다.

작성일: 2026-10-06

## 목적과 읽은 자료

Every Noise at Once의 장르를 필요한 범위만 선택하고 그래프로 탐색한다. 동시에 장르별 코드 진행·보이싱·성부 이동을 비교하는 학습에 사용한다.

읽은 자료: 같은 프로젝트의 「공유 이슈 이어가기」 세션 및 해당 세션의 사용자 첨부 원문. 주요 관심사는 City Pop, 70~80s Soul/R&B, 90s R&B, AOR, Sophisti-pop, Jazz-Funk, Neo Soul의 화성 비교다.

이 문서는 프로젝트용 편집 분류 초안이다. Every Noise의 공식 계층이나 전체 장르 매핑이 아니다. 원본 전체 목록은 아직 확보하지 않았다. 아래 하위 장르는 출발점 예시이며, 원본 이름과 일치하는지는 수집 후 확인한다.

## 대분류: 16개 음악 계열

| ID | 대분류 | 초기 하위 장르 예시 | 분류 경계 |
|---|---|---|---|
| pop | Pop | City Pop, Sophisti-pop, Synthpop, Dance Pop, Indie Pop, Art Pop, Baroque Pop | 멜로디·노래 중심의 팝 계열. 지역 팝은 지역 태그와 함께 관리 |
| rock | Rock | Classic Rock, Alternative Rock, Indie Rock, Progressive Rock, Post-rock, Psychedelic Rock, Soft Rock, AOR | AOR은 문맥에 따라 뜻이 달라 여기서는 Adult-oriented Rock/West Coast 성향을 대상으로 함 |
| metal | Metal | Heavy Metal, Thrash Metal, Death Metal, Black Metal, Doom Metal, Progressive Metal, Metalcore | Metalcore 등은 다른 계열 연결도 허용 |
| punk | Punk / Hardcore | Punk Rock, Hardcore Punk, Post-hardcore, Pop Punk, Skate Punk, Emo | Emo의 실제 하위 계열에 따라 Rock과 교차 연결 |
| rnb-soul | R&B / Soul | Classic R&B, Motown 계열 Soul, Southern Soul, Contemporary R&B, New Jack Swing, Neo Soul, Alternative R&B | 70~80s·90s는 시대 태그와 학습용 묶음으로 관리 |
| funk-disco | Funk / Disco | Funk, P-Funk, Boogie, Disco, Nu Disco, Jazz-Funk | Jazz-Funk는 Jazz에도 연결 |
| hiphop | Hip-hop / Rap | Boom Bap, East Coast Hip-hop, West Coast Hip-hop, Southern Hip-hop, Trap, Drill, Jazz Rap, Alternative Hip-hop | 지역·시대와 스타일을 분리해 저장 |
| electronic | Electronic / Dance | House, Techno, Trance, Drum and Bass, Jungle, Dubstep, UK Garage, Breakbeat, IDM, Downtempo, Trip-hop | Ambient 계열과 교차 연결 가능. 전자 악기 사용만으로 이 계열에 넣지 않음 |
| jazz | Jazz | Swing, Bebop, Hard Bop, Cool Jazz, Modal Jazz, Free Jazz, Jazz Fusion, Smooth Jazz, Vocal Jazz, Latin Jazz | 화성 기법의 공통점만으로 다른 장르를 Jazz 하위에 넣지 않음 |
| blues | Blues | Delta Blues, Chicago Blues, Electric Blues, Country Blues, Contemporary Blues, Blues Rock | Blues Rock은 Rock에도 연결 |
| folk | Folk / Acoustic | Traditional Folk, Contemporary Folk, Folk Rock, Indie Folk, Singer-songwriter | Acoustic·Singer-songwriter는 연주/작가 특성 태그도 병행 |
| country | Country / Americana | Traditional Country, Honky-tonk, Bluegrass, Country Pop, Country Rock, Alt-country, Americana | Americana는 Folk·Blues와의 연결 허용 |
| reggae | Reggae / Ska / Dub | Ska, Rocksteady, Roots Reggae, Dub, Dancehall, Reggae Fusion | Dub Techno처럼 다른 계열과 결합한 장르는 복수 연결 |
| latin | Latin & Caribbean 계열 | Salsa, Son Cubano, Bachata, Merengue, Cumbia, Samba, Bossa Nova, Tango, Reggaeton, Soca | 탐색 편의를 위한 묶음. 서로 다른 문화권을 하나의 음악적 계보로 간주하지 않음 |
| classical | Classical / Art Music | Baroque, Classical-era, Romantic, Contemporary Classical, Chamber Music, Opera, Minimalism, Electroacoustic | Classical 대분류와 Classical-era 시대 구분을 구별 |
| ambient-experimental | Ambient / Experimental | Ambient, Drone, Dark Ambient, Noise, Musique concrète, Sound Art | 실험적이라는 이유만으로 모든 Experimental Rock/Jazz를 이곳으로 이동하지 않음 |

## 대분류 밖의 필터와 보조 묶음

- 지역·언어·문화권: Korean, Japanese, Brazilian, Arabic 등. 각 문화권의 독립된 전통 장르는 고유 노드를 유지하고 문화권별 탐색 묶음으로 제공한다. 어디에도 맞지 않는 장르를 Latin이나 Folk에 강제로 넣지 않는다.
- 시대: 1960s, 1970s, 1980s, 1990s 등. `90s R&B`는 R&B 노드들을 시대 조건으로 선택하는 학습용 묶음이다.
- 용도·형식: Film Score, Game Music, Musical, Children's Music, Meditation 등. 음악 스타일과 함께 기록한다.
- 종교·전통: Gospel, Worship, Devotional 등. Gospel 자체의 장르 노드는 보존하며, 종교적 용도 태그만으로 대체하지 않는다. 필요하면 독립 탐색 묶음으로 펼친다.
- 제작·미학: Lo-fi, Acoustic, Instrumental, Indie 등. 원본에 독립 장르명이 있다면 보존하고 태그도 부여한다.
- 미분류 / 검토 필요: 소속을 판단할 근거가 부족할 때 사용한다. 사용자 선택 목록에서 누락시키지 않는다.

16개는 초기 화면용 계열이다. 지역 전통 등 전체 데이터에서 빠지는 계열이 확인되면 독립 대분류를 추가한다. 전 장르를 이 16개에 강제로 맞추는 규칙은 아니다.

## 이 프로젝트에서 먼저 선택할 범위

1. Pop: City Pop, Sophisti-pop.
2. R&B / Soul: 70~80s의 재즈·소울 성향 곡 묶음, 90s의 가스펠 성향 R&B 발라드 묶음, Neo Soul, Contemporary R&B, Alternative R&B.
3. Rock: AOR, Soft Rock, West Coast 성향 곡 묶음.
4. Jazz: Jazz Fusion, Smooth Jazz, Jazz-Funk의 교차 연결.
5. Funk / Disco: Funk, Jazz-Funk, Boogie, Disco.

City Pop의 주 탐색 계열은 Pop으로 둔다. R&B/Soul, Funk/Disco, Jazz, Rock과의 연관성은 별도 연결로 기록한다. 이 연결은 전체 장르의 역사적 영향 관계를 확정한 것이 아니며, 비교 대상 곡과 근거를 추가해 검토한다.

## 코드·화성 비교 축

장르별 고정 난이도 순위를 만들지 않는다. 곡·구간·편곡·연주 예시마다 다음 정보를 기록한다.

| 비교 축 | 기록할 내용 |
|---|---|
| 조성과 해결 | 장조/단조/모달/모호함, 종지 위치와 강도 |
| 기능화성 | ii–V–I, 세컨더리 도미넌트, 일시적 으뜸화 |
| 화음 색채 | 7th·9th·11th·13th, sus, altered tension |
| 비다이어토닉 재료 | 차용화음, 경과화음, 반음 진행, 평행화음 |
| 화성 리듬 | 마디당 코드 변화 수, 유지 시간, 루프 길이 |
| 베이스 이동 | 순차 진행, 페달, 전위, 분수 코드 |
| 보이싱·성부 이동 | 공통음, 반음/온음 이동, 음역, 성부 수 |
| 실제 연주 난이도 | 피아노 양손 배치, 기타 운지·포지션 이동 |

원문 중 단정적 표현은 다음처럼 보정한다: City Pop도 보이싱을 중요하게 사용하며 R&B도 기능화성을 사용할 수 있다. Neo Soul이 항상 더 어렵거나 Alternative R&B가 항상 종지를 피하는 것은 아니다. 장르 판별을 코드 진행만으로 하지 않는다.

기존 세션의 표기 보정도 유지한다: G/F의 베이스는 항상 F다. A단조의 기본 iiø–V–i 예시는 Bm7♭5–E7–Am이며, Bm7을 쓰면 F♯의 색채를 별도로 설명한다. 창작 비교 예시를 실제 곡 채보처럼 제시하지 않는다.

## 그래프 규칙

- 노드 종류: 음악 계열, 장르, 학습용 선택 묶음. 곡·코드 진행은 후속 단계에서 별도 노드로 확장한다.
- `member_of`: 프로젝트 탐색 계열 소속. 고유 장르의 엄밀한 상하 관계와 구별한다.
- `subgenre_of`: 근거가 확인된 하위 장르 관계만 사용한다.
- `related_to`: 교차 장르·비교 관계. 방향 없는 관계다.
- `influenced_by`: 출처가 확인된 영향 관계. 단순한 유사성에서 추론하지 않는다.
- `harmonically_similar`: 실제 비교 예시를 근거로 한 화성 유사성. 장르 전체의 동등성을 뜻하지 않는다.
- 각 연결에 근거, 검토 상태를 기록한다. Every Noise 지도상의 가까운 위치만으로 부모 관계를 만들지 않는다.
- 초기 화면에는 대분류만 표시하고, 클릭하면 하위 노드를 펼친다. 사용자가 고른 노드만 보는 화면을 제공한다.
- 대분류 전체 선택, 개별 선택/제외, 검색, 선택 저장/불러오기를 제공한다. 전체 선택 후 개별 제외를 우선 적용한다.
- 복수 소속 장르는 동일 ID를 공유해 한 노드로 표시한다. 저장 목록에는 화면 좌표나 표시 이름보다 안정적인 ID를 사용한다.

## 다음 세션에서 이어갈 작업

이 문서를 먼저 읽는다. 원본 장르 목록을 확보하여 원본 이름·URL·ID를 보존하고, 각 장르에 탐색 계열·태그·검토 상태를 매핑한다. 자동 분류와 사용자가 수정한 값을 구분하여 사용자 수정을 우선한다. 우선 선택 범위로 그래프를 검증한 뒤 전체 범위로 확장한다.

완료 범위: 참고 대화 검토, 대분류 초안, 초기 선택 범위, 그래프와 화성 비교 규칙 정리.
미완료 범위: Every Noise 전체 수집 및 개별 장르 매핑, 실제 그래프 UI 구현.
