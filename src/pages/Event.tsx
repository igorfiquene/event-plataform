import { Navigate, useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"
import { useGetFirstLessonQuery } from "../graphql/generated"

export function Event() {
	const { slug } = useParams<{ slug: string }>()
	const { data } = useGetFirstLessonQuery()

	if (!data || !data.lessons) {
		return (
			<div className="flex-1" />
		)
	}
	
	return (
		<div className="flex flex-col">
			<Header />
			<main className="flex flex-1 min-h-screen">
				{ slug
					? <Video lessonSlug={ slug } />
					: <Navigate replace to={`/event/lesson/${data?.lessons[0].slug}`} />
				}
				<Sidebar />
			</main>
		</div>
	)
}