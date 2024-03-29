import Container from "@/components/common/Container"
import EditCallBack from "@/components/utils/EditCallBack"
import Link from "next/link"

const NotFound = () => {
  return (
    <Container>
      <div className="flex items-center max-w-lg text-center mx-auto flex-col">
        <h1 className="text-3xl font-bold">404 : Content not found</h1>
        <h2 className="text-2xl pt-6 pb-20">No content found with the given slug.</h2>
        <p className="text-md">You are seeing this `Not Found` component, because the `notFound()` function is being called when an invalid slug is detected.</p>

        <p className="text-xs pt-10 pb-2 opacity-50">Explore further by experimenting with additional invalid slugs:</p>
        <ul className="flex text-xs gap-4 opacity-50 ">
          <li>
            <Link href="/about/cats">1. /about/cats</Link>
          </li>
          <li>
            <Link href="/about/twist">2. /about/twist</Link>
          </li>
          <li>
            <Link href="/about/fruits">3. /about/fruits</Link>
          </li>
        </ul>

        <div className="flex justify-end">
          <EditCallBack path="app/about/[slug]/not-found.tsx" />
        </div>
      </div>
    </Container>
  )
}

export default NotFound