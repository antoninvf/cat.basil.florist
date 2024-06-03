import { Container, Text, Button, Group, Paper, Flex } from '@mantine/core';
import classes from './HeroTitle.module.css';
import { useEffect, useState } from 'react';
import { IconBooks, IconCat } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function IndexPage() {
	const [catText, setCatText] = useState('Meow Meow');
	const router = useRouter();

	useEffect(() => {
		const generateCatText = () => {
			const catPuns = [
				'Pawsome',
				'Meowgical',
				'Furrtastic',
				'Purrfect',
				'Whiskerlicious',
				'Clawsome',
				'Meowvelous',
				'Pawsitively',
				'Feline-tastic',
				'Purr-ific',
				'Pawsitively',
				'Meowgnificent',
			];

			const randomPunIndex = Math.floor(Math.random() * catPuns.length);
			const randomPun = catPuns[randomPunIndex];

			const catText = `${randomPun}`;

			setCatText(catText);
		};
		generateCatText();
	}, []);

	return (
		<div className={classes.wrapper}>
			<Container size={700} h={'100vh'} className={classes.inner}>
				<h1 className={classes.title}>
					The{' '}
					<Text
						className={classes.fadeIn}
						component="span"
						variant="gradient"
						inherit
						gradient={{ from: 'pink', to: 'blue' }}
					>
						{catText}
					</Text>
					<br />
					website with a collection of thousands of kitty cats! 😺
				</h1>

				<Text className={classes.description} c="dimmed"></Text>

				<Group className={classes.controls}>
					<Button
						size="xl"
						leftSection={<IconCat size={35} />}
						className={classes.control}
						onClick={() => {
							router.push('https://api.flwn.dev/catcollection/visitrandom');
						}}
						variant="gradient"
						gradient={{ from: 'pink', to: 'blue' }}
					>
						Random Kitty Cat
					</Button>

					<Button
						component="a"
						href="https://cat.basil.florist/browse"
						size="xl"
						variant="default"
						className={classes.control}
						leftSection={<IconBooks size={35} />}
					>
						Browse the library
					</Button>
				</Group>
			</Container>

			<Paper shadow="md" h={'12vh'}>
				<Flex
					h={'100%'}
					w={'100%'}
					direction={'column'}
					justify={'center'}
					align={'center'}
				>
					<Text fw={500}>
						website by{' '}
						<Text
							component="span"
							variant="gradient"
							inherit
							gradient={{ from: 'pink', to: 'blue' }}
						>
							<Link href="https://flwn.dev" target="_blank">
								Flowyan
							</Link>
						</Text>
					</Text>
					<Text fw={500}>
						pictures collected by{' '}
						<Text
							component="span"
							variant="gradient"
							inherit
							gradient={{ from: 'yellow', to: 'pink', deg: 90 }}
						>
							<Link href="https://basil.florist" target="_blank">
								Chutoy
							</Link>
						</Text>
					</Text>
					<Text fw={500}>
						<Text
							component="span"
							variant="gradient"
							inherit
							gradient={{ from: 'purple', to: 'green', deg: 90 }}
						>
							<Link href="/credits">credits for the pictures</Link>
						</Text>
					</Text>
				</Flex>
			</Paper>
		</div>
	);
}
