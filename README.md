# Logos Cloud

`www.logoscloud.com`에서 사용할 기업 로고/브랜드 디자인 스튜디오 홈페이지입니다.

## 구성

- 기업용 첫 화면
- 서비스 소개
- 브랜드 시스템 안내
- 제작 프로세스
- 패키지 안내
- 문의 영역

## 추천 무료 구성

- 웹사이트: Next.js 정적 사이트
- 배포: GitHub Pages
- 도메인: `www.logoscloud.com`

## 로컬 실행

```bash
pnpm install
pnpm dev
```

## GitHub Pages 배포

이 저장소는 `main` 브랜치에 push되면 GitHub Actions가 Next.js 정적 사이트를 빌드해서 GitHub Pages에 배포합니다.

GitHub 저장소에서 한 번만 설정하세요.

1. Repository Settings > Pages로 이동합니다.
2. Build and deployment Source를 `GitHub Actions`로 선택합니다.
3. Custom domain에 `www.logoscloud.com`을 입력하고 저장합니다.
4. HTTPS 인증서 발급이 끝나면 Enforce HTTPS를 켭니다.

Whois DNS는 아래처럼 설정합니다.

| 이름 | 유형 | 값 |
| --- | --- | --- |
| `@` | `A` | `185.199.108.153` |
| `@` | `A` | `185.199.109.153` |
| `@` | `A` | `185.199.110.153` |
| `@` | `A` | `185.199.111.153` |
| `www` | `CNAME` | `tommypagychoi.github.io` |

## 다음 개선 후보

- 실제 이메일/카카오톡 문의 링크 연결
- 실제 포트폴리오 이미지 추가
- 가격표 확정
- 검색 노출용 파비콘 및 회사 정보 보강
