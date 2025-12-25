import { calculateCakeSafety } from '@/tools/cakeSafety/utils';
import { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { ShapeOutput, ZodRawShapeCompat } from '@modelcontextprotocol/sdk/server/zod-compat.js';

import z from 'zod';

const inputSchema = {
  diameter: z.number().describe('ケーキの直径 (cm)'),
  height: z.number().describe('ケーキの高さ (cm)'),
  distance: z
    .number()
    .optional()
    .describe('家までの距離 (km)。timeとどちらか一方を指定してください。'),
  time: z.number().optional().describe('移動時間 (分)。distanceとどちらか一方を指定してください。'),
  isWholeCake: z
    .boolean()
    .describe('ホールケーキかどうか (true: ホールケーキ, false: カットケーキ)'),
} satisfies ZodRawShapeCompat;

function callCakeSafetyTool(args: ShapeOutput<typeof inputSchema>): CallToolResult {
  const result = calculateCakeSafety(args);

  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(result, null, 2),
      },
    ],
  };
}

/**
 * MCPサーバーに登録するツールの定数
 * ケーキの持ち帰り安全度計算ツール
 */
export const CALC_CAKE_SAFETY = {
  name: 'calculate_cake_safety',
  config: {
    title: 'ケーキ持ち帰り安全度計算',
    description:
      'ケーキの持ち帰り安全度を計算します。ケーキのサイズ、移動距離、タイプから安全スコアと転倒係数を算出し、適切なアドバイスを提供します。',
    inputSchema,
  },
  cb: callCakeSafetyTool,
};
