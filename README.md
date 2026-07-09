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
- 배포: Vercel 또는 Cloudflare Pages
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

## 배포

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
