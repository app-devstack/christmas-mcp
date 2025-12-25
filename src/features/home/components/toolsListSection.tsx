import type { MCPTool } from '@/types/mcp';

/**
 * ToolsListSection - ツール一覧セクションコンポーネント
 * 提供ツールの一覧を表示するセクション
 */
export function ToolsListSection({ tools }: { tools: MCPTool[] }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2 drop-shadow">
        <span>🛠️</span>
        <span>提供ツール</span>
      </h2>

      <div className="space-y-3">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎂</span>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">{tool.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{tool.description}</p>
                <code className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded">
                  {tool.name}
                </code>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
