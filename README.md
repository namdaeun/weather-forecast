# Makers Assignment


## 🚀 실행 방법

```
pnpm dev
```

## 💥 핵심기능
- 이번주 날씨 확인
- air condition(바람세기, 비 올 가능성 등) 확인
- 시간 별 날씨 확인
- 지역 검색을 통한 날씨 확인


## 트러블 슈팅
- [링크](https://achieved-syzygy-75c.notion.site/Trouble-Shooting-19375c7c0fad806eaf25e08b6ccaa0f9?pvs=4)


## 🔗 기술스택

| **category**  |                                                                                                                                                                                                      **stack**                                                                                                                                                                                                       |
| :-----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  Environment  |                                                                                                          ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white) ![VITE](https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=Vite&logoColor=white)                                                                                                          |
|    Package     |                                                   ![Pnpm](https://img.shields.io/badge/Pnpm-F69220?style=for-the-badge&logo=Pnpm&logoColor=white)                                                   |
|    Lint & Formatter     |                                                  ![Biome](https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=Biome&logoColor=white)                    |
|   Language    |                                                                                                                                                ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)                                                                                                                                                 |
|     Style     |                                                                                                                                                       ![Emotion](https://img.shields.io/badge/emotion-DB7093?style=for-the-badge&logo=Emotion&logoColor=white)                                                                                                                                                       |

## 📚 주요 라이브러리

- `@sopt-makers/ui: "^2.8.8"`
- `framer-motion: "^12.2.0"` : tab의 자연스러운 애니메이션 구현
- `vite-plugin-svgr: "^4.3.0"` : svg를 컴포넌트화하여 import하기 위함

## 📂 폴더 구조

```
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src
	|-- 📁 asset
	|	 |-- 📁 img
	|	 |-- 📁 svg
        |            |-- IcSearch.tsx
        |
	|
	|-- 📁 style
	|	 |-- theme.ts
  	|   	 |-- globalStyle.ts
	|	 |-- mediaQuery.ts
  	|
  	|-- 📁 component
 	|   |-- 📁 Input
	|           |-- Input.tsx
	|           |-- Input.style.ts
	|
	|-- 📁 shared
	|	|-- 📁 AirCondition
	|           |-- AirCondition.tsx
	|	    |-- AirCondition.style.ts
	|  
	|-- 📁 type
	|
	|-- 📁 util
	|   |-- formatDate.ts
	|
	|-- 📁 api
	|	|-- fetchForecast.ts
	|       |-- fetchSearchCity.ts
  	|
  	|-- 📁 constant
	|   |-- default.ts
  	|
	|-- index.tsx
	|-- index.style.ts
	|-- main.tsx
	|-- styles.d.ts
	|-- vite-env.d.ts

|-- biome.json
|-- package.json
|-- tsconfig.json
|-- vite.config.ts
|-- .gitignore
|-- index.html

```

