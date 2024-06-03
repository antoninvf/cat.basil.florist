import {
	Container,
	Text,
	Button,
	Paper,
	Center,
	Title,
	Flex,
} from '@mantine/core';
import classes from './HeroTitle.module.css';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';

export default function CreditsPage() {
	return (
		<>
			<Container size={700} h={'100vh'} mt={'xl'}>
				<Center style={{ flexDirection: 'column' }}>
					<Button
						component={Link}
						href="/"
						size="xl"
						variant="default"
						className={classes.control}
						leftSection={<IconArrowLeft size={35} />}
					>
						Return
					</Button>
					<Paper p={'lg'} mt={'lg'}>
						<Title order={1} mb={'lg'}>
							credits for the pictures {'<3'}
						</Title>
						<Flex direction={'column'}>
							<Link href={'https://www.instagram.com/nikoandkota.toro'}>
								@nikoandkota.toro
							</Link>
							<Link href={'https://www.instagram.com/indoor_outdoor_kat'}>
								@indoor_outdoor_kat
							</Link>

							<Link href={'https://www.instagram.com/goobythekitty'}>
								@goobythekitty
							</Link>
							<Link href={'https://www.instagram.com/dancingcatdisco'}>
								@dancingcatdisco
							</Link>
							<Link href={'https://www.instagram.com/bumblecatt'}>
								@bumblecatt
							</Link>
							<Link href={'https://www.instagram.com/meevin_official'}>
								@meevin_official
							</Link>
							<Link href={'https://www.instagram.com/fatfatmillycat'}>
								@fatfatmillycat
							</Link>
							<Link href={'https://www.instagram.com/jimmyssunshinereport'}>
								@jimmyssunshinereport
							</Link>
							<Link href={'https://www.instagram.com/bobbleheadwobble'}>
								@bobbleheadwobble
							</Link>
							<Link href={'https://www.instagram.com/bigfootjinx'}>
								@bigfootjinx
							</Link>
							<Link href={'https://www.instagram.com/big_old_buns'}>
								@big_old_buns
							</Link>
							<Link href={'https://www.instagram.com/ellie_thetabby'}>
								@ellie_thetabby
							</Link>
							<Link href={'https://www.instagram.com/garlic_neko'}>
								@garlic_neko
							</Link>
							<Link href={'https://www.instagram.com/marigoldkittencrew'}>
								@marigoldkittencrew
							</Link>
							<Link href={'https://www.instagram.com/purrasicduck'}>
								@purrasicduck
							</Link>
							<Link href={'https://www.instagram.com/roro_hachiware'}>
								@roro_hachiware
							</Link>
							<Link href={'https://www.instagram.com/kiji1674'}>@kiji1674</Link>
							<Link href={'https://www.instagram.com/miruku.tabi'}>
								@miruku.tabi
							</Link>
							<Link href={'https://www.instagram.com/simabossneko'}>
								@simabossneko
							</Link>
							<Link href={'https://www.instagram.com/nora.no.ears'}>
								@nora.no.ears
							</Link>
							<Link href={'https://www.instagram.com/tatsuro_yamashita2222'}>
								@tatsuro_yamashita2222
							</Link>
							<Link href={'https://www.instagram.com/charlieandginger'}>
								@charlieandginger
							</Link>
						</Flex>
					</Paper>
				</Center>
				<Text className={classes.description} c="dimmed"></Text>
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
				</Flex>
			</Paper>
		</>
	);
}
