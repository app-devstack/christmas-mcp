/**
 * EndpointInfoCard - エンドポイント情報カードコンポーネント
 * MCPエンドポイントの説明を表示する情報カード
 */
export function EndpointInfoCard() {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 mb-6">
      <div className="flex items-start gap-3">
        <span className="text-xl">🔗</span>
        <div className="flex-1">
          <p className="text-green-50 text-sm leading-relaxed">
            このサーバーの{' '}
            <code className="bg-white/20 px-2 py-0.5 rounded text-green-100 font-mono text-xs">
              /mcp
            </code>{' '}
            エンドポイントがMCPサーバーとして動作しています。
            <br />
            AIアシスタントからこのエンドポイントに接続することで、ツールを利用できます。
          </p>
        </div>
      </div>
    </div>
  );
}
