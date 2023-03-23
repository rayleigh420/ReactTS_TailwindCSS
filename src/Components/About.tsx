import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

interface SnType {
    icon?: string,
    link: string,
    name: string,
}

const About = () => {
    const skill: string[] = ['ReactJS', 'ExpressJS', 'NextJS', 'TypeScript', 'TailwindCSS']
    const socialNetwork: SnType[] = [
        { link: 'https://github.com/rayleigh420', name: 'GitHub' },
        { link: 'https://www.linkedin.com/in/lnduy', name: 'Linkedin' },
        { link: 'https://www.facebook.com/nhatduy1412.2002', name: 'Facebook' }
    ]

    return (
        <div className="bg-white mx-auto mt-20 mb-16 max-w-7xl px-10">
            <div className="flex flex-row">
                <div className="basis-2/5">
                    <img src="src/assets/library.jpg" className="w-full -mt-7"></img>
                </div>
                <div className="mt-5 ml-5 grow">
                    <div className="flex flex-row">
                        <div className="grow text-center border-b border-r border-b-gray-400 border-r-gray-400 pb-3">
                            <h2 className="font-bold font-mono text-xl">Karen Rayleigh</h2>
                            <p className="font-light text-sm text-gray-500">Fullstack Developer</p>
                        </div>
                        <div className="grow text-center border-b border-r border-b-gray-400 border-r-gray-400 pb-3">
                            <h2 className="font-bold font-mono text-xl">Favourites</h2>
                            <p className="font-light text-sm text-gray-500">Coding, Hentai, Cosplay, Eroge</p>
                        </div>
                        <div className="grow text-center border-b border-b-gray-400 pb-3">
                            <h2 className="font-bold font-mono text-xl">School</h2>
                            <p className="font-light text-sm text-gray-500">VNUHCM - University of Science</p>
                        </div>
                    </div>

                    <div className="flex flex-row mt-6 ml-7">
                        <div className="basis-2/3 pl-6">
                            <h2 className="font-mono font-bold text-xl">Introduction</h2>
                            <p className="font-light text-sm text-gray-700">
                                Hello everyone, My name is Le Nhat Duy. I am a Fullstack-Developer. My favourite is coding, watch manga, hentai and anime.
                                <br />
                                Let's follow me!
                            </p>
                        </div>
                        <div className="basis-1/3 text-center pr-[30px]">
                            <h2 className="font-mono font-bold text-xl">Skill</h2>
                            {skill.map((item: string, index: number) => (
                                <span key={index} className="inline-block text-xs font-normal text-gray-600 border border-blue-900 px-2 py-1 rounded-lg mr-[6px] mt-[6px] hover:bg-cyan-700 hover:text-white-700">{item}</span>
                            ))}
                        </div>
                    </div>
                    <div className="mt-6 ml-12">
                        <h2 className="font-bold font-mono text-xl mb-4">Social Networks</h2>
                        {socialNetwork.map((item: SnType, index: number) => (
                            <span key={index} className="font-semibold text-white bg-gray-400 px-3 py-1 mr-1">
                                <a href={item.link} target="_blank">{item.name}</a>
                            </span>
                        ))}
                        {/* <span className="font-semibold text-white bg-gray-400 px-3 py-1 mr-1">
                            <a href="https://github.com/rayleigh420" target="_blank">GitHub</a>
                        </span>
                        <span className="font-semibold text-white bg-gray-400 px-3 py-1 mr-1">Linkedin</span>
                        <span className="font-semibold text-white bg-gray-400 px-3 py-1 mr-1">Facebook</span>
                        <span className="font-semibold text-white bg-gray-400 px-3 py-1 mr-1">Twiiter</span> */}
                    </div>

                </div>
            </div>
        </div>
    )
}



export default About