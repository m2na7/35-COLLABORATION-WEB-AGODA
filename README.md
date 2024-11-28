<div align="center">
<img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" width="200" height="133" alt="Primary Logo">

  # agoda

 『AND SOPT 35기 합동세미나 Mobile Web Team 3』
</div>

## 🌊 agoda
agoda의 주요 기능을 모바일 웹 화면에 최적화된 UI/UX로 구현하여 사용자 경험을 개선합니다.
## 🌊 WEB Developer

| <center> 박채연 </center>| <center>강민하 </center>| <center>이윤지</center>| <center>한수정</center>|
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| <center> <img width="150px" src="https://avatars.githubusercontent.com/u/127743435?v=4" /></center> | <center><img width="150px" src="https://avatars.githubusercontent.com/u/118591632?v=4" /></center> | <center><img width="150px" src="https://avatars.githubusercontent.com/u/90778858?v=4" /></center> | <center><img width="150px" src="https://avatars.githubusercontent.com/u/90364839?v=4" /></center> |
| [@chaeneey](https://github.com/chaeneey) | [@m2na7](https://github.com/m2na7y) | [@Leeyoonji23](https://github.com/Leeyoonji23) | [@hansoojeongsj](https://github.com/hansoojeongsj) |


## 🌊 역할 분담

### 초기 세팅
- vite + eslint + prettier 세팅 **`민하`**
- theme + globalStyle 기본 스타일 세팅 **`채연`**
- router 세팅 **`윤지`**
- 리뷰어 어푸 설정, pr 템플릿, 이슈 템플릿 등 협업 세팅 **`수정`**

### 공통 컴포넌트
- 헤더 **`채연`**
- 버튼 **`수정`**
- 라벨 **`채연`**
- 별점 **`민하`**
- 캐러셀 **`윤지`**

### 페이지
- 홈 화면 **`수정`**
- 검색 뷰 **`채연`**
- 검색결과 리스트 뷰 **`민하`**
- 호텔 상세 뷰 **`윤지`**

### API
- 홈화면 - 베스트여행지(10개) - GET **`수정`**
- 홈화면 - 인기도시(10개) - GET **`수정`**
- 검색뷰 - 도시 리스트 - GET **`채연`**
- 검색결과 리스트뷰 - 호텔 리스트 (시간한정포함) - GET **`민하`**
- 호텔 상세뷰 - 호텔 상세 - GET **`윤지`**
- 호텔 상세뷰 - 호텔하트 등록 - POST **`윤지`**
- 호텔 상세뷰 - 호텔하트 삭제 - DELETE **`윤지`**
- 호텔 상세뷰 - 호텔 방 리스트 - GET **`수정`**

## 🌊 컨벤션 및 브랜치 전략
자세한 컨벤션 및 브랜치 전략(https://chaeneey.notion.site/13cde3f57d0e80fb945bca64cf7ead98)

### 커밋컨벤션

| 커밋 유형  | 의미                                                                                  |
| ---------- | ------------------------------------------------------------------------------------- |
| `init`     | 초기 세팅시에만 사용                             |
| `feat`     | 새로운 기능 추가                             |
| `fix`      | 버그 수정                   |
| `docs`     | 문서 추가, 수정, 삭제                                                          |
| `style`    | 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
| `refactor` | 코드 리팩토링       |
| `test`     | 테스트 코드, 리팩토링 테스트 코드 추가                                                |
| `chore`    | 패키지 매니저 수정, 그 외 기타 수정 ex).gitignore                    |
| `design`   | CSS 등 사용자 UI 디자인 변경                                                          |
| `comment`  | 필요한 주석 추가 및 변경                                                              |
| `deploy`   | 배포 관련 |
| `setting`   | 개발 환경 세팅                                                         |


### 폴더 구조

```plaintext
|-- 📁 node_modules
|-- 📁 public
    |-- 📁 svg
|-- 📁 src
    |-- 📁 asset
	      |-- 📁 svgs
	      |-- 📁 images
    |-- 📁 components
          |-- 📁 Button (예시 컴포넌트)
              |-- Button.tsx
              |-- Button.style.ts
    |-- 📁 pages
   	    |-- 📁onboarding
            |-- 📁components
            |-- 📁types
            |-- 📁hooks
            |-- Onboarding.tsx
            |-- Onboarding.style.ts
   |-- 📁 hooks (커스텀 훅을 담아두는 폴더)
   |-- 📁 styles ( GlobalStyles , theme.ts )
   |-- 📁 utils ( 재사용이 높은 함수모음 폴더 )
       |-- 📁 constants
       |-- 📁 mocks
   |-- 📁 apis
   |-- 📁 types
   |-- 📁 routes
       |-- 📁 routePath
		       |-- index.ts
       |-- homeRoutes.tsx
       |-- adminRoutes.tsx
       |-- index.ts
|-- App.tsx
|-- main.tsx
|-- .eslintrc.json
|-- .gitignore
|-- .prettierrc
|-- README.md
|-- package.json
|-- tsconfig.json
|-- yarn.lock
```


## 🌊 단체 사진
<div align="center">
  <img src="https://github.com/user-attachments/assets/9d81d67b-3cbb-4f9f-b322-9b3600c7d9a7"  width="600" height="800"/>
</div>