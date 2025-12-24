import { Hono } from 'hono';
import { renderer } from '@/app/renderer';
import mcpApp from '@/app/mcp/router';

const app = new Hono();

app.use(renderer);

app.get('/', (c) => {
  return c.render(<h1>Hello!</h1>);
});

// MCPサーバーのマウント
app.route('/mcp', mcpApp);

export default app;
