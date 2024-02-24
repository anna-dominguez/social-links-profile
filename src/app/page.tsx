import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6">
      <div className="flex flex-col p-6 md:p-10 bg-[#1F1F1F] rounded-xl w-full max-w-[384px]">
        <div className="flex flex-col items-center space-y-6 text-center text-white">
          <Image
            className="rounded-full"
            width={88}
            height={88}
            src="/images/avatar-jessica.jpeg"
            alt="avatar"
          />
          <div>
            <h1 className="font-bold text-[24px]">Jessica Randall</h1>
            <h2 className="font-bold text-[14px] text-neonGreen">
              London, United Kingdom
            </h2>
          </div>
          <p className="text-[14px]">
            &quot;Front-end developer and avid reader.&quot;
          </p>
          <div className="flex flex-col space-y-4 w-full text-[14px]">
            <a className="p-3 font-bold cursor-pointer bg-[#333333] transition ease-in-out duration-500 hover:bg-neonGreen hover:text-black rounded-lg w-full">
              GitHub
            </a>
            <a className="p-3 font-bold cursor-pointer bg-[#333333] transition ease-in-out duration-500 hover:bg-neonGreen hover:text-black rounded-lg w-full">
              Frontend Mentor
            </a>
            <a className="p-3 font-bold cursor-pointer bg-[#333333] transition ease-in-out duration-500 hover:bg-neonGreen hover:text-black rounded-lg w-full">
              LinkedIn
            </a>
            <a className="p-3 font-bold cursor-pointer bg-[#333333] transition ease-in-out duration-500 hover:bg-neonGreen hover:text-black rounded-lg w-full">
              Twitter
            </a>
            <a className="p-3 font-bold cursor-pointer bg-[#333333] transition ease-in-out duration-500 hover:bg-neonGreen hover:text-black rounded-lg w-full">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
