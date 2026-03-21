# 📘 Lesson 1 – Getting Started with Playwright
## 1. Playwright là gì?

- Framework automation test
- Phát triển bởi Microsoft
- Ra đời: 31/01/2020

### Ưu điểm
- Cross-browser
- Cross-platform
- Auto-waiting, auto-retry
- Report chi tiết
- Codegen

---

## 2. Công cụ cài đặt

### NVM & NodeJS
- NVM = quản lý version NodeJS
- NodeJS = chạy code JS/TS

### Git config
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
git config --global init.defaultBranch main
```

---

## 3. Kết nối với GitHub
- Tạo SSH key
SSH key: gồm cặp khóa 
1. id_rsa: cần giữ bí mật
2. id_rsa.pub: có thể gửi đi cho người khác
→ Mục tiêu: giúp xác thực đăng nhập trở nên dễ hơn
```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
cat ~/.ssh/id_rsa.pub
```
- Dùng để push/pull không cần password

---

