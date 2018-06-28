# 투표 플랫폼 만들기

## 제출 기한

- 과제가 오픈된 시간으로부터 72시간이 주어집니다.

## 제출 방법

- 프로젝트 디렉토리를 전체 압축하여 Slack 개인 메시지로 @ken에게 보내주세요.
- 파일명은 `기수_본인이름_최종과제`형식으로 지어주세요. 예) 3기_허근행_최종과제.zip

## 개발 안내

- 직접 서버를 만들어도 되고, Firebase같은 서비스를 이용해도 됩니다. 다만 데이터의 지속성이 보장되어야 합니다.
- UI와 디자인에 제약을 두지 않습니다. 실제 상용화된 서비스라 생각하고 최대한 상식적인 웹을 구현해주시기 바랍니다.
- React, Express 등 개발 스택은 자유롭게 선택하여 주세요. Express로만 구성하여도 되고, React + Firebase로 하셔도 되고 그 이외의 선택도 무관합니다.

## 스토리

### 1. 메인 페이지 (`/`)

- ✓ 전체 투표 목록(제목, 생성자, 만료 날짜 및 시간, 진행 중 여부)이 보여야 한다.
- ✓ 투표를 클릭할 경우, `/votings/:id`로 이동한다.
- ✓ 투표 생성하기 버튼이 있어야 한다.
- ✓ 생성하기 버튼을 클릭할 경우, `/votings/new`로 이동한다.

### 2. 투표 페이지 (`/votings/:id`)

- ✓ 제목, 생성자, 만료 날짜 및 시간, 진행 중 여부, 투표 선택 사항들이 보여야 한다.
- 투표 목록으로 돌아갈 수 있는 버튼이 있어야 한다.
- 만료된 투표의 경우, 투표 결과를 표기해주어야 한다. (가장 많은 선택을 받은 사항 표기)
- ✓ 진행 중인 투표의 경우, 누구든지 투표에 참여할 수 있어야 한다.
- 만료되지 않은 투표는 투표를 하더라도 결과 확인이 불가능하다.

### 3. 투표 생성 페이지 (`/votings/new`)

- ✓ 투표 제목, 투표 선택 사항, 생성자 이름, 만료 날짜 및 시간을 입력할 수 있어야 한다.
- ✓ 투표 목록으로 돌아갈 수 있는 버튼이 있어야 한다.
- 선택 사항은 반드시 2개 이상이어야 생성이 가능하다.
- ✓ 투표를 생성하게 되면 메인 페이지의 전체 투표 목록에 반영되고 누구나 투표가 가능하다.

### [보너스 - 우선 순위 없음]

- 투표 생성시 비밀번호 입력 기능
- 비밀번호 입력 후, 투표의 수정 및 삭제 기능
- 로그인/로그아웃 기능
- 나의 투표 모아보기 기능
- 진행 중 여부에 따른 투표 목록 필터링 기능

## 채점 기준

**첫째도, 둘째도, 셋째도 요구 기능 구현 여부**
