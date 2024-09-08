import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  children: string;
}

export default function Markdown({ children }: MarkdownProps) {
  return (
    <ReactMarkdown
      className="space-y-3"
      components={{
        ul: (props) => <ul className="list-inside list-disc" {...props} />,
        a: (props) => (
          <a className="text-green-500 underline" target="_blank" {...props} />
        ),
        p: (props) => (
          <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />
        ),
        h4: (props) => (
          <h4
            className="scroll-m-20 text-xl font-semibold tracking-tight"
            {...props}
          />
        ),
        h3: (props) => (
          <h3
            className="scroll-m-20 text-2xl font-semibold tracking-tight"
            {...props}
          />
        ),
        h2: (props) => (
          <h2
            className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
            {...props}
          />
        ),
        h1: (props) => (
          <h1
            className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
            {...props}
          />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
