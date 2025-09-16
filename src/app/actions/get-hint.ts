'use server';

import { getHint } from '@/ai/flows/interactive-hint-system';
import type { InteractiveHintInput } from '@/ai/flows/interactive-hint-system';

export async function getHintAction(input: InteractiveHintInput) {
    try {
        const result = await getHint(input);
        return { hint: result.hint };
    } catch (error) {
        console.error('Error getting hint:', error);
        return { error: 'Sorry, I could not generate a hint right now. Please try again.' };
    }
}
