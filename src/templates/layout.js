import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      gcms {
        dayDesigns {
          id
          day
          title
        }
      }
    }
  `)
  return (
    <>
      <header className="text-gray-700 body-font">
        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
          <a href='#' className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">tailblocks</span>
          </a>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
            {data.gcms.dayDesigns.map(e => {
              return (
                <Link className="mr-5 hover:text-gray-900" to={`/${e.day}`}>
                  Salut {e.day}
                </Link>
              )
            })}
          </nav>
          <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>
      <main className="container mx-auto">{children}</main>
    </>
  )
}

export default Layout