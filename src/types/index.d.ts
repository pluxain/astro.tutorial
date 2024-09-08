export type URL = string;

export type MarkdownPostFrontmatter = {
  author: string;
  description: string;
  pubDate: Date;
  title: string;
  image?: {
    url: URL;
    text: string;
  };
  tags?: Array<string>;
};

export type Post = {
  url: URL;
  frontmatter: MarkdownPostFrontmatter;
};
