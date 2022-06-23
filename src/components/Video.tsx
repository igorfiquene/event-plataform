import { DiscordLogo, Lightning } from "phosphor-react";
import { Button } from "./Button"

export function Video() {
	return (
		<div className="flex-1">
			<div className="bg-black flex justify-center">
				<div className="h-full w-full max-w-[1100px] max-h-[60vw] aspect-video"></div>
			</div>

			<div className="p-8 max-w-[1100px] mx-auto">
				<div className="flex items-start gap-16">
					<div className="flex-1">
						<h1 className="text-2xl font-bold ">
							Aula 01 - Abertura do Ignite Lab
						</h1>
						<p className="mt-4 text-gray-200">
							Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
						</p>
					</div>

					<div className="flex flex-col gap-4">
						<Button type="discord">
							Comunidade do Discord
						</Button>

						<Button type="fast">
							Acesse o desafio
						</Button>
					</div>

					<div>

					</div>
				</div>
				<div>

				</div>
			</div>
		</div>
	)
}