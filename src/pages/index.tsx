import { Center, Container, Flex, Heading, Link, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import logo from '../images/logo.png';

const Home: NextPage = () => {
    return (
		<>
			<Head>
				<title>Maria Luiza Coelho | Front End Developer</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			
			<Center flexDirection='column' minH='100vh' bg='brand.900'>
				<Container
					centerContent={ true }
					marginBottom={ 8 }
					bg='brand.400'
					color='brand.100'
					p={ 8 }
					paddingTop={ 400 }
					borderTopLeftRadius={ 300 }
					borderTopRightRadius={ 300 }
					pos='relative'
				>
					<Container pos='absolute' top='20px' left='50%' transform='translate(-50%)'>
						<Image
							src={ logo }
							height='600px'
							width='600px'
							alt='An illustration of flowers and stars'
						/>
					</Container>
					<Heading fontSize='5xl'>Maria Luiza Coelho</Heading>
					<Text fontSize='2xl'>Front End Developer</Text>
					<Text
						fontSize='md'
						textAlign='center'
						marginTop={ 6 }
						marginBottom={ 6 }
					>
						With three years of experience, I am focused in creating beautiful and accessible interfaces. I am passionate about web development and design and am always willing to push myself to create amazing projects. I am 24 and I have a degree in Graphic Expression, which taught me the importance of design, accessibility and usability, all aspects I use on the interfaces I make. I love technology and am always trying to learn and build new things. On my spare time I love reading mystery novels and doing crochet.
					</Text>
					<Text fontSize='lg'>React.js, Next.js, Typescript, GraphQL, Cypress</Text>

					<Flex gap={ 6 } marginTop={ 8 }>
						<Link isExternal={ true } href='https://www.linkedin.com/in/marialuizacoelho/'>
							<BsLinkedin size={ 36 } fill='brand.400'/>
						</Link>
						<Link isExternal={ true } href='https://github.com/comarialuiza'>
							<BsGithub size={ 36 } fill='brand.400'/>
						</Link>
					</Flex>
				</Container>
			</Center>
		</>
    )
};

export default Home;
