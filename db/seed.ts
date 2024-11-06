import { db, Certificate } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Certificate).values([
		{
			name: "Evaluación del aprendizaje de la lectura - Programa de estudio con una duración de 13 horas pedagógicas"
		}
	])
}
