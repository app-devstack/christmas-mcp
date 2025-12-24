import { CakeSafetyParams, CakeSafetyResult } from '@/tools/cakeSafety/types';

/**
 * ケーキの持ち帰り安全度を計算する関数
 * @param params ケーキのパラメータ
 * @returns 安全度の計算結果
 */
export function calculateCakeSafety(params: CakeSafetyParams): CakeSafetyResult {
  const { diameter, height, distance, time, isWholeCake } = params;

  // 高さと直径の比率（不安定度）
  const heightRatio = height / diameter;

  // 移動距離の影響（km または 分から計算）
  const travelDistance = distance ?? (time ? time / 15 : 0); // 時速4km想定

  // 転倒係数の計算
  let tippingFactor = 0;

  // 1. サイズによる不安定度 (0-0.3)
  tippingFactor += Math.min(heightRatio * 0.5, 0.3);

  // 2. 移動距離による影響 (0-0.3)
  tippingFactor += Math.min(travelDistance * 0.05, 0.3);

  // 3. ケーキタイプによる影響 (0-0.2)
  if (!isWholeCake) {
    tippingFactor += 0.2; // カットケーキは不安定
  }

  // 4. サイズが大きすぎる場合の追加ペナルティ (0-0.2)
  if (diameter > 20) {
    tippingFactor += Math.min((diameter - 20) * 0.02, 0.2);
  }

  // 転倒係数を0-1に正規化
  tippingFactor = Math.min(tippingFactor, 1);

  // 安全スコアの計算 (%)
  const safetyScore = Math.max(0, Math.round(100 - tippingFactor * 100));

  // 転倒係数を丸める
  const roundedTippingFactor = Math.round(tippingFactor * 100) / 100;

  // メッセージの生成
  const advice = getEncouragementMessage(safetyScore, roundedTippingFactor);

  return {
    safetyScore,
    tippingFactor: roundedTippingFactor,
    advice,
  };
}

/**
 * スコアをもとに応援メッセージを返す関数
 * @param score 安全スコア (%)
 * @param tippingFactor 転倒係数
 * @returns 応援メッセージ
 */
function getEncouragementMessage(score: number, tippingFactor: number): string {
  const tippingFactMessage = `(ケーキの転倒係数${tippingFactor})`;

  if (score >= 80) {
    return `素晴らしい！安全に持ち帰れる確率は約${score}%です！🎉\n${tippingFactMessage}`;
  } else if (score >= 60) {
    return `良い感じです！安全に持ち帰れる確率は約${score}%です！ 少し注意すれば大丈夫です😊\n${tippingFactMessage}`;
  } else if (score >= 40) {
    return `頑張って！安全に持ち帰れる確率は約${score}%です！ なかなか注意が必要です💪\n${tippingFactMessage}`;
  } else {
    return `大丈夫、あなたならできる！安全に持ち帰れる確率は約${score}%です！ 移動手段を変更するのも一つの手です！お気をつけて！🚖\n${tippingFactMessage}`;
  }
}
