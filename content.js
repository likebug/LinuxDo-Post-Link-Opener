document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link) return;

  const href = link.getAttribute('href');
  if (!href || href.startsWith('#')) return;

  // 仅处理帖子标题链接（Discourse 帖子链接格式：/t/xxx）
  if (href.match(/^\/t\//)) {
	// 检查是否是当前帖子的楼层跳转
        const currentPath = window.location.pathname.split('/').slice(0, 4).join('/');
        const linkPath = new URL(link.href, window.location.origin).pathname.split('/').slice(0,4).join('/');
            if (currentPath === linkPath) {
            // 同一帖子内的楼层跳转，允许默认行为
            return;
          }    
    e.preventDefault();
    e.stopPropagation();
    chrome.runtime.sendMessage({ action: 'openTab', url: link.href });
    return false;
  }
}, true);
