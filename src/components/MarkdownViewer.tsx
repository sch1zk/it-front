import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "@/styles/markdown.css"

const testingContent = `
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

___

---

***

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

> Blockquotes can also be nested...
> > ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

+ Create a list by starting a line with '+', '-', or '*'
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

1. You can use sequential numbers...
1. ...or keep all the numbers as '1.'

\`\`\`
Sample text here...
\`\`\`

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

[link text](http://example.com)

[link with title](http://example.com/ "title text!")

Autoconverted link http://example.com
`;

interface MarkdownViewerProps {
  content?: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ content }) => {

  return (
    <div className="markdown-body">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content ?? testingContent}
      </Markdown>
    </div>
    
  );
}

export default MarkdownViewer;