# 📋 Meeting Minutes — 회의록 자동 정리 스킬

회의록을 붙여넣거나 파일로 올리면, **누가 / 무엇을 / 언제까지** 해야 하는지 한눈에 보이는 정리본을 만들어주는 Claude Code 스킬입니다.

McKinsey 스타일로: 핵심만, 간결하게, 책임자 명확하게.

---

## ⚡ 설치

### 방법 1 — Claude Code 플러그인으로 설치 (권장)

Claude Code에서 아래 명령어를 실행하세요:

```
/plugin marketplace add InoneSummer/meeting-minutes
/plugin install meeting-minutes@meeting-minutes
```

### 방법 2 — npx로 설치

터미널에서 아래 명령어를 실행하세요:

```bash
npx github:InoneSummer/meeting-minutes
```

---

## ✨ 주요 기능

- 텍스트, PDF, Word 파일 등 어떤 형태의 회의록이든 처리
- 핵심 결정사항 / 액션 아이템 / 미결 이슈 자동 분류
- 액션 아이템에 🔴 High / 🟡 Mid / 🟢 Low 우선순위 자동 부여
- 담당자·기한 미정 항목 명확하게 표시
- 암묵적인 할 일도 맥락에서 추론해 추가 (추론 태그 표시)

---

## 🚀 사용 방법

설치 후 [Claude Code](https://claude.ai/code)에서 아래와 같이 요청하세요:

```
회의록 정리해줘
액션 아이템 뽑아줘
미팅 노트 요약해줘
```

회의록 텍스트를 직접 붙여넣거나 파일을 첨부하면 자동으로 스킬이 활성화됩니다.

---

## 📁 파일 구성

```
├── .claude-plugin/
│   ├── plugin.json               # 플러그인 매니페스트
│   └── marketplace.json          # 마켓플레이스 카탈로그
├── skills/
│   └── meeting-minutes/
│       └── SKILL.md              # 스킬 정의 파일
├── bin/
│   └── install.js                # npx 설치 스크립트
├── meeting-minutes-eval.html     # 스킬 평가 페이지
├── package.json
└── references/
    └── mckinsey_meeting_minutes.pdf  # 디자인 레퍼런스
```

---

## 📄 출력 예시

```
# 📋 회의록 요약
회의명: Q2 마케팅 전략 검토 회의
일시: 2025년 3월 18일 (화) 오후 2시

## ✅ 핵심 결정사항
| # | 결정 내용 |
|---|-----------|
| 1 | SNS 캠페인 채널을 인스타그램 단일로 집중 |

## 🎯 액션 아이템
| 우선순위 | 담당자 | 할 일 | 기한 |
|---------|--------|-------|------|
| 🔴 High | 이서연 | 인플루언서 후보 리스트 작성 | 3/21 |

📌 총 액션 아이템 5개 | 담당자 미정 0개 | 기한 미정 1개
```
