// ケーキ安全度計算のパラメータ型定義
export interface CakeSafetyParams {
  diameter: number; // ケーキの直径 (cm)
  height: number; // ケーキの高さ (cm)
  distance?: number; // 家までの距離 (km)
  time?: number; // 移動時間 (分)
  isWholeCake: boolean; // ホールケーキかどうか
}

// ケーキ安全度計算の結果型定義
export interface CakeSafetyResult {
  safetyScore: number; // 安全スコア (%) 0-100の範囲
  tippingFactor: number; // 転倒係数 (0-1)
  advice: string; // アドバイスメッセージ
}
