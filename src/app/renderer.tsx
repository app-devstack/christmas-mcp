import { jsxRenderer } from 'hono/jsx-renderer';
import { Link, ViteClient } from 'vite-ssr-components/hono';

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <head>
        <ViteClient />
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <Link href="/src/app/style.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
});
