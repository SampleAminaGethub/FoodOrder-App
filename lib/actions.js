'use server';

import { revalidatePath } from 'next/cache';
import { saveMeals } from './meals';
import slugify from 'slugify';
import { redirect } from 'next/dist/server/api-utils';

export async function shareMeals(preveState ,formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
    image: formData.get('image'),
  };
function  isInvalidText(text){
return !text || text.trim()=='';
}
  // Generate slug dynamically
  meal.slug = slugify(meal.title, { lower: true });
if(isInvalidText(meal.title) || isInvalidText(meal.summary) || isInvalidText(meal.creator) ||
isInvalidText(meal.creator_email) || isInvalidText(meal.instructions) || isInvalidText(meal.creator)
|| !meal.creator_email.includes('@') || !meal.image || meal.image==0){
  return {message : 'ivalid input'}
}
  await saveMeals(meal);
  revalidatePath('/meals');
  redirect('/meals')
}