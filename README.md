# LogosCloud Weekly

`logoscloud.co.kr`에서 사용할 15명 규모 주간보고 게시판 초안입니다.

## 기능

- 이메일/비밀번호 로그인
- 사용자별 주간보고 작성, 임시 저장, 제출
- 관리자 전체 보고 조회
- 관리자 검토 완료 처리
- Supabase Row Level Security 기반 권한 분리

## 추천 무료 구성

- 웹앱: Next.js
- 인증/DB: Supabase
- 배포: GitHub Pages, Vercel 또는 Cloudflare Pages
- 도메인: `logoscloud.co.kr` DNS에서 배포 서비스로 연결

## Supabase 설정

1. Supabase 프로젝트를 만듭니다.
2. SQL Editor에서 `supabase/schema.sql` 내용을 실행합니다.
3. Authentication > Users에서 약 15명 계정을 생성합니다.
4. 각 사용자 UUID를 복사해서 `profiles` 테이블에 이름, 부서, 권한을 추가합니다.
5. Project Settings > API에서 URL과 anon key를 복사합니다.

## 로컬 실행

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

`.env.local`에는 Supabase 값을 넣습니다.

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## GitHub Pages 배포

이 저장소는 `main` 브랜치에 push되면 GitHub Actions가 Next.js 정적 사이트를 빌드해서 GitHub Pages에 배포합니다.

GitHub 저장소에서 한 번만 설정하세요.

1. Repository Settings > Pages로 이동합니다.
2. Build and deployment Source를 `GitHub Actions`로 선택합니다.
3. Custom domain에 `www.logoscloud.co.kr`을 입력하고 저장합니다.
4. HTTPS 인증서 발급이 끝나면 Enforce HTTPS를 켭니다.

도메인 DNS는 현재 `whoisdomain.kr` 포워딩 IP로 되어 있으므로 아래처럼 바꿔야 합니다.

| 이름 | 유형 | 값 |
| --- | --- | --- |
| `@` | `A` | `185.199.108.153` |
| `@` | `A` | `185.199.109.153` |
| `@` | `A` | `185.199.110.153` |
| `@` | `A` | `185.199.111.153` |
| `www` | `CNAME` | `tommypagychoi.github.io` |

기존 `@`와 `www`의 `118.67.131.217` A 레코드 또는 포워딩 설정은 삭제합니다.

## Vercel 배포

1. GitHub 저장소에 이 폴더를 올립니다.
2. Vercel에서 저장소를 Import합니다.
3. Environment Variables에 `.env.local`과 같은 값을 등록합니다.
4. Vercel Domains에서 `logoscloud.co.kr`을 추가합니다.
5. 도메인 구매처 또는 Cloudflare DNS에 Vercel이 안내하는 레코드를 등록합니다.

## 다음 개선 후보

- 주차별 엑셀 다운로드
- 미제출자 자동 알림
- 첨부파일 업로드
- 관리자 대시보드 필터
- 보고서 댓글/피드백
