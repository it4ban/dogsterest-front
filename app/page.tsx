'use client';

import React from 'react';
import styles from './page.module.scss';

import { ICard } from './page.interface';

import Header from '@/components/Header';
import Card from '@/components/Card';

export default function Home() {
	const [dogs, setDogs] = React.useState<ICard[]>([]);

	React.useEffect(() => {
		async function fethData() {
			await fetch('http://localhost:3000/doggos')
				.then((response) => response.json())
				.then((data) => setDogs(data))
				.catch((err) => console.error('Error:', err));
		}

		fethData();
	}, []);

	return (
		<>
			<Header />
			<main className={styles.mainContainer}>
				<div className={styles.cardContainer}>
					{dogs.map((item) => (
						<Card key={item.id} item={item} />
					))}
				</div>
			</main>
		</>
	);
}
