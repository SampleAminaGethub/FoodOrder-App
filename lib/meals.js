import sql from "better-sqlite3";
import fs from 'node:fs'
import slugify from "slugify";
import xss from "xss";
const db=sql("meals.db")
export  default async function getMeals(){
    await new Promise((resolve)=>setTimeout(resolve,2000))
    // throw new Error("failed to fetch meals")
return db.prepare("select * from meals").all();
}
export  function getMeal(slug){
    return db.prepare("select *from meals where slug = ?").get(slug)
}

export async function saveMeals(meal) {
    // Generate slug dynamically from the title
    const slug = slugify(meal.title, { lower: true });
    meal.slug = slug; // Assign generated slug
  
    // Sanitize the instructions
    const instructions = xss(meal.instructions);
  
    // Handle image upload
    const extension = meal.image.name.split('.').pop();
    const fileName = `${slug}.${extension}`;
    const filePath = `public/images/${fileName}`;
  
    try {
      const stream = fs.createWriteStream(filePath);
      const bufferImage = await meal.image.arrayBuffer();
      stream.write(Buffer.from(bufferImage), (error) => {
        if (error) {
          console.error('Error saving image:', error);
          throw new Error('Failed to save image');
        }
      });
  
      // Update meal object with image path
      meal.image = `/images/${fileName}`;
  
      // Insert into database
      db.prepare(
        `
        INSERT INTO meals (title, summary, image, creator, creator_email, slug, instructions)
        VALUES (@title, @summary, @image, @creator, @creator_email, @slug, @instructions)
        `
      ).run(meal);
    } catch (error) {
      console.error('Database Insert Error:', error);
      throw new Error('Error saving meal to database');
    }
  }