'use server';

/**
 * @fileOverview A flow for providing interactive hints for quiz questions.
 *
 * - getHint - A function that generates hints based on the question and student performance.
 * - InteractiveHintInput - The input type for the getHint function.
 * - InteractiveHintOutput - The return type for the getHint function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InteractiveHintInputSchema = z.object({
  question: z.string().describe('The quiz question.'),
  studentPerformance: z
    .string()
    .describe(
      'A description of the student performance on this question, including previous attempts and correctness.'
    ),
  hintLevel: z
    .number()
    .describe(
      'The level of hint requested, with 1 being the least helpful and higher levels providing more specific guidance.'
    ),
});
export type InteractiveHintInput = z.infer<typeof InteractiveHintInputSchema>;

const InteractiveHintOutputSchema = z.object({
  hint: z.string().describe('The generated hint for the quiz question.'),
});
export type InteractiveHintOutput = z.infer<typeof InteractiveHintOutputSchema>;

export async function getHint(input: InteractiveHintInput): Promise<InteractiveHintOutput> {
  return interactiveHintFlow(input);
}

const hintPrompt = ai.definePrompt({
  name: 'hintPrompt',
  input: {schema: InteractiveHintInputSchema},
  output: {schema: InteractiveHintOutputSchema},
  prompt: `You are an AI assistant designed to provide hints for quiz questions.

  The quiz question is: {{{question}}}

  Student Performance: {{{studentPerformance}}}

  Provide a hint at level {{{hintLevel}}}. The higher the hint level, the more specific and helpful the hint should be.
  Do not give away the answer, but nudge the student in the correct direction based on their performance and the question.
  The hint should be concise and easy to understand.
  `,
});

const interactiveHintFlow = ai.defineFlow(
  {
    name: 'interactiveHintFlow',
    inputSchema: InteractiveHintInputSchema,
    outputSchema: InteractiveHintOutputSchema,
  },
  async input => {
    const {output} = await hintPrompt(input);
    return output!;
  }
);
