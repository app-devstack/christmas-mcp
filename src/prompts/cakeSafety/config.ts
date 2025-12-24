import { GetPromptResult, GetPromptResultSchema } from '@modelcontextprotocol/sdk/types.js';
import { cakeSafetyPrompt } from './prompts';

function getPromptResult(): GetPromptResult {
  return {
    messages: [
      {
        role: 'assistant',
        content: {
          type: 'text',
          text: cakeSafetyPrompt,
        },
      },
    ],
  };
}

/**
 * ケーキ持ち帰り安全度計算アシスタントプロンプト
 */
export const CALC_CAKE_SAFETY_PROMPT = {
  name: 'cake_assistant',
  config: {
    description: 'ケーキ持ち帰り安全度計算アシスタント',
  },
  cb: getPromptResult,
};
