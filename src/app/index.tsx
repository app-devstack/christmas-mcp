import { Hono } from 'hono';
import { renderer } from '@/app/renderer';
import mcpApp from '@/app/mcp/router';
import HomePage from '@/features/home/HomePage';

const app = new Hono();

app.use(renderer);

app.get('/', (c) => {
  return c.render(<HomePage />);
});

// MCPサーバーのマウント
app.route('/mcp', mcpApp);

export default app;
