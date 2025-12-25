/**
 * ServerBadge - サーバー名表示バッジコンポーネント
 * 右上に配置されるサーバー識別用のバッジ
 */
export function ServerBadge({ serverName }: { serverName: string }) {
  return (
    <div className="absolute top-0 right-0 text-xs text-green-100 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full shadow-lg border border-white/30">
      📡 {serverName}
    </div>
  );
}
