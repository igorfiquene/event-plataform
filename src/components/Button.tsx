import { DiscordLogo, Lightning } from "phosphor-react";

interface ButtonProps {
	children: string,
	type: 'discord' | 'fast'
}

export function Button({type, children}: ButtonProps) {
	switch (type) {
		case 'discord':
			return (
			<a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
				<DiscordLogo size={24} />
				{ children }
			</a>
		)

		case 'fast':
			return (
				<a href="" className="p-4 text-sm border-blue-500 border text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
					<Lightning size={24} />
					{ children }
				</a>
			)
	}
}
