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
