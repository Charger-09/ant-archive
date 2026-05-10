# Ant Archive 蚂蚁档案馆

这是第一版网页项目，已经放入你生成的 1 张 Hero 图和 5 张蚂蚁卡片图。

## 打开网页

最简单的方法：

1. 打开这个文件夹：

   `C:\Users\充电器\Documents\Codex\2026-05-10\files-mentioned-by-the-user-ant\ant-archive`

2. 双击 `open-ant-archive.cmd`。
3. 等 3 秒左右，浏览器会自动打开网页。
4. 使用完以后，把黑色命令窗口关掉就可以。

如果你想用 VS Code 打开：

1. 打开 VS Code。
2. 选择 `文件` -> `打开文件夹`。
3. 打开项目文件夹。
4. 在 VS Code 里打开终端。
5. 输入：

   ```bash
   npm.cmd run dev
   ```

6. 看到 `http://127.0.0.1:5173` 之后，把这个地址复制到浏览器打开。

如果只是想看成品静态网页，也可以直接打开：

`C:\Users\充电器\Documents\Codex\2026-05-10\files-mentioned-by-the-user-ant\ant-archive\dist\index.html`

## 如果 npm 被 PowerShell 拦截

请使用 `npm.cmd`，不要只输入 `npm`。

例如：

```bash
npm.cmd run dev
```

## 当前版本包含

- 首页 Hero 区
- 五张蚂蚁卡片
- 点击卡片后切换下方详情内容
- 电脑和手机尺寸适配
- 日式简约、自然档案馆方向的视觉样式
