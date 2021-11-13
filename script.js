const MarkDown = (text) => {
	const parseList = (text, depth = 0) => {
		const re = new RegExp(
			`(?:\\n)^([ \\t]{${depth * 2},})\\d*([*+-]|\\.)[ \\t]+.*?(\\n\\1\\d*\\2.*?$|\\n*\\1[ \\t]{2,}.*?$|$)+`,
			"gm"
		);
		return text.replace(re, (match, $1, $2) => {
			match = parseList(match, depth + 1);
			match = match.replace(/^[ \t]*([*+-]|\d\.)\s+(.*?)$/gm, `<li>$2</li>`);
			return `<${$2 == "." ? "o" : "u"}l>${match}\n</${$2 == "." ? "o" : "u"}l>`;
		});
	};

	const isHtmlBlock = (text) => {
		const tags = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del";
		const re = new RegExp(`(^<(${tags})|</(${tags})>)`, "gm");
		return text.match(re) || text.match(/<hr>/gm);
	};

	const escapeHtml = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

	const headerId = (text) => escapeHtml(text).toLowerCase().replace(" ", "-");

	return (
		text
			.replace(/\r\n/g, "\n")
			// .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
			// italics, bold, strikethrough
			.replace(/(\*\*|__)(.*?)\1/gm, `<strong>$2</strong>`)
			.replace(/(\*|_)(.*?)\1/gm, `<em>$2</em>`)
			.replace(/(~~)(.*?)\1/gm, `<del>$2</del>`)
			// codeblocks
			.replace(/(`{3,})([\s\S]*?)\1(?!`)/gm, (_, $1, $2) => `<pre><code>${escapeHtml($2)}</code></pre>`)
			// codespans
			.replace(/(`+)(.*?)\1(?!`)/gm, (_, $1, $2) => `<code>${escapeHtml($2)}</code>`)
			// reference images
			.replace(/!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\]/gm, `<img src="$2" alt="$1" />`)
			// inline images
			.replace(
				/!\[(.*?)\]\([ \t]*(\S+?)[ \t]*(?:(['"])(.*?)\3[ \t]*)?\)/gm,
				`<img src="$2" alt="$1" title="$4" />`
			)
			// reference links
			.replace(/\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\]/gm, `<a href="$2">$1</a>`)
			// inline links
			.replace(/\[(.*?)\]\([ \t]*(.*?)(?:(['"])(.*?)\3)?\)/gm, `<a href="$2" title="$4">$1</a>`)
			// auto links
			.replace(/([^"'])<?((https?|ftp):[^'">\s]+)>?([^"'])/gm, `$1<a href="$2">$2</a>$4`)
			// headers with # prefix/suffix
			.replace(
				/^(\#{1,6})[ \t]*(.+?)[ \t]*\1*$/gm,
				(_, $1, $2) => `<h${$1.length} id="${headerId($2)}">${$2}</h${$1.length}>`
			)
			// headers with === underline
			.replace(/^(.+)[ \t]*\n[=]+\s*$/gm, (_, $1) => `<h1 id="${headerId($1)}">${$1}</h1>`)
			// headers with --- underline
			.replace(/^(.+)[ \t]*\n[-]+\s*$/gm, (_, $1) => `<h2 id="${headerId($1)}">${$1}</h2>`)
			// horizontal rules
			.replace(/^([ ]?(\*|-|_)[ ]?){3,}$/gm, `<hr>`)
			// lists
			.replace(/[\s\S]*/, parseList)
			// paragraphs
			.split(/\n{2,}/)
			.map((p) =>
				isHtmlBlock(p) ? p : p.replace(/\n[ \t]*/gm, `<br>`).replace(/^[ \t]*([\s\S]+)$/gm, `<p>$1</p>`)
			)
			.join("\n\n")
	);
};

window.onload = () => {
	document.getElementById("changes").style.whiteSpace = "normal";
	document.getElementById("changes").innerHTML = MarkDown(document.getElementById("changes").innerHTML);
};
