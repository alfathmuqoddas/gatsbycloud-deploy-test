import React from "react"
import "./Layout.css"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav className="container mx-auto px-4 flex flex-responsive items-center justify-between p-4">
      <Link to="/my-blog"><h1 className="m-0">MyBlog</h1></Link>
      <div>
		  <ul className="flex justify-between">
			<li className="px-4"><Link to="/my-blog/post/">Post</Link></li>
			<li className="px-4"><Link to="/my-blog/about/">About</Link></li>
		  </ul>
      </div>
    </nav>
  )
}
