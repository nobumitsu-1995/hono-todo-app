## 環境構築

1. `.env.sample`ファイルをコピーして`.env`にリネームする。
2. 「ユーザー名」と「パスワード」を任意の文字列に変える。
3. `npm ci`
4. `npx prisma generate`を実行
5. `docker compose build`を実行
6. `docker compose up`を実行
7. `chmod +x ./setup_database.sh`を実行(初回のみ)
8. `./setup_database.sh`を実行
9. localhost:3000 にアクセスして「Hello Hono!」と出れば完了！
10. localhost:5555 にアクセスするとDBのテーブル内を覗けます👀
