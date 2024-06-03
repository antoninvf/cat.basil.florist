import '@mantine/core/styles.css';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';

export default function App({ Component, pageProps }: any) {
	return (
		<MantineProvider theme={theme}>
			<Head>
				<title>kitty cats :3</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
				/>
				<meta property="og:title" content="kitty cats :3" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://cat.basil.florist/" />
				<meta
					property="og:image"
					content="https://cat.basil.florist/kitty.gif"
				/>
				<meta
					property="og:description"
					content="website with a collection of thousands of kitty cats!"
				/>
				<meta name="theme-color" content="#FF80FF" />
				<style>
					{`
          body {
            background-image: url('/epiccat.png');
            background-size: 10rem;
            background-position: center;
          }
        `}
				</style>
				<link rel="shortcut icon" href="/favicon.svg" />
			</Head>
			<Component {...pageProps} />
		</MantineProvider>
	);
}
