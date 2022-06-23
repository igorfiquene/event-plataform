interface ButtonProps {
	href: string,
	children?: React.ReactNode,
	type: 'discord' | 'fast'
}

export function Button({type, children, href}: ButtonProps) {
	switch (type) {
		case 'discord':
			return (
				<a href={href} className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
					{ children }
				</a>
			)
		break;

		case 'fast':
			return (
				<a href={href} className="p-4 text-sm border-blue-500 border text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
					{ children }
				</a>
			)
		break;
	}
}
