import * as React from "react"
import { Layout, SEO } from "../components"
import "@fontsource/raleway"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { HiDocumentText } from "react-icons/hi"
import resume from "../assets/resume.pdf"

const IndexPage = () => (
  <Layout>
    <SEO title="TROY JOHNSON" />
    <main>
      <div className="border-dashed border-b-2 border-yellow-500 mb-8 pb-6">
        <h1 className="text-6xl mb-4">TROY JOHNSON</h1>
        <h2 className="text-3xl">SOFTWARE ENGINEER</h2>
      </div>
      <div
        className="flex flex-row items-center transition duration-500 ease-in-out hover:text-yellow-500"
        id="resume"
      >
        <HiDocumentText className="mr-2" />
        <a
          href={resume}
          className="text-xl"
          download="troy-johnson-resume.pdf"
          target="_blank"
          alt="Resume"
          rel="noreferrer"
        >
          Résumé/CV
        </a>
      </div>
      <div
        className="flex flex-row items-center transition duration-500 ease-in-out hover:text-yellow-500"
        id="linkedin"
      >
        <FaLinkedin className="mr-2" />
        <a
          className="text-xl"
          href="https://github.com/troy-johnson"
          target="_blank"
          alt="GitHub"
          rel="noreferrer"
        >
          troy-johnson
        </a>
      </div>
      <div
        className="flex flex-row items-center transition duration-500 ease-in-out hover:text-yellow-500"
        id="linkedin"
      >
        <FaGithub className="mr-2" />
        <a
          className="text-xl"
          href="https://www.linkedin.com/in/troy-johnson57/"
          target="_blank"
          alt="LinkedIn"
          rel="noreferrer"
        >
          troy-johnson57
        </a>
      </div>
      <div
        className="flex flex-row items-center transition duration-500 ease-in-out hover:text-yellow-500"
        id="email"
      >
        <MdEmail className="mr-2" />
        <a className="text-xl" href="mailto:troy.johnson57@gmail.com">
          troy.johnson57@gmail.com
        </a>
      </div>
      {/* <div
        className="flex flex-row items-center transition duration-500 ease-in-out hover:text-yellow-500"
        id="phone"
      >
        <MdLocalPhone className="mr-2" />
        (801) 913-4614
      </div> */}
    </main>
  </Layout>
)

export default IndexPage
