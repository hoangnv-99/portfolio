# Hướng dẫn thêm Skill / Rule cho AI agent

## 1. Cấu trúc thư mục

Nội dung skill và rule chỉ có **một bản thật**, nằm trong `.agents/`. Thư mục `.claude/` không chứa file thật. Nó chỉ có hai "lối tắt" (symlink) trỏ sang `.agents/`:

```
.agents/
├── skills/        ← chứa file thật
└── rules/         ← chứa file thật

.claude/
├── skills  ──→  ../.agents/skills   (symlink)
└── rules   ──→  ../.agents/rules    (symlink)
```

- Các agent như Codex, Cursor, Gemini… đọc trực tiếp từ `.agents/`.
- Claude Code đọc từ `.claude/`, nhưng vì `.claude/` trỏ sang `.agents/` nên thực chất vẫn đọc cùng các file đó.

> **Quy tắc duy nhất cần nhớ:** khi thêm skill hoặc rule, chỉ thêm vào `.agents/`. Không cần tạo link cho từng skill.

---

## 2. Cách 1: Thêm skill bằng copy/paste

**Bước 1. Chuẩn bị thư mục skill.** Mỗi skill là một thư mục, bên trong có ít nhất file `SKILL.md`:

```
my-skill/
└── SKILL.md
```

Đầu file `SKILL.md` phải có phần frontmatter như sau:

```md
---
name: my-skill
description: Mô tả ngắn để AI biết khi nào dùng skill này
---
```

**Bước 2. Đặt thư mục vào `.agents/skills/`.** Chọn một trong hai cách:

- **Trong VS Code:** kéo thả thư mục `my-skill` vào `.agents/skills` ở thanh Explorer.
- **Bằng terminal:**
  ```sh
  cd /Volumes/DataSSD/projects/personal/portfolio
  cp -R ~/Downloads/my-skill .agents/skills/
  ```

**Bước 3. Kiểm tra skill đã nằm đúng chỗ:**

```sh
ls .agents/skills/my-skill          # phải thấy file SKILL.md
ls .claude/skills | grep my-skill   # phải thấy my-skill, tức là Claude Code cũng nhìn thấy
```

**Bước 4. Kiểm tra trong Claude Code:** mở một phiên Claude Code **mới**, gõ `/my-skill`. Nếu skill hiện trong danh sách là xong.

---

## 3. Cách 2: Thêm skill bằng lệnh `pnpm dlx skills add`

**Bước 1. Mở terminal ở thư mục dự án:**

```sh
cd /Volumes/DataSSD/projects/personal/portfolio
```

**Bước 2. Chạy lệnh cài**, ví dụ:

```sh
pnpm dlx skills add vercel-labs/agent-skills
```

**Bước 3. Trả lời các câu hỏi của công cụ.** Tên câu hỏi có thể khác nhau tùy phiên bản.

| Câu hỏi | Nên chọn |
|---|---|
| Chọn skill nào | Skill bạn muốn cài |
| Cài cho agent nào | ⚠️ **Bỏ chọn Claude Code.** Chỉ giữ các agent dùng `.agents/skills`, ví dụ Codex, Cursor hoặc "universal" |
| Scope | **Project** (không chọn Global) |
| Symlink hay Copy | Chọn cái nào cũng được |

**Bước 4. Kiểm tra skill có được cài đúng không:**

```sh
ls -la .agents/skills/ | grep <ten-skill>
```

- Dòng bắt đầu bằng `d`, ví dụ `drwxr-xr-x ... ten-skill`: ✅ **đúng**, đây là thư mục thật.
- Dòng bắt đầu bằng `l` và có mũi tên, ví dụ `lrwxr-xr-x ... ten-skill -> ...`: ❌ **sai**, xem phần 4 bên dưới.

**Bước 5. Kiểm tra trong Claude Code:** mở một phiên Claude Code **mới**, gõ `/ten-skill`.

---

## 4. Vì sao phải bỏ chọn Claude Code? Lỡ chọn rồi thì sửa thế nào?

**Lý do:** nếu chọn Claude Code, công cụ sẽ cố tạo thêm link `.claude/skills/ten-skill`. Nhưng `.claude/skills` đã trỏ vào `.agents/skills` rồi, nên link mới thực chất nằm trong `.agents/skills/ten-skill` và **trỏ vào chính nó**. Kết quả là skill bị hỏng, hoặc công cụ báo lỗi `too many levels of symbolic links`.

**Cách sửa:**

```sh
rm .agents/skills/<ten-skill>     # xóa link hỏng (chỉ dùng rm, không cần -rf)
pnpm dlx skills add <repo>        # cài lại, lần này bỏ chọn Claude Code
```

---

## 5. Thêm rule mới

Làm giống như skill: tạo file `.md` trong `.agents/rules/`. Claude Code sẽ tự thấy rule này qua `.claude/rules`.

```sh
touch .agents/rules/ten-rule.md
ls .claude/rules        # phải thấy ten-rule.md
```

---

## 6. Thiết lập lại symlink (clone sang máy khác, symlink bị mất)

Kiểm tra symlink còn hoạt động không:

```sh
ls -la .claude
# Kết quả đúng sẽ có hai dòng:
# rules  -> ../.agents/rules
# skills -> ../.agents/skills
```

Nếu `.claude/skills` hoặc `.claude/rules` bị mất, hoặc đã biến thành thư mục thường, tạo lại symlink bằng:

```sh
cd /Volumes/DataSSD/projects/personal/portfolio
rm -rf .claude/skills .claude/rules      # chỉ chạy khi chắc chắn bên trong không có gì cần giữ
ln -s ../.agents/skills .claude/skills
ln -s ../.agents/rules  .claude/rules
```

**Trên Windows:** cần bật symlink cho Git trước khi clone:

```sh
git config --global core.symlinks true
```

---

## 7. Tóm tắt

> Luôn thêm skill và rule vào **`.agents/`**, không cần làm gì với `.claude/`. Khi cài bằng `pnpm dlx skills add`, nhớ **bỏ chọn Claude Code**.
