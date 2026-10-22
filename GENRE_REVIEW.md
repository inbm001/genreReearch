# 전체 대분류 순회 — 원본 대조 초안

범위: 기존 6개 선택으로 제한하지 않고 전체 대분류를 검토한다. 취사선택은 전체 탐색 이후 진행한다.

원본: https://everynoise.com/engenremap.html
수집일: 2026-10-06. 원본 장르 노드 6,291개. 데이터: data/every-noise-genres.json.

아래는 원본에서 정확한 이름이 확인된 탐색 후보다. 공식 부모·자식 관계나 전체 개별 장르 매핑을 뜻하지 않는다.

| 대분류 | 원본 확인 후보 |
|---|---|
| Pop | pop · city pop · sophisti-pop · synthpop · dance pop · indie pop · art pop |
| Rock | rock · pop rock · soft rock · classic rock · alternative rock · indie rock · progressive rock · post-rock · power pop |
| Metal | metal · death metal · black metal · thrash metal |
| Punk / Hardcore | punk · hardcore punk · pop punk · emo · post-hardcore |
| R&B / Soul | r&b · soul · neo soul · contemporary r&b · alternative r&b · new jack swing · quiet storm |
| Funk / Disco | funk · disco · jazz funk · boogie · nu disco |
| Hip-hop / Rap | hip hop · rap · jazz rap · trap · drill · boom bap · g funk |
| Electronic / Dance | house · techno · trance · drum and bass · jungle · dubstep · uk garage · trip hop |
| Jazz | jazz · bebop · hard bop · cool jazz · jazz fusion · smooth jazz · vocal jazz |
| Blues | blues · delta blues · chicago blues · electric blues · country blues · blues rock |
| Folk / Acoustic | folk · traditional folk · indie folk · folk rock · singer-songwriter |
| Country / Americana | country · bluegrass · country rock · honky tonk |
| Reggae / Ska / Dub | reggae · ska · dub · roots reggae · dancehall · rocksteady |
| Latin / Caribbean | salsa · bachata · merengue · cumbia · samba · bossa nova · tango · reggaeton · soca |
| Classical / Art Music | classical · baroque · early music · contemporary classical · opera · minimalism |
| Ambient / Experimental | ambient · drone · dark ambient · noise · experimental · musique concrete |

## 누락 방지

지역 전통·문화권, Gospel/종교 음악, Soundtrack/게임/뮤지컬 등도 별도 탐색 묶음으로 검토한다. 기존 16개로 모든 장르를 강제 분류하지 않는다. 시대 태그와 스타일 노드는 분리한다.

## 완료와 남은 작업

완료: 원본 전체 장르 노드 추출, 중복 장르명 검사, 16개 탐색 계열 후보 이름 원본 대조.
남은 작업: 각 계열의 상세 하위 구조·대표 아티스트 검토, 전체 장르 매핑, 모든 대분류를 포함한 그래프 및 선택 UI.
