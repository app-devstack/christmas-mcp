/**
 * HomeHeader - ホーム用ヘッダーコンポーネント
 * タイトルと説明文を中央揃えで表示
 */
export function HomeHeader({ title, description }: { title: string; description: string }) {
  return (
    <header className="text-center mb-12 pt-8">
      <h1 className="py-1 relative text-4xl font-bold text-white mb-4 drop-shadow-lg">
        {title}
        <span className="absolute inset-0 backdrop-blur-lg" />
      </h1>
      <p className="text-green-50 font-medium text-base leading-relaxed max-w-2xl mx-auto whitespace-pre-wrap drop-shadow">
        {description}
      </p>
    </header>
  );
}
