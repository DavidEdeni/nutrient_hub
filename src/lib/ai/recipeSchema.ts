import { z } from "zod";

export const ingredientSchema = z.object({
  id: z.string().describe("A unique identifier for the ingredient."),
  amount: z
    .string()
    .describe('The quantity and unit (e.g., "2 cups", "1 large", "1/2 tsp").'),
  name: z
    .string()
    .describe(
      'The name of the ingredient (e.g., "Sweet Potato", "Baby Spinach").',
    ),
  subtext: z
    .string()
    .optional()
    .describe(
      'Optional preparation details (e.g., "Cubed and roasted", "Fresh and washed").',
    ),
});

export const preparationStepSchema = z.object({
  number: z.number().describe("The step number (1, 2, 3...)."),
  title: z
    .string()
    .describe(
      'A short, catchy title for the step (e.g., "Preheat and Roast").',
    ),
  description: z.string().describe("Detailed instructions for the step."),
});

export const recipeSchema = z.object({
  title: z.string().describe("A descriptive, appetizing title for the recipe."),
  time: z
    .string()
    .describe('Estimated total time in minutes (e.g., "35 mins", "1 hour").'),
  calories: z
    .string()
    .describe('Estimated calories per serving (e.g., "450 kcal").'),
  type: z
    .string()
    .describe(
      'The meal type (e.g., "Lunch & Bowls", "Dinner", "Smoothie Bowl").',
    ),
  dietaryTags: z
    .array(z.string())
    .describe(
      'An array of dietary tags (e.g., ["Vegan", "Gluten-Free", "High Fiber"]). Maximum 3 tags.',
    ),
  servings: z.string().describe('Number of servings (e.g., "2 Servings").'),
  ingredients: z
    .array(ingredientSchema)
    .describe("The list of ingredients required."),
  steps: z
    .array(preparationStepSchema)
    .describe("The step-by-step preparation instructions."),
  proTip: z.string().describe("A helpful chef tip or serving suggestion."),
  nutrition: z
    .object({
      protein: z.string().describe('Protein amount in grams (e.g., "18g").'),
      carbs: z
        .string()
        .describe('Carbohydrates amount in grams (e.g., "52g").'),
      fats: z.string().describe('Fats amount in grams (e.g., "22g").'),
      fiber: z.string().describe('Fiber amount in grams (e.g., "12g").'),
      vitamins: z
        .array(
          z.object({
            name: z
              .string()
              .describe(
                'Name of the vitamin or mineral (e.g., "Vitamin A", "Iron").',
              ),
            dailyValue: z
              .string()
              .describe(
                'Percentage of daily value (e.g., "120% DV", "25% DV").',
              ),
          }),
        )
        .length(4)
        .describe("Exactly 4 highlight vitamins/minerals."),
    })
    .describe("Estimated nutritional breakdown per serving."),
  imagePrompt: z
    .string()
    .describe(
      "A highly detailed prompt for an image generation AI model to visualize this exact recipe.",
    ),
});

export type GeneratedRecipe = z.infer<typeof recipeSchema>;
