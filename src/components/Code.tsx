import hljs from "highlight.js";
import React from "react";

interface CodeProps extends React.HTMLProps<HTMLPreElement> {}

export const Code = ({ children, ...props }: CodeProps) => {
  const highlighted = React.useMemo(() => {
    let value = children as string;
    value = value
      .split(/\r\n|\r|\n/)
      .filter((line) => !!line)
      .join("\n");
    const minWhitespace = Math.min(
      ...value.split(/\r\n|\r|\n/).map((line) => line.search(/\S|$/)),
    );
    value = value
      .split(/\r\n|\r|\n/)
      .map((line) => line.slice(minWhitespace))
      .join("\n");
    return hljs.highlightAuto(value);
  }, [children]);

  return (
    <pre {...props}>
      <code
        className="hljs"
        dangerouslySetInnerHTML={{ __html: highlighted.value }}
      />
    </pre>
  );
};
