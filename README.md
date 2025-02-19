다음은 장바구니 어플리케이션 설정과 실행 방법에 대한 가이드입니다. 각 브랜치는 서로 다른 상태 관리 방법을 이해할 수 있도록 구성되었습니다.

---

# 장바구니 어플리케이션

이 프로젝트는 간단한 장바구니 어플리케이션을 통해 다양한 상태 관리 기법을 보여줍니다. 각 브랜치는 서로 다른 상태 관리 방법을 보여줍니다.

## 브랜치와 목적
1. **로컬 스테이트 (useState)** - `useState` 훅을 사용해 로컬 상태로 장바구니를 구현한 예제입니다.
2. **전역 스테이트 (Redux)** - Redux를 활용한 전역 상태 관리 방식을 보여주는 브랜치입니다.
3. **Redux 단계별 구축** - Redux를 하나씩 구축해 나가며 설정 및 사용법을 이해할 수 있도록 구성된 브랜치입니다.

## 시작하기

### 1단계: 리포지토리 클론하기
아래 명령어를 통해 리포지토리를 로컬에 클론합니다:

```bash
git clone <repository-url>
```

### 2단계: 프로젝트 폴더로 이동
클론이 완료되면 프로젝트 폴더로 이동합니다:

```bash
cd <repository-folder>
```

### 3단계: 모든 브랜치 가져오기
모든 브랜치를 가져와 브랜치 간 전환이 가능하도록 설정합니다:

```bash
git fetch --all
```

### 4단계: 의존성 설치
npm을 사용하여 필요한 의존성을 설치합니다:

```bash
npm install
```

### 5단계: 어플리케이션 실행
아래 명령어로 어플리케이션을 실행합니다:

```bash
npm run dev
```

브라우저에서 제공된 localhost 링크를 열어 어플리케이션을 확인할 수 있습니다.

## 브랜치 탐색하기

각 브랜치는 어플리케이션의 다른 버전을 포함하고 있습니다. 아래 명령어로 원하는 브랜치로 전환할 수 있습니다:

```bash
git checkout <branch-name>
```

`<branch-name>`에 탐색하고자 하는 브랜치 이름을 입력하세요 (예: `useState`, `redux-overview`, `redux-step-by-step`).

## 프로젝트 구조

각 브랜치에는 다음과 같은 파일 구조가 포함됩니다:
- **Components**: 장바구니 UI를 위한 재사용 가능한 컴포넌트들
- **상태 관리**: 브랜치에 따라 `useState` 또는 Redux로 상태 관리 구현
- **스토어 구성** (Redux 브랜치): 전역 상태 관리를 위한 설정 파일 및 리듀서

## 추가 참고사항

브랜치를 전환할 때 추가 의존성이 있는 경우 `npm install`을 다시 실행해 주세요. 브랜치를 전환한 후에는 `npm run dev`를 통해 어플리케이션을 재실행하여 변경사항을 적용할 수 있습니다.

즐거운 코딩 되세요!