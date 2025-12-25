import { MCP_SERVER_CONFIG } from '@/constants/mpc.const';
import { CALC_CAKE_SAFETY } from '@/tools/cakeSafety/register';
import type { MCPTool, MCPServerInfo } from '@/types/mcp';
import tools from '@/tools';

/**
 * MCP（Model Context Protocol）に関する情報定数
 * ビジネスロジック層: UIから独立したデータ定義
 */

/**
 * MCPに関する情報
 */
export const MCP_INFO = {
  /**
   * 本アプリケーションのMCPサーバー情報
   */
  server: MCP_SERVER_CONFIG satisfies MCPServerInfo,

  /**
   * 提供ツール一覧
   */
  tools: tools.map(({ name, config }) => ({
    name: name,
    title: config.title,
    description: config.description,
  })) satisfies MCPTool[],
} as const;
