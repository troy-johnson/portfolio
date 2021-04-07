import * as React from "react"
import { Layout, SEO } from "../components"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail, MdLocalPhone } from "react-icons/md"
import { IoMdDocument } from "react-icons/io"
import resume from "../assets/resume.pdf"

const IndexPage = () => (
  <Layout>
    <SEO title="TROY JOHNSON" />
    <main>
      <div className="border-dashed border-b-2 border-yellow-500 mb-8">
        <h1 className="text-4xl">TROY JOHNSON</h1>
        <h2 className="text-xl">SOFTWARE ENGINEER</h2>
      </div>
      <div className="flex flex-row items-center transition duration-500 ease-in-out hover:text-yellow-500" id="resume">
        <IoMdDocument className="mr-2" />
        <a href={resume} target="_blank">
          Resume
        </a>
      </div>
      <div className="flex flex-row items-center transition duration-500 ease-in-out hover:text-yellow-500" id="linkedin">
        <FaLinkedin className="mr-2" />
        <a href="https://www.linkedin.com/in/troy-johnson57/" alt="LinkedIn">
          troy-johnson57
        </a>
      </div>
      <div className="flex flex-row items-center transition duration-500 ease-in-out hover:text-yellow-500" id="email">
        <MdEmail className="mr-2" />
        <a href="mailto:troy.johnson57@gmail.com">troy.johnson57@gmail.com</a>
      </div>
      <div className="flex flex-row items-center transition duration-500 ease-in-out hover:text-yellow-500" id="phone">
        <MdLocalPhone className="mr-2" />
        (801) 913-4614
      </div>
    </main>
  </Layout>
)

export default IndexPage
