import { db, Certificate, Users } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Certificate).values([
		{
			name: "Evaluación del aprendizaje de la lectura - Programa de estudio con una duración de 13 horas pedagógicas"
		},
		{
			name: "Diplomado en Evaluación del Espectro Autista - Programa de estudio con una duración de 128 horas pedagógicas"
		},
		{
			name: "Análisis psicopedagógico para el diagnóstico de DEA - Programa de estudio con una duración de 21 horas pedagógicas"
		},
		{
			name: "Evaluación Psicopedagógica de las Matemáticas - Programa de estudio con una duración de 14 horas pedagógicas"
		},
		{
			name: "Estimulación temprana y observación clínica de preescolares - Programa de estudio con una duración de 13 horas pedagógicas"
		},
		{
			name: "Taller de especialización en: Evaluación de las Bases del Pensamiento Lógico a través del TBA-TCG-BPL"
		},
		{
			name: "Taller de especialización en: Psicopedagogía Clínica"
		},
		{
			name: "Evaluación de la Autopercepción del Aprendizaje a través del sistema TBA"
		},
		{
			name: "Curso de Psicopedagogía Clínica - Programa de estudio con una duración de 12 horas"
		},
		{
			name: "Aproximación Clínica para el Diagnóstico de Dificultades Específicas de Aprendizaje (DEA) utilizando el Test Básico de Aprendizaje (TBA)"
		},
		{
			name: "Taller de Introducción a la Psicometría"
		},
		{
			name: "Taller de Evaluación de las Bases del Aprendizaje Matemático (BAM) a través del Test Básico de Aprendizaje (TBA)"
		},
		{
			name: "Diplomado en Evaluación Neuropsicológica - Programa de estudio con una duración de 160 horas pedagógicas"
		},
		
	])

	await db.insert(Users).values([
		{
			email: "moralesallendi.cj@gmail.com"
		}
	])
}
