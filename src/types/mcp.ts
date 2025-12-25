/**
 * MCPツールの型定義
 */
export interface MCPTool {
  /** ツールの識別名 */
  name: string;
  /** 表示用の名前 */
  title: string;
  /** ツールの説明 */
  description: string;
}

/**
 * MCPサーバー情報の型定義
 */
export interface MCPServerInfo {
  /** サーバー名 */
  name: string;
  /** バージョン */
  version: string;
  /** サーバーの説明 */
  description: string;
}
