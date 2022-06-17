import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({ 
	colors: {
		brand: {
			100: '#f7f2f1',
			400: '#393957',
			900: '#131321',
		}
	},
	fonts: {
		heading: 'Charis SIL',
		body: 'Zilla Slab'
	}
 });

export default theme;
