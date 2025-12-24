import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPTransport } from '@hono/mcp';
import { Hono } from 'hono';
import { MCP_SERVER_CONFIG } from '@/constants/mpc.const';
import tools from '@/tools';
import prompts from '@/prompts';

// Honoアプリケーションの初期化
const app = new Hono();

// MCPサーバーインスタンスの作成
const mcpServer = new McpServer(MCP_SERVER_CONFIG);

// トランスポートの初期化
const transport = new StreamableHTTPTransport();

// ツールの登録
for (const tool of tools) {
  mcpServer.registerTool(tool.name, tool.config, tool.cb);
}

// プロンプトの登録
for (const prompt of prompts) {
  mcpServer.registerPrompt(prompt.name, prompt.config, prompt.cb);
}

// ヘルスチェックエンドポイント
app.get('/', (c) => {
  return c.json({
    status: 'ok',
    name: 'Cake Safety Calculator MCP Server',
    version: '1.0.0',
    endpoints: {
      mcp: '/mcp',
      health: '/',
    },
  });
});

// MCPエンドポイントの設定
app.all('/', async (c) => {
  if (!mcpServer.isConnected()) {
    await mcpServer.connect(transport);
  }
  return transport.handleRequest(c);
});

export default app;
