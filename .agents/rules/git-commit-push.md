# Git Commit & Push Rules

> Applies to every AI agent (Claude Code, Cursor, Antigravity/Gemini, Windsurf, Copilot…) working in this repo.
> Work on the current feature branch; never push directly to `main`/`prod` unless the user explicitly asks.

## ⛔ Highest Priority Rule — Ask Before Commit/Push

**Tuyệt đối không được tự ý commit và push code. Khi cần thì phải hỏi ý kiến user trước khi làm.**

- Never run `git commit` or `git push` on your own initiative.
- When a commit/push seems needed, stop and ask the user for confirmation first.
- Approval applies only to that specific commit/push — ask again next time.
- All rules below apply only AFTER the user has approved the commit/push.

## Mandatory Git Workflow

When the user has approved a commit/push, the Agent MUST follow these Git rules:

1. **Never push uncommitted changes.**
   - All changes made by the Agent must be committed before pushing.
   - Do not use `git push` with a dirty working tree.

2. **Every push MUST have a meaningful commit.**
   - Before `git push`, run:

     ```bash
     git status
     git diff
     git diff --cached
     ```

   - Review the actual changes.
   - Create a commit describing what was changed and why.

3. **Commit message must be meaningful.**
   - Do NOT use vague messages such as: `update`, `fix`, `changes`, `work`, `test`, `final`, `wip`.
   - The commit message should clearly describe the actual change.

4. **Use Conventional Commits when possible:**

   ```text
   feat: add image moderation workflow
   fix: prevent duplicate property listings
   refactor: simplify image processing service
   perf: optimize property image loading
   docs: update API documentation
   test: add image moderation tests
   chore: update dependencies
   ```

5. **Do not create fake or empty commits.**
   - Never make a commit only to satisfy this rule.
   - The commit must contain the actual relevant changes.

6. **Do not automatically push unrelated changes.**
   - Only commit and push changes that belong to the current task.
   - If unrelated user changes already exist in the working tree, do not overwrite, reset, stash, or commit
     them without permission.
   - Preserve existing user changes.

7. **Before pushing, verify the commit:**

   ```bash
   git status
   git log -1 --oneline
   git show --stat --oneline HEAD
   ```

   Ensure the latest commit contains the intended changes.

8. **Push only after a successful commit.**

   ```bash
   git push
   ```

9. **If the push fails:**
   - Do not create unnecessary additional commits.
   - Inspect the error.
   - Resolve the actual issue.
   - Push again only after the repository is in a valid state.

10. **Never use destructive Git commands unless explicitly authorized.**
    - Do NOT use:

      ```bash
      git reset --hard
      git clean -fd
      git checkout -- .
      git restore .
      ```

    - Do not delete or overwrite user changes.

## Required Final Workflow

For every completed coding task, the Agent should follow this sequence:

```text
Inspect
  ↓
Modify
  ↓
Test
  ↓
Review git diff
  ↓
Report changes & ask the user whether to commit/push
  ↓
(only if approved)
git add <relevant files>
  ↓
git commit -m "<meaningful message>"
  ↓
Verify commit
  ↓
git push
  ↓
Verify push/result
```

## Important

A coding task is complete once the code has been changed, tested where applicable, and reported to the user.
Commit and push happen only when the user approves them — never by default.

Before reporting the task as completed, confirm that:

- Changes were tested where applicable.
- No unrelated user changes were included.
- No existing user work was overwritten or discarded.

If the user approved commit/push, also confirm that:

- Relevant changes were committed.
- The commit message accurately describes the changes.
- The commit was successfully pushed.
